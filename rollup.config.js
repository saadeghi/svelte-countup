import svelte from 'rollup-plugin-svelte';
import resolve from '@rollup/plugin-node-resolve';

const pkg = require('./package.json');

export default {
  input: 'src/Component.svelte',
  output: [
    { file: pkg.module, 'format': 'es' },
    { file: pkg.main, 'format': 'umd', name: pkg.componentname }
  ],
  plugins: [
    svelte({
      emitCss: false,
      compilerOptions: {
        customElement: false,
      }
    }),
    resolve()
  ],
};