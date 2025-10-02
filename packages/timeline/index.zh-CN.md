---
title: Timeline 时间轴
nav:
  title: 组件
  path: /components
group:
  title: 数据展示
  order: 3
---

# Timeline 时间轴

垂直展示的时间流信息。基于 Ant Design Timeline 组件进行增强。

## 何时使用

- 当有一系列信息需按时间排列时。
- 需要有一条时间轴进行视觉上的串联时。

## 代码演示

### 基础使用

<code src="./demos/basic.tsx">基础时间轴</code>

### 增强功能

<code src="./demos/enhanced.tsx">状态图标与时间显示</code>

## API

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| animated | 是否启用动画效果 | boolean | true |
| theme | 时间轴主题 | 'default' \| 'success' \| 'process' \| 'error' | 'default' |
| showTime | 是否显示时间 | boolean | false |

### Timeline.Item

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| status | 状态类型 | 'success' \| 'process' \| 'error' \| 'default' | 'default' |
| time | 时间信息 | string | - |

更多 API 请参考 [Ant Design Timeline](https://ant.design/components/timeline-cn#api)。