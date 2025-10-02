---
title: Rate 评分
nav:
  title: 组件
  path: /components
group:
  title: 数据录入
  order: 2
---

# Rate 评分

评分组件。基于 Ant Design Rate 组件进行增强。

## 何时使用

- 对评价进行展示。
- 对事物进行快速的评级操作。

## 代码演示

### 基础使用

<code src="./demos/basic.tsx">基础评分</code>

### 增强功能

<code src="./demos/enhanced.tsx">自定义图标与描述文字</code>

## API

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| animated | 是否启用动画效果 | boolean | true |
| colorTheme | 颜色主题 | 'star' \| 'heart' \| 'emoji' \| 'custom' | 'star' |
| showText | 是否显示描述文字 | boolean | false |
| textMap | 自定义描述文字 | string[] | ['很差', '较差', '一般', '较好', '很好'] |

更多 API 请参考 [Ant Design Rate](https://ant.design/components/rate-cn#api)。