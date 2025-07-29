# YuduDesign

基于 Ant Design 的二次开发组件库

## 项目结构

```
yududesign/
├── packages/          # 组件包
│   └── button/       # Button 组件
├── docs/             # 文档站点
└── pnpm-workspace.yaml
```

## 开发

### 安装依赖

```bash
pnpm install
```

### 启动文档站点

```bash
pnpm docs:dev
```

### 构建组件

```bash
cd packages/button
pnpm build
```

## 组件

- ✅ Button - 基于 Ant Design Button 的增强版本，支持阴影效果

## 技术栈

- React 18+
- TypeScript
- Ant Design
- pnpm workspace
- dumi (文档工具)
- father (构建工具)
