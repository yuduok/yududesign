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
    nav: {
      'zh-CN': [
        { title: '指南', link: '/guide' },
        { title: '组件', link: '/components' },
      ],
      'en-US': [
        { title: 'Guide', link: '/en-US/guide' },
        { title: 'Components', link: '/en-US/components' },
      ],
    },
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
    '@yududesign/components': path.resolve(__dirname, '../packages/src'),
    '@yududesign/components/style.css': path.resolve(__dirname, '../packages/dist/index.css'),
  },
});