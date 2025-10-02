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
├── components.min.js     # UMD 格式（所有组件打包在一起）
├── components.min.css    # 所有组件样式（合并压缩）
└── test.html            # 测试页面（演示如何使用）
```

### 🧪 测试

构建完成后，可以通过以下方式测试：

```bash
# 在浏览器中打开测试页面
open packages/dist/test.html
```

### 🌐 浏览器中使用

```html
<!-- 引入依赖 -->
<script src="https://unpkg.com/react@18/umd/react.production.min.js"></script>
<script src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js"></script>
<script src="https://unpkg.com/antd@5/dist/antd.min.js"></script>
<script src="https://unpkg.com/classnames@2/index.js"></script>

<!-- 引入样式和组件库 -->
<link rel="stylesheet" href="./components.min.css">
<script src="./components.min.js"></script>

<script>
// 使用组件
const { Button, Input, Card } = YuduDesign;
// 使用方式与 React 组件相同
</script>
```

## 📦 使用方式

### 统一导入（推荐）

```typescript
// 从统一入口导入所有组件
import { Button, Input, Card, Tag } from '@yududesign/components';

// 或者按需导入
import { Button } from '@yududesign/components';
```

### 单独导入

```typescript
// 也可以单独导入每个组件
import Button from '@yududesign/button';
import Input from '@yududesign/input';
```

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
├── packages/          # 组件包
│   ├── button/        # 按钮组件
│   ├── checkbox/      # 多选框组件
│   ├── cascader/      # 级联选择组件
│   ├── datepicker/    # 日期选择器组件
│   ├── form/          # 表单组件
│   ├── input/         # 输入框组件
│   ├── inputnumber/   # 数字输入框组件
│   ├── radio/         # 单选框组件
│   ├── rate/          # 评分组件
│   ├── select/        # 选择器组件
│   ├── slider/        # 滑动输入条组件
│   ├── switch/        # 开关组件
│   ├── card/          # 卡片组件
│   ├── tag/           # 标签组件
│   └── timeline/      # 时间轴组件
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

使用 [Father.js](https://github.com/umijs/father) 构建统一入口：
- **统一导出**：`packages/index.tsx` 作为主入口
- **ES Module**：`dist/index.esm.js`
- **CommonJS**：`dist/index.js`
- **UMD**：`dist/index.umd.js`
- **TypeScript 声明文件**：`dist/index.d.ts`

### 构建产物

```
packages/dist/
├── index.js          # CommonJS 格式
├── index.esm.js      # ES Module 格式
├── index.umd.js      # UMD 格式
└── index.d.ts        # TypeScript 声明文件
```

## 📄 许可证

MIT License

---

**开始使用 YuduDesign，构建更好的用户界面！** 🎉
