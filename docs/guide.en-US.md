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
npm install @yududesign/button
# or
yarn add @yududesign/button  
# or
pnpm add @yududesign/button
```

## Usage

Import and use components in your project:

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

## Tree Shaking

For smaller bundle sizes, we recommend importing components on demand.