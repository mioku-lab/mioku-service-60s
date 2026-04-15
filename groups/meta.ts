import type { SixtySecondsClient, SixtySecondsMetaApi } from "../types";

export function createMetaApi(
  request: SixtySecondsClient["request"],
): SixtySecondsMetaApi {
  return {
    getApiInfo: (options) => request("/", options),
    async health(options) {
      const result = await request("/health", {
        ...options,
        encoding: "text",
      });
      return String(result);
    },
    listEndpoints: (options) => request("/endpoints", options),
  };
}
