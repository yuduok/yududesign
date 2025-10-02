---
title: Select 选择器
nav:
  title: 组件
  path: /components
group:
  title: 数据输入
  order: 2
---

# Select 选择器

下拉选择器。基于 Ant Design Select 组件进行增强。

## 何时使用

- 弹出一个下拉菜单给用户选择操作，用于代替原生的选择器，或者需要一个更优雅的多选器时。
- 当选项少时（少于 5 项），建议直接将选项平铺，使用 Radio 是更好的选择。

## 代码演示

### 基础使用

<code src="./demos/basic.tsx">基础选择器</code>

### 增强功能

<code src="./demos/enhanced.tsx">增强选择器</code>

## API

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| showOptionCount | 是否显示选项计数 | boolean | false |
| taggedMode | 是否显示选中项标签增强 | boolean | false |
| borderAnimation | 是否显示边框动画效果 | boolean | false |

更多 API 请参考 [Ant Design Select](https://ant.design/components/select-cn#api)。