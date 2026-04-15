import { logger } from "mioki";
import type { MiokuService } from "../../core/types";
import { createSixtySecondsClient } from "./client";
import type {
  SixtySecondsClient,
  SixtySecondsClientOptions,
  SixtySecondsService,
} from "./types";

const DEFAULT_CLIENT_NAME = "default";
const DEFAULT_BASE_URL = "https://60s.viki.moe";

class SixtySecondsServiceImpl implements SixtySecondsService {
  private readonly clients = new Map<string, SixtySecondsClient>();
  private defaultClientName = DEFAULT_CLIENT_NAME;

  constructor() {
    this.create({
      name: DEFAULT_CLIENT_NAME,
      baseUrl: DEFAULT_BASE_URL,
    });
  }

  create(options: SixtySecondsClientOptions): SixtySecondsClient {
    const name = String(options.name || "").trim();
    if (!name) {
      throw new Error("创建命名 60s 客户端时必须传入 name");
    }

    const client = createSixtySecondsClient(options);
    this.clients.set(name, client);
    return client;
  }

  createClient(
    options: string | SixtySecondsClientOptions,
  ): SixtySecondsClient {
    if (typeof options === "string") {
      return createSixtySecondsClient({ baseUrl: options });
    }
    return createSixtySecondsClient(options);
  }

  get(name: string): SixtySecondsClient | undefined {
    return this.clients.get(String(name || "").trim());
  }

  list(): string[] {
    return Array.from(this.clients.keys());
  }

  remove(name: string): boolean {
    const target = String(name || "").trim();
    if (!target || target === this.defaultClientName) {
      return false;
    }
    return this.clients.delete(target);
  }

  setDefault(name: string): boolean {
    const target = String(name || "").trim();
    if (!this.clients.has(target)) {
      return false;
    }
    this.defaultClientName = target;
    return true;
  }

  getDefault(): SixtySecondsClient {
    const client = this.clients.get(this.defaultClientName);
    if (!client) {
      throw new Error("默认 60s 客户端不存在");
    }
    return client;
  }

  dispose(): void {
    this.clients.clear();
  }
}

const sixtySecondsService: MiokuService = {
  name: "60s",
  version: "1.0.0",
  description: "60s API 客户端服务，支持多实例和大部分官方端点",
  api: {} as SixtySecondsService,

  async init() {
    this.api = new SixtySecondsServiceImpl();
    logger.info("60s-service 已就绪");
  },

  async dispose() {
    if (this.api && typeof (this.api as any).dispose === "function") {
      (this.api as any).dispose();
    }
    logger.info("60s-service 已卸载");
  },
};

export default sixtySecondsService;

export type {
  SixtySecondsBetaApi,
  SixtySecondsClient,
  SixtySecondsClientOptions,
  SixtySecondsEncoding,
  SixtySecondsEntertainmentApi,
  SixtySecondsHotApi,
  SixtySecondsJsonResponse,
  SixtySecondsMetaApi,
  SixtySecondsPeriodicApi,
  SixtySecondsRequestOptions,
  SixtySecondsResponse,
  SixtySecondsService,
  SixtySecondsUtilityApi,
} from "./types";
