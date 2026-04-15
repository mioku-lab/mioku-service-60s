import type { SixtySecondsBetaApi, SixtySecondsClient } from "../types";

export function createBetaApi(
  request: SixtySecondsClient["request"],
): SixtySecondsBetaApi {
  return {
    qqProfile: (options) => request("/v2/beta/qq/profile", options),
    kuan: (options) => request("/v2/beta/kuan", options),
  };
}
