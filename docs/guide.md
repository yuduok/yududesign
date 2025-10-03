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
npm install @yududesign/components
# or
yarn add @yududesign/components
# or
pnpm add @yududesign/components
```

## 使用

在项目中引入并使用组件：

```tsx
import React from 'react';
import { Button } from '@yududesign/components';

const App = () => {
  return (
    <div>
      <Button type="primary">Hello YuduDesign</Button>
    </div>
  );
};

export default App;
```

**注意**：使用 Webpack 5+、Vite 等现代打包工具时，样式会自动加载。如果样式未生效，请手动导入：

```typescript
import '@yududesign/components/style.css';
```

## 按需加载

组件库支持 Tree Shaking，打包工具会自动移除未使用的代码，无需额外配置。