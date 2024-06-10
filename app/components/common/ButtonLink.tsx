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
      <SVGLink className="min-h-8 min-w-8 flex-[1_0_auto]" />
    </Link>
  )
}

const style = `inline-flex px-4 py-2 rounded my-4 border border-blue-300
               items-center text-blue-300 font-medium
               hover:transition-all ease-in-out motion-reduce:transition-none duration-150
               hover:bg-sky-300 hover:text-fuchsia-950
               focus:bg-sky-300 focus:text-fuchsia-950`

export default ButtonLink
