import type { SixtySecondsClient, SixtySecondsHotApi } from "../types";

export function createHotApi(
  request: SixtySecondsClient["request"],
): SixtySecondsHotApi {
  return {
    douyin: (options) => request("/v2/douyin", options),
    rednote: (options) => request("/v2/rednote", options),
    bili: (options) => request("/v2/bili", options),
    quark: (options) => request("/v2/quark", options),
    weibo: (options) => request("/v2/weibo", options),
    baiduHot: (options) => request("/v2/baidu/hot", options),
    baiduTeleplay: (options) => request("/v2/baidu/teleplay", options),
    baiduTieba: (options) => request("/v2/baidu/tieba", options),
    toutiao: (options) => request("/v2/toutiao", options),
    zhihu: (options) => request("/v2/zhihu", options),
    dongchedi: (options) => request("/v2/dongchedi", options),
    ncmRankList: (options) => request("/v2/ncm-rank/list", options),
    ncmRankDetail: (id, options) => request(`/v2/ncm-rank/${id}`, options),
    hackerNewsTop: (options) => request("/v2/hacker-news/top", options),
    hackerNewsNew: (options) => request("/v2/hacker-news/new", options),
    hackerNewsBest: (options) => request("/v2/hacker-news/best", options),
    maoyanAllMovie: (options) => request("/v2/maoyan/all/movie", options),
    maoyanRealtimeMovie: (options) =>
      request("/v2/maoyan/realtime/movie", options),
    maoyanRealtimeTv: (options) => request("/v2/maoyan/realtime/tv", options),
    maoyanRealtimeWeb: (options) =>
      request("/v2/maoyan/realtime/web", options),
    doubanWeeklyMovie: (options) => request("/v2/douban/weekly/movie", options),
    doubanWeeklyTvChinese: (options) =>
      request("/v2/douban/weekly/tv_chinese", options),
    doubanWeeklyTvGlobal: (options) =>
      request("/v2/douban/weekly/tv_global", options),
    doubanWeeklyShowChinese: (options) =>
      request("/v2/douban/weekly/show_chinese", options),
    doubanWeeklyShowGlobal: (options) =>
      request("/v2/douban/weekly/show_global", options),
  };
}
