import Image from 'next/image'
import React from 'react'

type ImageProps = {
  src: string
  alt: string
}

type IconOptions = Parameters<(typeof iconMap)['get']>[0]

let iconMap = new Map<string, ImageProps>([
  [
    'close',
    {
      src: '/assets/hamburger-closed.svg',
      alt: 'Close',
    },
  ],
  [
    'hamburger',
    {
      src: '/assets/hamburger-open.svg',
      alt: 'Open',
    },
  ],
])

const defaultSize = {
  height: 16,
  width: 16,
}

const placeholderIcon = {
  src: '/assets/placeholder.svg',
  alt: 'N/A',
}

interface Props {
  type: IconOptions
  size?: number
  style?: React.CSSProperties
}

const Icon = ({ type, size, style }: Props) => {
  const width = size ?? defaultSize.width
  const height = size ?? defaultSize.height
  const iconType = iconMap.get(type) || placeholderIcon

  return (
    <Image
      style={{ ...style }}
      src={iconType.src}
      alt={iconType.alt}
      width={width}
      height={height}
    />
  )
}

export default Icon
