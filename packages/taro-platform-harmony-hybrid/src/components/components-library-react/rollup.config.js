import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'
import externals from 'rollup-plugin-node-externals'
import postcss from 'rollup-plugin-postcss'
import ts from 'rollup-plugin-ts'

const config = {
  input: ['src/index.ts', 'src/component-lib/index.ts'],
  output: {
    dir: '../harmony-components/lib/react',
    exports: 'named',
    preserveModules: true,
    preserveModulesRoot: 'src',
    sourcemap: true
  },
  treeshake: false,
  plugins: [
    externals({
      deps: true,
      devDeps: false,
      include: ['react', 'react-dom']
    }),
    resolve({
      preferBuiltins: false,
      mainFields: ['main:h5', 'browser', 'module', 'jsnext:main', 'main']
    }),
    ts({
      sourceMap: true,
    }),
    commonjs({
      transformMixedEsModules: true,
      dynamicRequireTargets: ['./src/**/*.js']
    }),
    postcss({
      inject: { insertAt: 'top' },
      minimize: true,
    }),
  ]
}

export default config
