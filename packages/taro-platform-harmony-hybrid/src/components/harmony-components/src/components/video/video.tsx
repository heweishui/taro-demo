import { Component, ComponentInterface, Event, EventEmitter, h, Host, Prop, Watch } from '@stencil/core'

let videoId = 0

@Component({
  tag: 'taro-video-core',
  styleUrl: './style/index.scss',
})
export class Video implements ComponentInterface {
  private componentId: string
  private needToUpdate: object = {}
  constructor () {
    this.componentId = `video_${videoId++}`
    this.needToUpdate.componentId = this.componentId
  }

  /**
   * 视频播放器宽度
   */
  @Prop() hosWidth: number = 375

  /**
   * 视频播放器高度
   */
  @Prop() hosHeight: number = 280
  /**
   * 要播放视频的资源地址
   */
  @Prop() src: string

  /**
   * 是否显示默认播放控件（播放/暂停按钮、播放进度、时间）
   */
  @Prop() controls = true

  /**
   * 是否自动播放
   */
  @Prop() autoplay = false

  /**
   * 是否循环播放
   */
  @Prop() loop = false

  /**
   * 是否静音播放
   */
  @Prop() muted = false

  /**
   * 在全屏模式下，是否开启亮度与音量调节手势
   */
  @Prop() objectFit: 'contain' | 'fill' | 'cover' = 'contain'

  @Event({
    eventName: 'play',
  })
    onPlay: EventEmitter

  @Event({
    eventName: 'pause',
  })
    onPause: EventEmitter

  @Event({
    eventName: 'ended',
  })
    onEnded: EventEmitter

  @Event({
    eventName: 'update',
  })
    onUpdate: EventEmitter

  @Event({
    eventName: 'error',
  })
    onError: EventEmitter

  @Event({
    eventName: 'seeking',
  })
    onSeeking: EventEmitter

  @Event({
    eventName: 'seeked',
  })
    onSeeked: EventEmitter

  @Watch('hosWidth')
  watchHosWidth (newVal) {
    this.needToUpdate.hosWidth = newVal
  }

  @Watch('hosHeight')
  watchHosHeight (newVal) {
    this.needToUpdate.hosHeight = newVal
  }

  @Watch('src')
  watchSrc (newVal) {
    this.needToUpdate.src = newVal
  }

  @Watch('controls')
  watchControls (newVal) {
    this.needToUpdate.controls = newVal
  }

  @Watch('autoplay')
  watchAutoplay (newVal) {
    this.needToUpdate.autoplay = newVal
  }

  @Watch('loop')
  watchLoop (newVal) {
    this.needToUpdate.loop = newVal
  }

  @Watch('muted')
  watchMuted (newVal) {
    this.needToUpdate.muted = newVal
  }

  @Watch('objectFit')
  watchObjectFit (newVal) {
    this.needToUpdate.objectFit = newVal
  }

  componentWillLoad (): void | Promise<void> {
    this.transferVideoProps()
  }

  componentWillUpdate (): void | Promise<void> {
    // @ts-ignore
    window?.JSBridge.transferSameLayerArgs(this.needToUpdate)
    this.needToUpdate = { componentId: this.componentId }
  }

  handleOnPlay = (e: any) => {
    this.onPlay.emit(e)
  }

  handleOnPause = (e: any) => {
    this.onPause.emit(e)
  }

  handleOnUpdate = (e: any) => {
    this.onUpdate.emit(e)
  }

  handleOnError = (e: any) => {
    this.onError.emit(e)
  }

  handleOnSeeking = (e: any) => {
    this.onSeeking.emit(e)
  }

  handleOnSeeked = (e: any) => {
    this.onSeeked.emit(e)
  }

  transferVideoProps () {
    const { hosHeight, hosWidth, src, controls, autoplay, loop, muted, objectFit } = this
    const properties = {
      componentId: this.componentId,
      with: hosWidth,
      height: hosHeight,
      src,
      controls,
      autoplay,
      loop,
      muted,
      objectFit,
      onPlay: this.handleOnPlay,
      onPause: this.handleOnPause,
      onUpdate: this.handleOnUpdate,
      onError: this.handleOnError,
      onSeeking: this.handleOnSeeking,
      onSeeked: this.handleOnSeeked,
    }
    // @ts-ignore
    window.JSBridge.transferSameLayerArgs(properties)
  }

  render () {
    const { hosWidth, hosHeight } = this

    return (
      <Host>
        <embed id={this.componentId} type="native/video" width={hosWidth} height={hosHeight}></embed>
      </Host>
    )
  }
}
