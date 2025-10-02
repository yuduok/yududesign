---
title: Radio 单选框
nav:
  title: 组件
  path: /components
group:
  title: 数据录入
  order: 2
---

# Radio 单选框

单选框。基于 Ant Design Radio 组件进行增强。

## 何时使用

- 用于在多个备选项中选中单个状态。
- 和 Select 的区别是，Radio 所有选项默认可见，方便用户在比较中选择，因此选项不宜过多。

## 代码演示

### 基础使用

<code src="./demos/basic.tsx">基础单选框</code>

### 增强功能

<code src="./demos/enhanced.tsx">颜色主题与卡片样式</code>

## API

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| animated | 是否启用动画效果 | boolean | true |
| colorTheme | 自定义颜色主题 | 'primary' \| 'success' \| 'warning' \| 'danger' | 'primary' |

### Radio.Group

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| animated | 是否启用动画效果 | boolean | true |
| cardStyle | 是否启用卡片样式 | boolean | false |

更多 API 请参考 [Ant Design Radio](https://ant.design/components/radio-cn#api)。