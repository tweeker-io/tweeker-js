import babel from 'rollup-plugin-babel'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import pkg from './package.json'

const INPUT_FILE_PATH = 'src/index.js';
const OUTPUT_NAME = 'TweekerJs';

const PLUGINS = [
  babel({
    exclude: 'node_modules/**',
  }),
  resolve(),
  commonjs(),
]

const OUTPUT_DATA = [
  {
    file: pkg.main,
    format: 'cjs',
  },
  {
    file: pkg.module,
    format: 'es',
  },
]

const config = OUTPUT_DATA.map(({ file, format }) => ({
  input: INPUT_FILE_PATH,
  output: {
    file,
    format,
    name: OUTPUT_NAME,
  },
  plugins: PLUGINS,
}))

export default config