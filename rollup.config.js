import babel from 'rollup-plugin-babel'
import resolve from '@rollup/plugin-node-resolve'
import pkg from './package.json'

export default {
  input: 'src/index.js',
  plugins: [
    babel({
      exclude: 'node_modules/**',
    }),
    resolve(),
  ],
  output: {
    file: pkg.main,
    format: 'es',
    name: 'TweekerJs',
  },
}