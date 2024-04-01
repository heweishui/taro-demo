import commonjs from '@rollup/plugin-commonjs'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import externals from 'rollup-plugin-node-externals'
import postcss from 'rollup-plugin-postcss'
import ts from 'rollup-plugin-ts'

const react_config = {
  input: ['libsrc/react/src/index.ts', 'libsrc/react/src/component-lib/index.ts'],
  output: {
    dir: './lib/react',
    exports: 'named',
    preserveModules: true,
    preserveModulesRoot: 'libsrc/react/src',
    sourcemap: true
  },
  treeshake: false,
  plugins: [
    externals({
      deps: true,
      devDeps: false,
      include: ['react', 'react-dom']
    }),
    nodeResolve({
      preferBuiltins: false,
      mainFields: ['main:h5', 'browser', 'module', 'jsnext:main', 'main']
    }),
    ts({
      tsconfig:'./tsconfig.library.json',
      sourceMap: true,
    }),
    commonjs({
      transformMixedEsModules: true,
      dynamicRequireTargets: ['./libsrc/react/src/**/*.js']
    }),
    postcss({
      inject: { insertAt: 'top' },
      minimize: true,
    }),
  ]
}

const vue2_config = {
  input: ['libsrc/vue2/src/index.ts', 'libsrc/vue2/src/components-loader.ts', 'libsrc/vue2/src/component-lib/index.ts'],
  output: {
    dir: './lib/vue2',
    exports: 'named',
    preserveModules: true,
    preserveModulesRoot: 'libsrc/vue2/src',
    sourcemap: true
  },
  treeshake: false,
  plugins: [
    externals({
      deps: true,
      devDeps: false,
      exclude: 'vue-fragment',
      include: 'vue'
    }),
    nodeResolve({
      preferBuiltins: false,
      mainFields: ['main:h5', 'browser', 'module', 'jsnext:main', 'main']
    }),
    ts({
      tsconfig:'./tsconfig.library.json',
      sourceMap: true,
    }),
    commonjs({
      transformMixedEsModules: true,
      dynamicRequireTargets: ['./libsrc/vue2/src/**/*.js']
    }),
    postcss({
      inject: { insertAt: 'top' },
      minimize: true,
    }),
  ]
}

const vue3_config = {
  input: ['libsrc/vue3/src/index.ts', 'libsrc/vue3/src/components-loader.ts', 'libsrc/vue3/src/component-lib/index.ts'],
  output: {
    dir: './lib/vue3',
    exports: 'named',
    preserveModules: true,
    preserveModulesRoot: 'libsrc/vue3/src',
    sourcemap: true
  },
  treeshake: false,
  plugins: [
    externals({
      deps: true,
      devDeps: false,
      include: 'vue3'
    }),
    nodeResolve({
      preferBuiltins: false,
      mainFields: ['main:h5', 'browser', 'module', 'jsnext:main', 'main']
    }),
    ts({
      tsconfig:'./tsconfig.library.json',
      sourceMap: true,
    }),
    commonjs({
      transformMixedEsModules: true,
      dynamicRequireTargets: ['./libsrc/vue3/src/**/*.js']
    }),
    postcss({
      inject: { insertAt: 'top' },
      minimize: true,
    }),
  ]
}

export default [react_config, vue2_config, vue3_config]