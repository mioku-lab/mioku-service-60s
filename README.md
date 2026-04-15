# mioku-60s-service

为 Mioku 提供 [60s API](https://docs.60s-api.viki.moe/) 的客户端服务封装

## 功能

- 默认官方实例 `https://60s.viki.moe`
- 支持插件按 `apiUrl` 创建自定义 60s 客户端
- 覆盖大部分官方 `/v2` 正式接口
- 支持 `json`、`text`、`markdown` 三种响应格式
- 提供 root 元信息、周期资讯、实用功能、热门榜单、消遣娱乐、beta 接口分组

## 插件中使用

在插件 `package.json` 中声明依赖：

```json
{
  "mioku": {
    "services": ["60s"]
  }
}
```

服务名是 `60s`，插件里需要用中括号读取：

```ts
import type { SixtySecondsService } from "../../src/services/60s";

const sixtySecondsService = ctx.services?.["60s"] as
  | SixtySecondsService
  | undefined;
```

## 快速示例

```ts
const sixtySecondsService = ctx.services?.["60s"] as
  | SixtySecondsService
  | undefined;

const client = sixtySecondsService?.getDefault();
const worldNews = await client?.periodic.daily60s();
const weather = await client?.utility.weatherRealtime({
  query: { city: "杭州" },
});

const customClient = sixtySecondsService?.createClient({
  baseUrl: "https://your-60s-api.example.com",
  defaultEncoding: "json",
});

const douyinHot = await customClient?.hot.douyin();
```

## 主要接口分组

- `meta`: `/`、`/health`、`/endpoints`
- `periodic`: 60s、RSS、AI 新闻、必应壁纸、汇率、历史上的今天、Epic、IT 资讯
- `utility`: 奥运、金价、油价、天气、摸鱼、歌词、Whois、二维码、百科、翻译、OG、哈希、健康、密码、颜色、农历
- `hot`: 抖音、小红书、B 站、夸克、微博、百度、头条、知乎、懂车帝、网易云、Hacker News、猫眼、豆瓣周榜
- `entertainment`: 答案之书、JS 趣味题、唱歌音频、化合物、段子、发病文学、一言、KFC 文案、运势、冷笑话
- `beta`: QQ 资料、宽带信息

## 参考

- 文档: https://docs.60s-api.viki.moe/
- 参数约定: https://docs.60s-api.viki.moe/5827401m0.md
- 开源仓库: https://github.com/vikiboss/60s
