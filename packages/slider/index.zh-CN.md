---
title: Slider 滑动输入条
nav:
  title: 组件
  path: /components
group:
  title: 数据录入
  order: 2
---

# Slider 滑动输入条

滑动型输入器，展示当前值和可选范围。基于 Ant Design Slider 组件进行增强。

## 何时使用

当用户需要在数值区间/自定义区间内进行选择时，可为连续或离散值。

## 代码演示

### 基础使用

<code src="./demos/basic.tsx">基础滑块</code>

### 增强功能

<code src="./demos/enhanced.tsx">渐变效果与颜色主题</code>

## API

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| animated | 是否启用动画效果 | boolean | true |
| gradient | 是否显示进度渐变 | boolean | false |
| colorTheme | 颜色主题 | 'primary' \| 'success' \| 'warning' \| 'danger' | 'primary' |
| showValue | 是否显示值标签 | boolean | false |

更多 API 请参考 [Ant Design Slider](https://ant.design/components/slider-cn#api)。