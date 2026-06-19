---
title: 60s 服务配置
description: 配置 60s API 服务的连接参数
fields:
  - key: base.baseUrl
    label: 60s API 地址
    type: text
    description: 60s 服务地址。默认使用官方公开实例，也可以改成你自己部署的 60s API 服务地址。
    placeholder: https://60s.viki.moe

  - key: base.timeoutMs
    label: 请求超时毫秒
    type: number
    description: 请求 60s API 时的超时时间。网络较慢或自建服务响应较慢时可以适当调大。
    placeholder: 15000
---
