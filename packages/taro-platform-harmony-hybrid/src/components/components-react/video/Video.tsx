import React, { Component, SyntheticEvent } from 'react'

let videoId = 0
interface VideoProps extends React.HTMLAttributes<HTMLDivElement> {
  hosWidth?: number
  hosHeight?: number
  src?: string
  controls?: boolean
  autoPlay?: boolean
  loop?: boolean
  muted?: boolean
  objectFit?: 'contain' | 'fill' | 'cover'
  onPlay?: (e: SyntheticEvent) => void
  onPause?: (e: SyntheticEvent) => void
  onEnded?: (e: SyntheticEvent) => void
  onTimeUpdate?: (e: SyntheticEvent) => void
  onError?: (e: SyntheticEvent) => void
  onSeeked?: (e: SyntheticEvent) => void
  onSeeking?: (e: SyntheticEvent) => void
}

interface needToUpdateProps {
  componentId?: string
  width?: number
  height?: number
  src?: string
  controls?: boolean
  autoPlay?: boolean
  muted?: boolean
  loop?: boolean
  objectFit?: string
}
class Video extends Component<VideoProps> {
  private componentId: string
  private needToUpdate: needToUpdateProps = {}

  constructor (props: VideoProps) {
    super(props)
    this.componentId = `video_${videoId++}`
  }

  componentDidMount () {
    this.transferVideoProps()
  }

  componentDidUpdate () {
    if (Object.keys(this.needToUpdate).length > 0) {
      // @ts-ignore  调用JSB方法更新原生组件数据
      window?.JSBridge?.transferSameLayerArgs(this.needToUpdate)
    }

    this.needToUpdate = { componentId: this.componentId }
  }

  transferVideoProps () {
    const {
      hosWidth,
      hosHeight,
      src,
      controls,
      autoPlay,
      loop,
      muted,
      objectFit,
      onPlay,
      onPause,
      onEnded,
      onTimeUpdate,
      onError,
      onSeeked,
      onSeeking,
    } = this.props

    const properties = {
      componentId: this.componentId,
      width: hosWidth,
      height: hosHeight,
      src: src,
      controls: controls,
      autoPlay: autoPlay,
      loop: loop,
      muted: muted,
      objectFit: objectFit,
      onPlay: onPlay,
      onPause: onPause,
      onEnded: onEnded,
      onTimeUpdate: onTimeUpdate,
      onError: onError,
      onSeeked: onSeeked,
      onSeeking: onSeeking,
    }

    // Call JSB method to transfer native component data
    // Replace this line with your actual JSB method call
    // @ts-ignore
    window?.JSBridge?.transferSameLayerArgs(properties)
  }

  render (): React.ReactNode {
    const { hosWidth, hosHeight } = this.props

    return (
      <div>
        <embed id={this.componentId} width={hosWidth} height={hosHeight} />
      </div>
    )
  }
}

export default Video
