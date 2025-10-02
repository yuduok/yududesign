---
title: Form 表单
nav:
  title: 组件
  path: /components
group:
  title: 数据录入
  order: 2
---

# Form 表单

高性能订阅式表单，让表单开发更简单。基于 Ant Design Form 组件进行增强。

## 何时使用

- 用于创建一个实体或收集信息。
- 需要对输入的数据类型进行校验时。

## 代码演示

### 基础使用

<code src="./demos/basic.tsx">基础表单</code>

### 增强功能

<code src="./demos/enhanced.tsx">自动保存与验证动画</code>

## API

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| autoSave | 是否启用自动保存 | boolean | false |
| autoSaveInterval | 自动保存间隔（毫秒） | number | 3000 |
| showSubmitButton | 是否显示提交按钮 | boolean | true |
| submitText | 提交按钮文本 | string | 提交 |
| validationAnimation | 是否启用表单验证动画 | boolean | true |
| onAutoSave | 自动保存回调 | (values: any) => void | - |

更多 API 请参考 [Ant Design Form](https://ant.design/components/form-cn#api)。