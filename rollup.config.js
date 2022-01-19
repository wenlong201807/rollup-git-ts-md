import typescript from '@rollup/plugin-typescript'
import pkg from './package.json'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import url from '@rollup/plugin-url'

// 以下内容会添加到打包结果中
const footer = `
if(typeof window !== 'undefined') {
  window._Dry_VERSION_ = '${pkg.version}'
}`

const extensions = ['.js', '.ts', '.tsx', '.json']

export default {
  input: './src/index.ts',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      footer
    },
    {
      file: pkg.module,
      format: 'esm',
      footer
    },
    {
      file: pkg.browser,
      format: 'umd',
      name: 'Dry',
      footer
    }
  ],
  plugins: [
    url(),
    typescript(),
    // 为了打包 dayjs
    commonjs(),
    // resolve()
    resolve({
      extensions
    })
  ]
}