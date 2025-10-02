---
title: Cascader 级联选择
nav:
  title: 组件
  path: /components
group:
  title: 数据录入
  order: 2
---

# Cascader 级联选择

级联选择框。基于 Ant Design Cascader 组件进行增强。

## 何时使用

- 需要从一组相关联的数据集合进行选择，例如省市区，公司层级，事物分类等。
- 从一个较大的数据集合中进行选择时，用多级分类进行分隔，方便选择。
- 比起 Select 组件，可以在同一个浮层中完成选择，有较好的体验。

## 代码演示

### 基础使用

<code src="./demos/basic.tsx">基础级联选择</code>

### 增强功能

<code src="./demos/enhanced.tsx">搜索和主题色</code>

## API

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| allowClear | 是否显示清除按钮 | boolean | true |
| showSearch | 是否支持搜索 | boolean | false |
| theme | 自定义主题色 | 'default' \| 'primary' \| 'success' \| 'warning' \| 'danger' | 'default' |

更多 API 请参考 [Ant Design Cascader](https://ant.design/components/cascader-cn#api)。