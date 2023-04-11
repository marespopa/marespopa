import React from 'react'

type Props = {
  title: string
  company: string
  period: string
  description: string[]
}

const ExperienceEntry = ({ title, company, period, description }: Props) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-6 my-10">
      <div className="flex flex-col col-span-2 mb-4 md:mb-0">
        <h3 className="text-xl md:text-2xl font-bold">{title}</h3>
        <h4 className="text-lg font-bold">{company}</h4>
        <p>{period}</p>
      </div>
      <ul className="col-span-4 list-disc">
        {description.map((entry, index) => (
          <li className="my-2" key={index}>
            {entry}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ExperienceEntry
