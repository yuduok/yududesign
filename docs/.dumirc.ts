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
    '@yududesign/components': path.resolve(__dirname, '../packages'),
    '@yududesign/button': path.resolve(__dirname, '../packages/button/src'),
    '@yududesign/button/style': path.resolve(__dirname, '../packages/button/src/style.css'),
    '@yududesign/checkbox': path.resolve(__dirname, '../packages/checkbox/src'),
    '@yududesign/checkbox/style': path.resolve(__dirname, '../packages/checkbox/src/style.css'),
    '@yududesign/cascader': path.resolve(__dirname, '../packages/cascader/src'),
    '@yududesign/cascader/style': path.resolve(__dirname, '../packages/cascader/src/style.css'),
    '@yududesign/datepicker': path.resolve(__dirname, '../packages/datepicker/src'),
    '@yududesign/datepicker/style': path.resolve(__dirname, '../packages/datepicker/src/style.css'),
    '@yududesign/form': path.resolve(__dirname, '../packages/form/src'),
    '@yududesign/form/style': path.resolve(__dirname, '../packages/form/src/style.css'),
    '@yududesign/input': path.resolve(__dirname, '../packages/input/src'),
    '@yududesign/input/style': path.resolve(__dirname, '../packages/input/src/style.css'),
    '@yududesign/inputnumber': path.resolve(__dirname, '../packages/inputnumber/src'),
    '@yududesign/inputnumber/style': path.resolve(__dirname, '../packages/inputnumber/src/style.css'),
    '@yududesign/radio': path.resolve(__dirname, '../packages/radio/src'),
    '@yududesign/radio/style': path.resolve(__dirname, '../packages/radio/src/style.css'),
    '@yududesign/rate': path.resolve(__dirname, '../packages/rate/src'),
    '@yududesign/rate/style': path.resolve(__dirname, '../packages/rate/src/style.css'),
    '@yududesign/select': path.resolve(__dirname, '../packages/select/src'),
    '@yududesign/select/style': path.resolve(__dirname, '../packages/select/src/style.css'),
    '@yududesign/slider': path.resolve(__dirname, '../packages/slider/src'),
    '@yududesign/slider/style': path.resolve(__dirname, '../packages/slider/src/style.css'),
    '@yududesign/switch': path.resolve(__dirname, '../packages/switch/src'),
    '@yududesign/switch/style': path.resolve(__dirname, '../packages/switch/src/style.css'),
    '@yududesign/card': path.resolve(__dirname, '../packages/card/src'),
    '@yududesign/card/style': path.resolve(__dirname, '../packages/card/src/style.css'),
    '@yududesign/tag': path.resolve(__dirname, '../packages/tag/src'),
    '@yududesign/tag/style': path.resolve(__dirname, '../packages/tag/src/style.css'),
    '@yududesign/timeline': path.resolve(__dirname, '../packages/timeline/src'),
    '@yududesign/timeline/style': path.resolve(__dirname, '../packages/timeline/src/style.css'),
  },
});