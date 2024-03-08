/**
 * vue tsx harmony-components 类型提示文件
 *
 * ## 如何使用?

 * 请在醒目全局的类型文件中写入以下代码，覆盖默认的组件类型提示
 * ```typescript
 * export declare module 'harmony-components' {
 *   export * from 'harmony-components/types/index.vue3'
 * }
 * ```
 */
import * as CSS from 'csstype'
import { DefineComponent, VNodeRef } from 'vue'

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


/** 媒体组件 */

export declare const Video: VueComponentType<VideoProps>
/** 地图 */
// export declare const Map: VueComponentType<MapProps>

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
      /** 媒体组件 */
      video: ElementAttrs<TransformReact2VueType<VideoProps>>
      'taro-video-core': ElementAttrs<TransformReact2VueType<VideoProps>>
      'voip-room': ElementAttrs<TransformReact2VueType<VoipRoomProps>>
      'taro-voip-room-core': ElementAttrs<TransformReact2VueType<VoipRoomProps>>
      /** 地图 */
      // map: ElementAttrs<TransformReact2VueType<MapProps>>
      // 'taro-map-core': ElementAttrs<TransformReact2VueType<MapProps>>
     
    }
  }
}
