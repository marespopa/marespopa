import Link from 'next/link'
import React from 'react'

type Props = {
  url: string
  label: string
}

const ButtonLink = ({ url, label }: Props) => {
  return (
    <Link
      href={url}
      className="my-4 flex items-center text-blue-700 text-sm font-medium text-center capitalize"
    >
      {label}
    </Link>
  )
}

export default ButtonLink
