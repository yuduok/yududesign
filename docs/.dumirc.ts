import { defineConfig } from 'dumi';
import path from 'path';

export default defineConfig({
  outputPath: 'dist',
  themeConfig: {
    name: 'YuduDesign',
    logo: false,
    footer: 'Open-source MIT Licensed | Copyright © 2024-present',
    socialLinks: {
      github: 'https://github.com/yourusername/yududesign',
    },
    nav: [
      { title: '指南', link: '/guide' },
      { title: '组件', link: '/components' },
    ],
  },
  resolve: {
    docDirs: ['.'],
    atomDirs: [
      { type: 'component', dir: '../packages' },
    ],
    codeBlockMode: 'active',
    forceKebabCaseRouting: false,
  },
  locales: [
    { id: 'zh-CN', name: '中文' },
    { id: 'en-US', name: 'English' },
  ],
  alias: {
    '@yududesign/button': path.resolve(__dirname, '../packages/button/src'),
    '@yududesign/button/style': path.resolve(__dirname, '../packages/button/src/style.css'),
  },
});