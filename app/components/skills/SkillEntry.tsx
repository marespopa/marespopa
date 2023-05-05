import React from 'react'

type Props = {
  heading: string
  content: string
}

const SkillEntry = ({ heading, content }: Props) => {
  return (
    <div className="mt-6">
      <h2 className="text-blue-300 text-xl">{heading}</h2>
      <p className="mt-2">{content}</p>
    </div>
  )
}

export default SkillEntry
