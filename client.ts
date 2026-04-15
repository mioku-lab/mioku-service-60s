import { createBetaApi } from "./groups/beta";
import { createEntertainmentApi } from "./groups/entertainment";
import { createHotApi } from "./groups/hot";
import { createMetaApi } from "./groups/meta";
import { createPeriodicApi } from "./groups/periodic";
import { createUtilityApi } from "./groups/utility";
import type {
  SixtySecondsClient,
  SixtySecondsClientOptions,
  SixtySecondsEncoding,
  SixtySecondsRequestOptions,
  SixtySecondsResponse,
} from "./types";
import {
  buildRequestBody,
  buildRequestHeaders,
  buildRequestUrl,
  createTimeoutSignal,
  isJsonResponse,
  normalizeBaseUrl,
  resolveEncoding,
} from "./utils";

const DEFAULT_TIMEOUT_MS = 15_000;
const DEFAULT_ENCODING: SixtySecondsEncoding = "json";

class SixtySecondsClientImpl implements SixtySecondsClient {
  readonly baseUrl: string;
  readonly defaultEncoding: SixtySecondsEncoding;
  private readonly timeoutMs: number;
  private readonly headers?: Record<string, string>;

  readonly meta;
  readonly periodic;
  readonly utility;
  readonly hot;
  readonly entertainment;
  readonly beta;

  constructor(options: SixtySecondsClientOptions) {
    this.baseUrl = normalizeBaseUrl(options.baseUrl);
    this.defaultEncoding = options.defaultEncoding || DEFAULT_ENCODING;
    this.timeoutMs = options.timeoutMs || DEFAULT_TIMEOUT_MS;
    this.headers = options.headers;

    const request = this.request.bind(this);
    this.meta = createMetaApi(request);
    this.periodic = createPeriodicApi(request);
    this.utility = createUtilityApi(request);
    this.hot = createHotApi(request);
    this.entertainment = createEntertainmentApi(request);
    this.beta = createBetaApi(request);
  }

  async request<T = unknown>(
    path: string,
    options: SixtySecondsRequestOptions = {},
  ): Promise<SixtySecondsResponse<T>> {
    const encoding = resolveEncoding(options.encoding, this.defaultEncoding);
    const method = options.method || "GET";
    const url = buildRequestUrl(this.baseUrl, path, options.query, encoding);
    const headers = buildRequestHeaders(encoding, this.headers, options.headers);
    const signal = createTimeoutSignal(
      options.timeoutMs || this.timeoutMs,
      options.signal,
    );
    const body = buildRequestBody(options.body);

    if (body !== undefined && !headers["Content-Type"]) {
      headers["Content-Type"] = "application/json";
    }

    const response = await fetch(url, {
      method,
      headers,
      signal,
      body: method === "GET" ? undefined : body,
    });

    const rawText = await response.text();

    if (!response.ok) {
      throw new Error(
        `60s API 请求失败: ${response.status} ${response.statusText}${rawText ? ` - ${rawText.slice(0, 300)}` : ""}`,
      );
    }

    if (encoding === "json" || isJsonResponse(response.headers.get("content-type"))) {
      return JSON.parse(rawText) as SixtySecondsResponse<T>;
    }

    return rawText;
  }
}

export function createSixtySecondsClient(
  options: SixtySecondsClientOptions,
): SixtySecondsClient {
  return new SixtySecondsClientImpl(options);
}
