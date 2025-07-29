---
title: 快速开始
order: 1
nav:
  title: 指南
  order: 1
---

# 快速开始

## 安装

使用 npm、yarn 或 pnpm 安装组件库：

```bash
npm install @yududesign/button
# or
yarn add @yududesign/button  
# or
pnpm add @yududesign/button
```

## 使用

在项目中引入并使用组件：

```tsx
import React from 'react';
import Button from '@yududesign/button';

const App = () => {
  return (
    <div>
      <Button type="primary">Hello YuduDesign</Button>
    </div>
  );
};

export default App;
```

## 按需加载

为了减少打包体积，推荐按需加载组件。