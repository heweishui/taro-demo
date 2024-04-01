import { Component, ComponentInterface, Event, EventEmitter, h, Host, Prop, Watch } from '@stencil/core'

let videoId = 0

@Component({
  tag: 'taro-video-core',
  styleUrl: './style/index.scss'
})
export class Video implements ComponentInterface {
  /**
   * 视频播放器宽度
   */
  @Prop() hosWidth: number

  /**
   * 视频播放器高度
   */
  @Prop() hosHeight: number

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
   * 当视频大小与 video 容器大小不一致时，视频的表现形式
   */
  @Prop() objectFit: 'contain' | 'fill' | 'cover' = 'contain'

  @Event({
    eventName: 'play'
  }) onPlay: EventEmitter

  @Event({
    eventName: 'pause'
  }) onPause: EventEmitter

  @Event({
    eventName: 'ended'
  }) onEnded: EventEmitter

  @Event({
    eventName: 'timeupdate'
  }) onTimeUpdate: EventEmitter

  @Event({
    eventName: 'error'
  }) onError: EventEmitter

  @Event({
    eventName: 'seeked'
  }) onSeeked: EventEmitter

  @Event({
    eventName: 'seeking'
  }) onSeeking: EventEmitter

  private componentId: string
  private needToUpdate: object = {}

  constructor () {
    this.componentId = `video_${videoId++}`
    this.needToUpdate.componentId = this.componentId
  }

  @Watch('hosWidth')
  hosWidthChanged (newVal: number) {
    this.needToUpdate.width = newVal
  }

  @Watch('hosHeight')
  hosHeightChanged (newVal: number) {
    this.needToUpdate.height = newVal
  }

  @Watch('src')
  srcChanged (newVal: string) {
    this.needToUpdate.src = newVal
  }

  @Watch('controls')
  controlsChanged (newVal: boolean) {
    this.needToUpdate.controls = newVal
  }

  @Watch('autoplay')
  autoplayChanged (newVal: boolean) {
    this.needToUpdate.autoPlay = newVal
  }

  @Watch('loop')
  loopChanged (newVal: boolean) {
    this.needToUpdate.loop = newVal
  }

  @Watch('muted')
  mutedChanged (newVal: boolean) {
    this.needToUpdate.muted = newVal
  }

  @Watch('objectFit')
  objectFitChanged (newVal: string) {
    this.needToUpdate.objectFit = newVal
  }

  componentWillLoad (): void | Promise<void> {
    this.transferVideoProps()
  }

  componentWillUpdate (): void | Promise<void> {
    // @ts-ignore  调用JSB方法更新原生组件数据
    window.JSBridge.transferSameLayerArgs(this.needToUpdate)
    this.needToUpdate = { componentId: this.componentId }
  }

  
  handleOnPlay = (e: any) => {
    this.onPlay.emit(e)
  }
  
  handleOnPause = (e: any) => {
    this.onPause.emit(e)
  }

  handleOnFinish = (e: any) => {
    this.onEnded.emit(e)
  }

  handleOnUpdate = (e: any) => {
    this.onTimeUpdate.emit(e)
  }

  handleOnError = (e: any) => {
    this.onError.emit(e)
  }

  handleOnSeeked = (e: any) => {
    this.onSeeked.emit(e)
  }

  handleOnSeeking = (e: any) => {
    this.onSeeking.emit(e)
  }


  transferVideoProps () {
    // 同层渲染video组件数据
    const {  
      hosWidth,  
      hosHeight,  
      src,  
      controls,  
      autoplay,  
      loop,  
      muted,
      objectFit
    } = this
  
    const properties = {
      componentId: this.componentId,
      width: hosWidth,
      height: hosHeight,
      src: src,
      controls: controls,
      autoPlay: autoplay,
      loop: loop,
      muted: muted,
      objectFit: objectFit,
      onPlay: this.handleOnPlay,
      onPause: this.handleOnPause,
      onFinish: this.handleOnFinish,
      onUpdate: this.handleOnUpdate,
      onError: this.handleOnError,
      onSeeked: this.handleOnSeeked,
      onSeeking: this.handleOnSeeking
    }
  
    // @ts-ignore  调用JSB方法传递原生组件数据
    window.JSBridge.transferSameLayerArgs(properties)
  }

  render () {
    const {
      hosWidth,
      hosHeight
    } = this

    return (
      <Host>
        <embed id={this.componentId} type='native/video' width={hosWidth} height={hosHeight}/>
      </Host>
    )
  }
}