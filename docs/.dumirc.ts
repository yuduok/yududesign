import { defineConfig } from 'dumi';

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
    docDirs: ['docs'],
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
    '@yududesign/button': '/Users/yudu/Documents/yududesign/packages/button/es',
  },
});