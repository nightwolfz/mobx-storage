import babel from 'rollup-plugin-babel'

const output = [
  {
    file: 'dist/index.js',
    sourcemap: true,
    globals: 'mobx',
    format: 'cjs'
  },
  {
    file: 'dist/index.mjs',
    sourcemap: true,
    globals: 'mobx',
    format: 'es'
  },
  {
    file: 'dist/index.umd.js',
    name: 'mobxStorage',
    sourcemap: true,
    globals: 'mobx',
    format: 'umd'
  },
]

export default {
  input: 'src/index.js',
  output,
  plugins: [
    babel({
      exclude: 'node_modules/**' // only transpile our source code
    })
  ],
}
