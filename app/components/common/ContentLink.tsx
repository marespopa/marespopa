import React, { HTMLAttributeAnchorTarget } from 'react'

import SVGLink from '../icons/SVGLink'

type Props = {
  url: string
  title: string
  label: string
  isExternal?: boolean
  target?: HTMLAttributeAnchorTarget
}

const ContentLink = ({
  url,
  title,
  target = '_self',
  label,
  isExternal = false,
}: Props) => {
  const externalLinkProps = isExternal ? { rel: 'noopener no-referrer' } : {}

  return (
    <a
      className="inline-flex items-center text-blue-300 hover:underline focus:underline"
      data-mdb-ripple="true"
      href={url}
      title={title}
      target={target}
      {...externalLinkProps}
    >
      <span>{label}</span>
      {isExternal && <SVGLink className="ml-1" />}
    </a>
  )
}

export default ContentLink
