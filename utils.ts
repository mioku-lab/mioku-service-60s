import type {
  SixtySecondsEncoding,
  SixtySecondsQueryPrimitive,
  SixtySecondsQueryValue,
} from "./types";

type RequestBodyValue =
  | string
  | URLSearchParams
  | FormData
  | Blob
  | ArrayBuffer
  | undefined;

function appendQueryValue(
  target: URLSearchParams,
  key: string,
  value: SixtySecondsQueryPrimitive,
): void {
  if (value === null || value === undefined) {
    return;
  }
  target.append(key, String(value));
}

export function normalizeBaseUrl(baseUrl: string): string {
  const normalized = String(baseUrl || "").trim();
  if (!normalized) {
    throw new Error("60s API baseUrl 不能为空");
  }

  const url = new URL(normalized);
  return url.toString().replace(/\/+$/, "");
}

export function buildRequestUrl(
  baseUrl: string,
  path: string,
  query?: Record<string, SixtySecondsQueryValue>,
  encoding?: SixtySecondsEncoding,
): string {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  const url = new URL(normalizedPath, `${baseUrl}/`);
  const params = new URLSearchParams(url.search);

  if (query) {
    for (const [key, rawValue] of Object.entries(query)) {
      if (Array.isArray(rawValue)) {
        for (const item of rawValue) {
          appendQueryValue(params, key, item);
        }
        continue;
      }
      appendQueryValue(params, key, rawValue);
    }
  }

  if (encoding) {
    params.set("encoding", encoding);
  }

  url.search = params.toString();
  return url.toString();
}

export function resolveEncoding(
  explicit: SixtySecondsEncoding | undefined,
  fallback: SixtySecondsEncoding,
): SixtySecondsEncoding {
  return explicit || fallback;
}

export function isJsonResponse(contentType: string | null): boolean {
  return (contentType || "").toLowerCase().includes("application/json");
}

export function buildRequestHeaders(
  encoding: SixtySecondsEncoding,
  defaults?: Record<string, string>,
  overrides?: Record<string, string>,
): Record<string, string> {
  const accept =
    encoding === "json"
      ? "application/json, text/plain;q=0.9, */*;q=0.8"
      : "text/plain, text/markdown, application/json;q=0.8, */*;q=0.7";

  return {
    Accept: accept,
    "User-Agent": "mioku-service-60s/1.0.0",
    ...defaults,
    ...overrides,
  };
}

export function buildRequestBody(body: unknown): RequestBodyValue {
  if (body === undefined) {
    return undefined;
  }

  if (
    typeof body === "string" ||
    body instanceof URLSearchParams ||
    body instanceof FormData ||
    body instanceof Blob ||
    body instanceof ArrayBuffer
  ) {
    return body as RequestBodyValue;
  }

  return JSON.stringify(body);
}

export function createTimeoutSignal(
  timeoutMs: number,
  upstream?: AbortSignal,
): AbortSignal {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), timeoutMs);

  if (upstream) {
    if (upstream.aborted) {
      controller.abort();
    } else {
      upstream.addEventListener("abort", () => controller.abort(), {
        once: true,
      });
    }
  }

  controller.signal.addEventListener(
    "abort",
    () => {
      clearTimeout(timeoutId);
    },
    { once: true },
  );

  return controller.signal;
}
