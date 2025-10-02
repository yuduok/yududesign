---
title: Card 卡片
nav:
  title: 组件
  path: /components
group:
  title: 数据展示
  order: 3
---

# Card 卡片

通用卡片容器。基于 Ant Design Card 组件进行增强。

## 何时使用

最基础的卡片容器，可承载文字、列表、图片、段落，常用于后台概览页面。

## 代码演示

### 基础使用

<code src="./demos/basic.tsx">基础卡片</code>

### 增强功能

<code src="./demos/enhanced.tsx">增强卡片</code>

## API

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| hoverable | 是否显示悬浮效果 | boolean | false |
| gradientBorder | 是否显示渐变边框 | boolean | false |
| shadow | 阴影效果大小 | 'none' \| 'small' \| 'medium' \| 'large' | 'none' |
| collapsible | 是否可折叠 | boolean | false |

更多 API 请参考 [Ant Design Card](https://ant.design/components/card-cn#api)。