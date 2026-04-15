import type { SixtySecondsClient, SixtySecondsUtilityApi } from "../types";

export function createUtilityApi(
  request: SixtySecondsClient["request"],
): SixtySecondsUtilityApi {
  return {
    olympics: (options) => request("/v2/olympics", options),
    olympicsEvents: (options) => request("/v2/olympics/events", options),
    goldPrice: (options) => request("/v2/gold-price", options),
    fuelPrice: (options) => request("/v2/fuel-price", options),
    weatherRealtime: (options) => request("/v2/weather/realtime", options),
    weatherForecast: (options) => request("/v2/weather/forecast", options),
    moyu: (options) => request("/v2/moyu", options),
    lyric: (options) => request("/v2/lyric", options),
    whois: (options) => request("/v2/whois", options),
    qrcode: (options) => request("/v2/qrcode", options),
    baike: (options) => request("/v2/baike", options),
    translate: (options) => request("/v2/fanyi", options),
    translateLanguages: (options) => request("/v2/fanyi/langs", options),
    publicIp: (options) => request("/v2/ip", options),
    linkOg: (options) => request("/v2/og", options),
    hash: (options) => request("/v2/hash", options),
    health: (options) => request("/v2/health", options),
    password: (options) => request("/v2/password", options),
    passwordCheck: (options) => request("/v2/password/check", options),
    randomColor: (options) => request("/v2/color/random", options),
    colorPalette: (options) => request("/v2/color/palette", options),
    lunar: (options) => request("/v2/lunar", options),
  };
}
