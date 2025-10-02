import { defineConfig } from 'father';

export default defineConfig({
  // Only build UMD format for simplicity - it bundles everything
  umd: {
    output: 'dist',
    name: 'YuduDesign',
    externals: {
      react: 'React',
      'react-dom': 'ReactDOM',
      antd: 'antd',
      classnames: 'classNames',
    },
  },
});