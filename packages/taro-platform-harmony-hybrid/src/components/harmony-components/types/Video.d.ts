import { ComponentType } from 'react'
import { StandardProps, CommonEventFunction } from './common'
interface VideoProps extends StandardProps {

  /** 视频播放器宽度
   * @supported weapp, alipay, swan, tt, qq, jd, h5, rn, harmony_hybrid
   */
  hosWidth: number
  /** 视频播放器高度
   * @supported weapp, alipay, swan, tt, qq, jd, h5, rn, harmony_hybrid
   */
  hosHeight: number
  /** 要播放视频的资源地址
   * @supported weapp, alipay, swan, tt, qq, jd, h5, rn, harmony_hybrid
   */
  src: string
  /** 是否显示默认播放控件（播放/暂停按钮、播放进度、时间）
   * @default true
   * @supported weapp, alipay, swan, tt, qq, jd, h5, rn, harmony_hybrid
   */
  controls?: boolean
  /** 是否自动播放
   * @default false
   * @supported weapp, alipay, swan, tt, qq, jd, h5, rn, harmony_hybrid
   */
  autoplay?: boolean
  /** 是否循环播放
   * @default false
   * @supported weapp, alipay, swan, tt, qq, jd, h5, rn, harmony_hybrid
   */
  loop?: boolean
  /** 是否静音播放
   * @default false
   * @supported weapp, alipay, swan, tt, qq, jd, h5, rn, harmony_hybrid
   */
  muted?: boolean

  /** 若不设置，宽度大于240时才会显示
   * @default true
   * @supported weapp, swan, qq, h5, harmony_hybrid
   */
  objectFit?: object
  /** 当开始/继续播放时触发 play 事件
   * @supported weapp, alipay, swan, tt, qq, jd, h5, rn, harmony_hybrid
   */
  onPlay?: CommonEventFunction
  /** 当暂停播放时触发 pause 事件
   * @supported weapp, alipay, swan, tt, qq, jd, h5, rn, harmony_hybrid
   */
  onPause?: CommonEventFunction
  /** 当播放到末尾时触发 ended 事件
   * @supported weapp, alipay, swan, tt, qq, jd, h5, rn, harmony_hybrid
   */
  onEnded?: CommonEventFunction
  /** 播放进度变化时触发, 触发频率 250ms 一次
   * @supported weapp, alipay, swan, tt, qq, jd, h5, rn, harmony_hybrid
   */
  onUpdate?: CommonEventFunction<VideoProps.onUpdateEventDetail>
  /** 视频播放出错时触发
   * @supported weapp, alipay, swan, tt, qq, jd, h5, rn, harmony_hybrid
   */
  onError?: CommonEventFunction
  /** 加载进度变化时触发，只支持一段加载
   * @supported weapp, tt, qq, h5, harmony_hybrid
   */
  onProgress?: CommonEventFunction<VideoProps.onProgressEventDetail>
  /** 视频元数据加载完成时触发
   * @supported weapp, swan, tt, jd, rn
   */
  onLoadedMetaData?: CommonEventFunction<VideoProps.onLoadedMetaDataEventDetail>
  /**
   * 播放器进入小窗
   * @supported weapp
   */
  onEnterPictureInPicture?: CommonEventFunction
  /**
   * 播放器退出小窗
   * @supported weapp
   */
  onLeavePictureInPicture?: CommonEventFunction
  /**
   * seek 完成时触发
   * @supported weapp, tt
   */
  onSeekComplete?: CommonEventFunction
  /** 视频进入和退出全屏时触发
   * @supported weapp, alipay, swan, tt, qq, jd
   */
  onFullScreenChange?: CommonEventFunction<VideoProps.onFullscreenChangeEventDetail>
  /** 切换 controls 显示隐藏时触发。
   * @supported weapp, swan
   */
  onControlsToggle?: CommonEventFunction<VideoProps.onControlsToggleEventDetail>
  /** 视频出现缓冲时触发。
   * @supported alipay
   */
  onLoading?: CommonEventFunction
  /** 点击视频 view 时触发
   * @supported alipay
   */
  onTap?: CommonEventFunction<VideoProps.onTapEventDetail>
  /** 用户操作事件
   * @supported alipay
   */
  onUserAction?: CommonEventFunction<VideoProps.onUserActionEventDetail>
  /** 视频播放终止。
   * @supported alipay
   */
  onStop?: CommonEventFunction
  /** 当视频加载完真正开始播放时触发。
   * @supported alipay
   */
  onRenderStart?: CommonEventFunction
  /** 贴片广告开始播放时触发
   * @supported tt
   */
  onAdStart?: CommonEventFunction<VideoProps.onAdTypeCommonEventDetail>
  /** 贴片广告播放结束时触发
   * @supported tt
   */
  onAdEnded?: CommonEventFunction<VideoProps.onAdTypeCommonEventDetail>
  /** 贴片广告非自然结束时触发，如：用户关闭广告或广告播放过程中 video 组件被销毁
   * @supported tt
   */
  onAdClose?: CommonEventFunction<VideoProps.onAdTypeCommonEventDetail>
  /** 贴片广告加载失败时触发
   * @supported tt
   */
  onAdError?: CommonEventFunction<VideoProps.onAdTypeCommonEventDetail>
  /** 视频倍速改变完成时触发。返回改变后的倍速值
   * @supported tt
   */
  onPlayBackRateChange?: CommonEventFunction<{
    playbackRate: string
  }>
  /** 静音状态改变完成时触发。返回当前是否静音
   * @supported tt
   */
  onMuteChange?: CommonEventFunction<{
    isMuted: boolean
  }>
  /** 点击控件时触发。返回当前点击的控件类型
   * @supported tt
   */
  onControlTap?: CommonEventFunction<{
    controlType
  }>
  /** 进入小窗播放时触发
   * @supported tt
   */
  onEnterBackground?: CommonEventFunction
  /** 关闭小窗播放时触发
   * @supported tt
   */
  onCloseBackground?: CommonEventFunction
  /** 离开小窗进入 app 事件时触发
   * @supported tt
   */
  onLeaveBackground?: CommonEventFunction
  /** 否
   * @supported jd
   */
  onLoadedData?: CommonEventFunction
  /** 否
   * @supported jd
   */
  onLoadStart?: CommonEventFunction
  /** 否
   * @supported jd
   */
  onSeeked?: CommonEventFunction
  /** 否
   * @supported jd
   */
  onSeeking?: CommonEventFunction
  /** 贴片广告加载成功时触发，event.detail = { adType: 'preRollAd' | 'postRollAd' }
   * @supported tt
   */
  onAdLoad?: CommonEventFunction
  /** 用户选择投屏设备时触发 detail = { state: "success"/"fail" }
   * @supported weapp
   */
  onCastingUserSelect?: CommonEventFunction
  /** 投屏成功/失败时触发 detail = { type, state: "success"/"fail" }
   * @supported weapp
   */
  onCastingStateChange?: CommonEventFunction
  /** 投屏被中断时触发
   * @supported weapp
   */
  onCastingInterrupt?: CommonEventFunction
}
declare namespace VideoProps {
  /** direction 的合法值 */
  interface direction {
    /** 正常竖向 */
    0
    /** 屏幕逆时针90度 */
    90
    /** 屏幕顺时针90度 */
    '-90'
  }
  /** objectFit 的合法值 */
  interface ObjectFit {
    /** 包含 */
    contain
    /** 填充 */
    fill
    /** 覆盖 */
    cover
  }
  /** playBtnPosition 的合法值 */
  interface PlayBtnPosition {
    /** controls bar上 */
    bottom
    /** 视频中间 */
    center
  }
  interface onTimeUpdateEventDetail {
    /** 当前时间 */
    currentTime: number
    /** 持续时间 */
    duration: number
    /** 用户实际观看时长
     * @supported alipay
     */
    userPlayDuration: number
    /** 视频总时长
     * @supported alipay
     */
    videoDuration: number
  }
  interface onFullscreenChangeEventDetail {
    /** 方向 */
    direction: 'vertical' | 'horizontal'
    /** 全屏 */
    fullScreen: number | boolean
  }
  interface onWaitingEventDetail {
    /** 方向 */
    direction: 'vertical' | 'horizontal'
    /** 全屏 */
    fullScreen: number | boolean
  }
  interface onProgressEventDetail {
    /** 百分比 */
    buffered: number
  }
  interface onLoadedMetaDataEventDetail {
    /** 视频宽度 */
    width: number
    /** 视频高度 */
    height: number
    /** 持续时间 */
    duration: number
  }
  interface onControlsToggleEventDetail {
    /** 是否显示 */
    show: boolean
  }
  interface onTapEventDetail {
    ptInView: {
      x: number
      y: number
    }
  }
  interface onUserActionEventDetail {
    /** 用户操作的元素 */
    tag: keyof UserActionTag | string
    value: number
  }
  interface UserActionTag {
    /** 底部播放按钮 */
    play
    /** 中心播放按钮 */
    centerplay
    /** 静音按钮 */
    mute
    /** 全屏按钮 */
    fullscreen
    /** 重试按钮 */
    retry
    /** 网络提醒的播放按钮 */
    mobilenetplay
  }
  interface onAdTypeCommonEventDetail {
    /** 广告类型 */
    adType: 'preRollAd' | 'postRollAd'
  }
}
/** 视频。相关api：Taro.createVideoContext
 * @classification media
 * @supported weapp, alipay, swan, tt, qq, jd, h5, rn, harmony, harmony_hybrid
 * @example_react
 * ```tsx
 * export default class PageView extends Component {
 *   constructor() {
 *     super(...arguments)
 *   }
 *
 *   render() {
 *     return (
 *       <View className='components-page'>
 *         <Video
 *           id='video'
 *           src='https://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400'
 *           poster='https://misc.aotu.io/booxood/mobile-video/cover_900x500.jpg'
 *           initialTime={0}
 *           controls={true}
 *           autoplay={false}
 *           loop={false}
 *           muted={false}
 *         />
 *       </View>
 *     )
 *   }
 * }
 * ```
 * @example_vue
 * ```html
 * <template>
 *   <Video
 *     id="video"
 *     src="https://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400"
 *     poster="https://misc.aotu.io/booxood/mobile-video/cover_900x500.jpg"
 *     initial-time="0"
 *     :controls="true"
 *     :autoplay="false"
 *     :loop="false"
 *     :muted="false"
 *   />
 * </template>
 * ```
 * @see https://developers.weixin.qq.com/miniprogram/dev/component/video.html
 */
declare const Video: ComponentType<VideoProps>
export { Video, VideoProps }
