export type SixtySecondsEncoding = "json" | "text" | "markdown";
export type SixtySecondsMethod = "GET" | "POST";

export type SixtySecondsQueryPrimitive =
  | string
  | number
  | boolean
  | null
  | undefined;

export type SixtySecondsQueryValue =
  | SixtySecondsQueryPrimitive
  | SixtySecondsQueryPrimitive[];

export interface SixtySecondsRequestOptions {
  method?: SixtySecondsMethod;
  query?: Record<string, SixtySecondsQueryValue>;
  body?: unknown;
  headers?: Record<string, string>;
  encoding?: SixtySecondsEncoding;
  signal?: AbortSignal;
  timeoutMs?: number;
}

export interface SixtySecondsClientOptions {
  name?: string;
  baseUrl: string;
  defaultEncoding?: SixtySecondsEncoding;
  timeoutMs?: number;
  headers?: Record<string, string>;
}

export interface SixtySecondsJsonResponse<T = unknown> {
  code: number;
  message: string;
  data: T;
  __debug__?: Record<string, unknown>;
}

export type SixtySecondsResponse<T = unknown> =
  | SixtySecondsJsonResponse<T>
  | string;

export interface SixtySecondsMetaApi {
  getApiInfo<T = unknown>(
    options?: SixtySecondsRequestOptions,
  ): Promise<SixtySecondsResponse<T>>;
  health(options?: SixtySecondsRequestOptions): Promise<string>;
  listEndpoints<T = string[]>(
    options?: SixtySecondsRequestOptions,
  ): Promise<SixtySecondsResponse<T>>;
}

export interface SixtySecondsPeriodicApi {
  daily60s<T = unknown>(
    options?: SixtySecondsRequestOptions,
  ): Promise<SixtySecondsResponse<T>>;
  daily60sRss<T = unknown>(
    options?: SixtySecondsRequestOptions,
  ): Promise<SixtySecondsResponse<T>>;
  aiNews<T = unknown>(
    options?: SixtySecondsRequestOptions,
  ): Promise<SixtySecondsResponse<T>>;
  bingWallpaper<T = unknown>(
    options?: SixtySecondsRequestOptions,
  ): Promise<SixtySecondsResponse<T>>;
  exchangeRate<T = unknown>(
    options?: SixtySecondsRequestOptions,
  ): Promise<SixtySecondsResponse<T>>;
  todayInHistory<T = unknown>(
    options?: SixtySecondsRequestOptions,
  ): Promise<SixtySecondsResponse<T>>;
  epicGames<T = unknown>(
    options?: SixtySecondsRequestOptions,
  ): Promise<SixtySecondsResponse<T>>;
  itNews<T = unknown>(
    options?: SixtySecondsRequestOptions,
  ): Promise<SixtySecondsResponse<T>>;
}

export interface SixtySecondsUtilityApi {
  olympics<T = unknown>(
    options?: SixtySecondsRequestOptions,
  ): Promise<SixtySecondsResponse<T>>;
  olympicsEvents<T = unknown>(
    options?: SixtySecondsRequestOptions,
  ): Promise<SixtySecondsResponse<T>>;
  goldPrice<T = unknown>(
    options?: SixtySecondsRequestOptions,
  ): Promise<SixtySecondsResponse<T>>;
  fuelPrice<T = unknown>(
    options?: SixtySecondsRequestOptions,
  ): Promise<SixtySecondsResponse<T>>;
  weatherRealtime<T = unknown>(
    options?: SixtySecondsRequestOptions,
  ): Promise<SixtySecondsResponse<T>>;
  weatherForecast<T = unknown>(
    options?: SixtySecondsRequestOptions,
  ): Promise<SixtySecondsResponse<T>>;
  moyu<T = unknown>(
    options?: SixtySecondsRequestOptions,
  ): Promise<SixtySecondsResponse<T>>;
  lyric<T = unknown>(
    options?: SixtySecondsRequestOptions,
  ): Promise<SixtySecondsResponse<T>>;
  whois<T = unknown>(
    options?: SixtySecondsRequestOptions,
  ): Promise<SixtySecondsResponse<T>>;
  qrcode<T = unknown>(
    options?: SixtySecondsRequestOptions,
  ): Promise<SixtySecondsResponse<T>>;
  baike<T = unknown>(
    options?: SixtySecondsRequestOptions,
  ): Promise<SixtySecondsResponse<T>>;
  translate<T = unknown>(
    options?: SixtySecondsRequestOptions,
  ): Promise<SixtySecondsResponse<T>>;
  translateLanguages<T = unknown>(
    options?: SixtySecondsRequestOptions,
  ): Promise<SixtySecondsResponse<T>>;
  publicIp<T = unknown>(
    options?: SixtySecondsRequestOptions,
  ): Promise<SixtySecondsResponse<T>>;
  linkOg<T = unknown>(
    options?: SixtySecondsRequestOptions,
  ): Promise<SixtySecondsResponse<T>>;
  hash<T = unknown>(
    options?: SixtySecondsRequestOptions,
  ): Promise<SixtySecondsResponse<T>>;
  health<T = unknown>(
    options?: SixtySecondsRequestOptions,
  ): Promise<SixtySecondsResponse<T>>;
  password<T = unknown>(
    options?: SixtySecondsRequestOptions,
  ): Promise<SixtySecondsResponse<T>>;
  passwordCheck<T = unknown>(
    options?: SixtySecondsRequestOptions,
  ): Promise<SixtySecondsResponse<T>>;
  randomColor<T = unknown>(
    options?: SixtySecondsRequestOptions,
  ): Promise<SixtySecondsResponse<T>>;
  colorPalette<T = unknown>(
    options?: SixtySecondsRequestOptions,
  ): Promise<SixtySecondsResponse<T>>;
  lunar<T = unknown>(
    options?: SixtySecondsRequestOptions,
  ): Promise<SixtySecondsResponse<T>>;
}

export interface SixtySecondsHotApi {
  douyin<T = unknown>(
    options?: SixtySecondsRequestOptions,
  ): Promise<SixtySecondsResponse<T>>;
  rednote<T = unknown>(
    options?: SixtySecondsRequestOptions,
  ): Promise<SixtySecondsResponse<T>>;
  bili<T = unknown>(
    options?: SixtySecondsRequestOptions,
  ): Promise<SixtySecondsResponse<T>>;
  quark<T = unknown>(
    options?: SixtySecondsRequestOptions,
  ): Promise<SixtySecondsResponse<T>>;
  weibo<T = unknown>(
    options?: SixtySecondsRequestOptions,
  ): Promise<SixtySecondsResponse<T>>;
  baiduHot<T = unknown>(
    options?: SixtySecondsRequestOptions,
  ): Promise<SixtySecondsResponse<T>>;
  baiduTeleplay<T = unknown>(
    options?: SixtySecondsRequestOptions,
  ): Promise<SixtySecondsResponse<T>>;
  baiduTieba<T = unknown>(
    options?: SixtySecondsRequestOptions,
  ): Promise<SixtySecondsResponse<T>>;
  toutiao<T = unknown>(
    options?: SixtySecondsRequestOptions,
  ): Promise<SixtySecondsResponse<T>>;
  zhihu<T = unknown>(
    options?: SixtySecondsRequestOptions,
  ): Promise<SixtySecondsResponse<T>>;
  dongchedi<T = unknown>(
    options?: SixtySecondsRequestOptions,
  ): Promise<SixtySecondsResponse<T>>;
  ncmRankList<T = unknown>(
    options?: SixtySecondsRequestOptions,
  ): Promise<SixtySecondsResponse<T>>;
  ncmRankDetail<T = unknown>(
    id: string | number,
    options?: SixtySecondsRequestOptions,
  ): Promise<SixtySecondsResponse<T>>;
  hackerNewsTop<T = unknown>(
    options?: SixtySecondsRequestOptions,
  ): Promise<SixtySecondsResponse<T>>;
  hackerNewsNew<T = unknown>(
    options?: SixtySecondsRequestOptions,
  ): Promise<SixtySecondsResponse<T>>;
  hackerNewsBest<T = unknown>(
    options?: SixtySecondsRequestOptions,
  ): Promise<SixtySecondsResponse<T>>;
  maoyanAllMovie<T = unknown>(
    options?: SixtySecondsRequestOptions,
  ): Promise<SixtySecondsResponse<T>>;
  maoyanRealtimeMovie<T = unknown>(
    options?: SixtySecondsRequestOptions,
  ): Promise<SixtySecondsResponse<T>>;
  maoyanRealtimeTv<T = unknown>(
    options?: SixtySecondsRequestOptions,
  ): Promise<SixtySecondsResponse<T>>;
  maoyanRealtimeWeb<T = unknown>(
    options?: SixtySecondsRequestOptions,
  ): Promise<SixtySecondsResponse<T>>;
  doubanWeeklyMovie<T = unknown>(
    options?: SixtySecondsRequestOptions,
  ): Promise<SixtySecondsResponse<T>>;
  doubanWeeklyTvChinese<T = unknown>(
    options?: SixtySecondsRequestOptions,
  ): Promise<SixtySecondsResponse<T>>;
  doubanWeeklyTvGlobal<T = unknown>(
    options?: SixtySecondsRequestOptions,
  ): Promise<SixtySecondsResponse<T>>;
  doubanWeeklyShowChinese<T = unknown>(
    options?: SixtySecondsRequestOptions,
  ): Promise<SixtySecondsResponse<T>>;
  doubanWeeklyShowGlobal<T = unknown>(
    options?: SixtySecondsRequestOptions,
  ): Promise<SixtySecondsResponse<T>>;
}

export interface SixtySecondsEntertainmentApi {
  answerBook<T = unknown>(
    options?: SixtySecondsRequestOptions,
  ): Promise<SixtySecondsResponse<T>>;
  randomJsQuestion<T = unknown>(
    options?: SixtySecondsRequestOptions,
  ): Promise<SixtySecondsResponse<T>>;
  randomSingingAudio<T = unknown>(
    options?: SixtySecondsRequestOptions,
  ): Promise<SixtySecondsResponse<T>>;
  randomChemical<T = unknown>(
    options?: SixtySecondsRequestOptions,
  ): Promise<SixtySecondsResponse<T>>;
  randomJoke<T = unknown>(
    options?: SixtySecondsRequestOptions,
  ): Promise<SixtySecondsResponse<T>>;
  randomSicknessEssay<T = unknown>(
    options?: SixtySecondsRequestOptions,
  ): Promise<SixtySecondsResponse<T>>;
  randomQuote<T = unknown>(
    options?: SixtySecondsRequestOptions,
  ): Promise<SixtySecondsResponse<T>>;
  randomKfcCopywriting<T = unknown>(
    options?: SixtySecondsRequestOptions,
  ): Promise<SixtySecondsResponse<T>>;
  randomLuck<T = unknown>(
    options?: SixtySecondsRequestOptions,
  ): Promise<SixtySecondsResponse<T>>;
  randomDadJoke<T = unknown>(
    options?: SixtySecondsRequestOptions,
  ): Promise<SixtySecondsResponse<T>>;
}

export interface SixtySecondsBetaApi {
  qqProfile<T = unknown>(
    options?: SixtySecondsRequestOptions,
  ): Promise<SixtySecondsResponse<T>>;
  kuan<T = unknown>(
    options?: SixtySecondsRequestOptions,
  ): Promise<SixtySecondsResponse<T>>;
}

export interface SixtySecondsClient {
  readonly baseUrl: string;
  readonly defaultEncoding: SixtySecondsEncoding;
  request<T = unknown>(
    path: string,
    options?: SixtySecondsRequestOptions,
  ): Promise<SixtySecondsResponse<T>>;
  meta: SixtySecondsMetaApi;
  periodic: SixtySecondsPeriodicApi;
  utility: SixtySecondsUtilityApi;
  hot: SixtySecondsHotApi;
  entertainment: SixtySecondsEntertainmentApi;
  beta: SixtySecondsBetaApi;
}

export interface SixtySecondsService {
  create(options: SixtySecondsClientOptions): SixtySecondsClient;
  createClient(
    options: string | SixtySecondsClientOptions,
  ): SixtySecondsClient;
  get(name: string): SixtySecondsClient | undefined;
  list(): string[];
  remove(name: string): boolean;
  setDefault(name: string): boolean;
  getDefault(): SixtySecondsClient;
}
