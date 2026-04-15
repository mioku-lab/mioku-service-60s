import type { SixtySecondsClient, SixtySecondsPeriodicApi } from "../types";

export function createPeriodicApi(
  request: SixtySecondsClient["request"],
): SixtySecondsPeriodicApi {
  return {
    daily60s: (options) => request("/v2/60s", options),
    daily60sRss: (options) => request("/v2/60s/rss", options),
    aiNews: (options) => request("/v2/ai-news", options),
    bingWallpaper: (options) => request("/v2/bing", options),
    exchangeRate: (options) => request("/v2/exchange-rate", options),
    todayInHistory: (options) => request("/v2/today-in-history", options),
    epicGames: (options) => request("/v2/epic", options),
    itNews: (options) => request("/v2/it-news", options),
  };
}
