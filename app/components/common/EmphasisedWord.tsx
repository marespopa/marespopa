import React from 'react'

type Props = {
  children: React.ReactElement | string
}

const EmphasisedWord = ({ children }: Props) => {
  return <span className="text-blue-300 font-bold">{children}</span>
}

export default EmphasisedWord
