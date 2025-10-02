---
title: Checkbox 多选框
nav:
  title: 组件
  path: /components
group:
  title: 数据录入
  order: 2
---

# Checkbox 多选框

多选框。基于 Ant Design Checkbox 组件进行增强。

## 何时使用

- 在一组可选项中进行多项选择时；
- 单独使用可以表示两种状态之间的切换，和 switch 类似。区别在于切换 switch 会直接触发状态改变，而 checkbox 一般用于状态标记，需要和提交操作配合。

## 代码演示

### 基础使用

<code src="./demos/basic.tsx">基础多选框</code>

### 增强功能

<code src="./demos/enhanced.tsx">带边框和颜色主题</code>

## API

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| bordered | 是否显示边框 | boolean | false |
| color | 自定义颜色主题 | 'primary' \| 'secondary' \| 'success' \| 'warning' \| 'danger' | 'primary' |

更多 API 请参考 [Ant Design Checkbox](https://ant.design/components/checkbox-cn#api)。