import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.tsx'],
  format: ['cjs', 'esm'],
  dts: false,
  splitting: false,
  sourcemap: true,
  clean: true,
  external: ['react', 'react-dom', 'antd'],
  outDir: 'dist',
  esbuildOptions(options) {
    options.banner = {
      js: '"use client";',
    };
  },
  tsconfig: './tsconfig.json',
  treeshake: true,
  async onSuccess() {
    const { execSync } = await import('child_process');
    const fs = await import('fs');

    // Generate .d.ts separately with skipLibCheck
    try {
      execSync('npx tsc --emitDeclarationOnly --declaration --noCheck --outDir dist --rootDir src --jsx react-jsx -p tsconfig.json', {
        stdio: 'inherit',
      });
    } catch {
      // DTS generation is best-effort, don't block the build
      console.warn('Warning: DTS generation had errors, continuing...');
    }

    // Inject "use client" and CSS import into output files
    for (const f of ['index.js', 'index.mjs']) {
      const p = `dist/${f}`;
      if (fs.existsSync(p)) {
        let c = fs.readFileSync(p, 'utf8');
        const cssImport = f.endsWith('.mjs')
          ? 'import "./index.css";\n'
          : 'require("./index.css");\n';
        const prefix = `"use client";\n${cssImport}`;
        if (!c.includes('"use client"')) {
          c = prefix + c;
        } else if (!c.includes('index.css')) {
          c = c.replace('"use client";\n', prefix);
        }
        fs.writeFileSync(p, c);
      }
    }
  },
});
