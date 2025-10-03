import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.tsx'],
  format: ['cjs', 'esm'],
  dts: false,
  splitting: false,
  sourcemap: true,
  clean: false,  // 不清理 dist，保留手动创建的 index.d.ts
  external: ['react', 'react-dom', 'antd'],
  outDir: 'dist',
  esbuildOptions(options) {
    options.banner = {
      js: '"use client";',
    };
  },
  tsconfig: './tsconfig.json',
});
