# YuduDesign

YuduDesign 是基于 Ant Design 的 React 组件库，提供了增强功能的组件以提升用户体验。

## 🚀 快速开始

### 安装依赖

```bash
# 安装所有依赖
pnpm install:all
```

### 本地开发

```bash
# 启动文档开发服务器
pnpm docs:dev

# 启动所有组件的开发模式
pnpm dev:components
```

### 一键打包

```bash
# 🔨 打包所有组件到统一入口 ✅
pnpm build:components

# 🔨 打包组件和文档
pnpm build:all

# 🧹 清理构建产物
pnpm clean
```

### 📦 构建产物

构建成功后会在 `packages/dist/` 目录生成：

```
packages/dist/
├── index.js           # CommonJS 格式
├── index.js.map       # CommonJS sourcemap
├── index.mjs          # ES Module 格式
├── index.mjs.map      # ESM sourcemap
├── index.css          # 所有组件样式（合并）
├── index.css.map      # CSS sourcemap
└── index.d.ts         # TypeScript 类型声明
```

### 🧪 测试

在项目中使用：

```typescript
// 最简单的方式（Webpack 5+/Vite）
import { Button, Input } from '@yududesign/components';

// 如果样式未自动加载，手动导入
import '@yududesign/components/style.css';
```

### 🌐 在项目中使用

```typescript
// NPM/YARN/PNPM 安装
pnpm add @yududesign/components

// 方式 1: 仅导入组件（推荐 - Webpack 5+/Vite 会自动加载样式）
import { Button, Input, Card } from '@yududesign/components';

function App() {
  return (
    <div>
      <Button type="primary" shadow>点击我</Button>
      <Input placeholder="输入内容" />
    </div>
  );
}

// 方式 2: 手动导入样式（兼容旧版构建工具）
import { Button, Input, Card } from '@yududesign/components';
import '@yududesign/components/style.css';
```

**✨ 自动样式加载**：由于配置了 `sideEffects`，使用 Webpack 5+、Vite 等现代打包工具时，样式会自动随组件加载，无需手动导入 CSS！

## 📦 使用方式

### 快速开始（推荐）

```typescript
// 仅导入组件，样式自动加载（Webpack 5+/Vite）
import { Button, Input, Card, Tag } from '@yududesign/components';

// 开始使用
<Button type="primary">按钮</Button>
```

所有组件从 `@yududesign/components` 统一导入。使用 Webpack 5+、Vite 等现代打包工具时，CSS 会自动加载！

### 样式导入选项

根据你的打包工具选择合适的方式：

```typescript
// 选项 1: 自动加载（推荐 - Webpack 5+/Vite/Rollup）
import { Button } from '@yududesign/components';
// 样式会自动加载，无需额外导入 ✨

// 选项 2: 使用简短路径手动导入
import { Button } from '@yududesign/components';
import '@yududesign/components/style.css';

// 选项 3: 使用完整路径手动导入
import { Button } from '@yududesign/components';
import '@yududesign/components/dist/index.css';
```

**工作原理**：
- package.json 中配置了 `sideEffects: ["dist/index.js", "dist/index.mjs", "**/*.css"]`
- 主入口文件 `src/index.tsx` 导入了所有组件样式
- 现代打包工具会识别并自动注入样式到最终输出

## 📦 组件列表

### 通用组件
- **Button** - 增强的按钮组件，支持阴影效果

### 数据录入
- **Checkbox** - 多选框，支持边框和颜色主题
- **Cascader** - 级联选择，支持搜索和主题色
- **DatePicker** - 日期选择器，支持快速选择
- **Form** - 表单，支持自动保存和验证动画
- **Input** - 输入框，支持清除增强和边框动画
- **InputNumber** - 数字输入框，支持千分位分隔符
- **Radio** - 单选框，支持卡片样式和主题色
- **Rate** - 评分，支持多种图标主题
- **Select** - 选择器，支持选项计数和标签模式
- **Slider** - 滑动输入条，支持渐变进度条
- **Switch** - 开关，支持渐变和脉冲动画

### 数据展示
- **Card** - 卡片，支持悬停效果和渐变边框
- **Tag** - 标签，支持渐变和发光效果
- **Timeline** - 时间轴，支持状态图标和动画

## 🎨 特色功能

每个组件都在 Ant Design 基础上增加了独特的增强功能：

- **视觉增强**: 自定义动画、渐变效果、阴影等
- **交互优化**: 悬停效果、焦点动画、状态反馈
- **功能扩展**: 额外的 API 属性和配置选项
- **主题定制**: 支持多种颜色主题和样式变体

## 📚 文档

- 中文文档：访问 `/zh-CN` 路径
- English Docs：访问 `/en-US` 路径

## 🛠 开发

### 项目结构

```
yududesign/
├── packages/          # 组件包（统一管理）
│   ├── button/        # 按钮组件源码
│   │   └── src/
│   ├── checkbox/      # 多选框组件源码
│   │   └── src/
│   ├── cascader/      # 级联选择组件源码
│   │   └── src/
│   ├── ...            # 其他组件
│   ├── src/           # 统一入口
│   │   └── index.tsx  # 导出所有组件
│   ├── dist/          # 构建产物
│   ├── package.json   # 统一的包配置
│   └── tsup.config.ts # 构建配置
├── docs/             # 文档站点
├── package.json      # 根配置
└── README.md         # 项目说明
```

### 组件开发规范

1. **命名规范**：所有样式类名使用 `yududesign-` 前缀
2. **TypeScript**：完整的类型定义和接口继承
3. **文档**：提供中英文双语文档和示例
4. **测试**：基础和增强功能的演示示例

### 构建配置

使用 [tsup](https://github.com/egoist/tsup) 作为构建工具：
- **统一导出**：`packages/src/index.tsx` 作为主入口
- **ES Module**：`dist/index.mjs`
- **CommonJS**：`dist/index.js`
- **TypeScript 声明文件**：`dist/index.d.ts`
- **CSS 样式**：`dist/index.css`
- **Source Maps**：生成 sourcemap 便于调试

### 构建产物

```
packages/dist/
├── index.js          # CommonJS 格式
├── index.js.map      # CommonJS sourcemap
├── index.mjs         # ES Module 格式
├── index.mjs.map     # ESM sourcemap
├── index.css         # 所有组件样式
├── index.css.map     # CSS sourcemap
└── index.d.ts        # TypeScript 类型声明
```

### 架构特点

- **统一包管理**：所有组件在 `@yududesign/components` 统一管理，无需单独的 package.json
- **类型安全**：完整的 TypeScript 类型支持
- **按需加载**：支持 Tree Shaking，自动剔除未使用的代码
- **开发体验**：支持 watch 模式实时编译

## 📄 许可证

MIT License

---

**开始使用 YuduDesign，构建更好的用户界面！** 🎉
