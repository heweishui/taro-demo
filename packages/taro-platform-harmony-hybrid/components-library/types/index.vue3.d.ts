/**
 * vue tsx @tarojs/components 类型提示文件
 *
 * ## 如何使用?

 * 请在醒目全局的类型文件中写入以下代码，覆盖默认的组件类型提示
 * ```typescript
 * export declare module '@tarojs/components' {
 *   export * from '@tarojs/components/types/index.vue3'
 * }
 * ```
 */
import * as CSS from 'csstype'
import { DefineComponent, VNodeRef } from 'vue'

import { ButtonProps } from './Button'
import { VideoProps } from './Video'

/** 因为react的事件是CamelCase而vue得是Camelcase, 所以需要转换 */
type OnCamelCaseToOnCamelcase<T extends string> = T extends `on${infer Rest}`
  ? `on${Capitalize<Lowercase<Rest>>}`
  : T;

type TransformCamelCase<T extends Record<string, any>> = {
  [key in keyof T as OnCamelCaseToOnCamelcase<key>]: T[key]
}

/** 联合类型不能用omit（比如picker） */
type DistributiveOmit<T, K extends keyof T> = T extends unknown ? TransformCamelCase<Omit<T, K>> : never

interface SlimProps {
  class?: any
  style?: CSS.Properties<string | number>
  innerHTML?: string
}

/** 转换 react 的类型到 vue */
export type RemoveReactAttribute = 'className' | 'style' | 'key' | 'ref' | 'dangerouslySetInnerHTML'
export type TransformReact2VueType<P extends StandardProps = Record<string, never>> = DistributiveOmit<P, RemoveReactAttribute> & SlimProps
export type VueComponentType<P = Record<string, never>> = DefineComponent<TransformReact2VueType<P>>

export * from './common'
export * from './event'
export * from './props'

/** 表单组件 */
export declare const Button: VueComponentType<ButtonProps>

/** 媒体组件 */
export declare const Video: VueComponentType<VideoProps>

export type ReservedProps = {
  key?: string | number | symbol
  ref?: VNodeRef
  ref_for?: boolean
  ref_key?: string
}

export type ElementAttrs<T> = T & ReservedProps

declare global {
  namespace JSX {
    interface IntrinsicElements {
      /** 表单组件 */
      button: ElementAttrs<TransformReact2VueType<ButtonProps>>
      'taro-button-core': ElementAttrs<TransformReact2VueType<ButtonProps>>
      video: ElementAttrs<TransformReact2VueType<VideoProps>>
      'taro-video-core': ElementAttrs<TransformReact2VueType<VideoProps>>
    }
  }
}
