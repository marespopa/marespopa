import Link from 'next/link'
import React from 'react'

import SVGLink from '../icons/SVGLink'

type Props = {
  url: string
  label: string
}

const ButtonLink = ({ url, label }: Props) => {
  return (
    <Link href={url} className={style} target="_blank">
      <span className="mr-4">{label}</span>
      <SVGLink />
    </Link>
  )
}

const style = `inline-flex p-4 rounded my-4 border border-blue-300
               items-center text-blue-300 font-medium
               hover:transition-all ease-in-out motion-reduce:transition-none duration-150
               hover:bg-blue-300 hover:text-blue-950
               focus:bg-blue-300 focus:text-blue-950`

export default ButtonLink
