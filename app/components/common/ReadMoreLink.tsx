import Link from 'next/link'
import React from 'react'

type Props = {
  url: string
  label: string
}

const ReadMoreLink = ({ url, label }: Props) => {
  return (
    <Link
      href={url}
      className="my-4 flex items-center text-blue-300 text-sm font-medium text-center capitalize hover:underline focus:underline"
    >
      {label}
    </Link>
  )
}

export default ReadMoreLink
