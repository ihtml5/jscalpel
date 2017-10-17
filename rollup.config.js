// rollup.config.js
import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import uglify from 'rollup-plugin-uglify';
import { minify } from 'uglify-es';

export default {
  input: './index.js',
  output: {
    file: 'dist/jscalpel.min.js',
    format: 'umd',
    exports: 'named',
    name: 'jscalpel',
    sourceMap: true
  },
  plugins: [
    resolve(),
    babel({
      exclude: 'node_modules/**' // only transpile our source code
    }),
    uglify({}, minify)
  ]
};