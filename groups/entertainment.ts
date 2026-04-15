import type {
  SixtySecondsClient,
  SixtySecondsEntertainmentApi,
} from "../types";

export function createEntertainmentApi(
  request: SixtySecondsClient["request"],
): SixtySecondsEntertainmentApi {
  return {
    answerBook: (options) => request("/v2/answer", options),
    randomJsQuestion: (options) => request("/v2/awesome-js", options),
    randomSingingAudio: (options) => request("/v2/changya", options),
    randomChemical: (options) => request("/v2/chemical", options),
    randomJoke: (options) => request("/v2/duanzi", options),
    randomSicknessEssay: (options) => request("/v2/fabing", options),
    randomQuote: (options) => request("/v2/hitokoto", options),
    randomKfcCopywriting: (options) => request("/v2/kfc", options),
    randomLuck: (options) => request("/v2/luck", options),
    randomDadJoke: (options) => request("/v2/dad-joke", options),
  };
}
