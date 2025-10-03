---
title: Getting Started
order: 1
nav:
  title: Guide
  order: 1
---

# Getting Started

## Installation

Install the component library using npm, yarn or pnpm:

```bash
npm install @yududesign/components
# or
yarn add @yududesign/components
# or
pnpm add @yududesign/components
```

## Usage

Import and use components in your project:

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

**Note**: When using modern bundlers like Webpack 5+, Vite, styles will be loaded automatically. If styles don't work, manually import:

```typescript
import '@yududesign/components/style.css';
```

## Tree Shaking

The component library supports Tree Shaking. Unused code will be automatically removed by the bundler without additional configuration.