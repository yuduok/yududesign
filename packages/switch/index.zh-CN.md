---
title: Switch 开关
nav:
  title: 组件
  path: /components
group:
  title: 数据输入
  order: 2
---

# Switch 开关

开关选择器。基于 Ant Design Switch 组件进行增强。

## 何时使用

- 需要表示开关状态/两种状态之间的切换时；
- 和 checkbox 的区别是，切换 switch 会直接触发状态改变，而 checkbox 一般用于状态标记，需要和提交操作配合。

## 代码演示

### 基础使用

<code src="./demos/basic.tsx">基础开关</code>

### 增强功能

<code src="./demos/enhanced.tsx">增强开关</code>

## API

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| gradient | 是否显示渐变背景 | boolean | false |
| pulse | 是否显示脉冲动画 | boolean | false |
| statusText | 开关状态文本 | { checked: string; unchecked: string } | - |

更多 API 请参考 [Ant Design Switch](https://ant.design/components/switch-cn#api)。