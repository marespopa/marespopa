import React from 'react'

import WithAnimation from '../common/WithAnimation'
import SkillEntry from './SkillEntry'

type Props = {
  index: number
}

const SkillsSection = ({ index }: Props) => {
  const skillsList = [
    {
      index: 1,
      heading: 'Proficient in HTML, CSS, and JavaScript',
      content: `With over numerous years of experience in frontend development, I have a deep understanding
        of HTML, CSS, and JavaScript, and can create complex web pages and user interfaces with ease.
        I pay great attention to detail, ensuring that the code I write is optimized for performance and
        adheres to industry best practices.`,
    },
    {
      index: 2,
      heading: 'Expertise with React, Lodash, AngularJS and NextJS',
      content: `I love working with libraries like React and Lodash, and have had extensive experience with
      popular frameworks like AngularJS and NextJS. I enjoy exploring new tools and technologies to
      help create the best possible user experiences for each project.`,
    },
    {
      index: 3,
      heading: 'Knowledge of Redux, GraphQL, and NodeJS',
      content: ` I have a solid understanding of state management tools such as Redux, as well as GraphQL,
      a query language for APIs. I also have experience working with NodeJS, a popular server-side JavaScript runtime,
      which allows me to build full-stack web applications.`,
    },
    {
      index: 4,
      heading:
        'Experience in UI/UX design principles and tools such as Figma and Sketch',
      content: `In addition to my technical skills, I have a strong background in UI/UX design
      principles and tools such as Figma and Sketch. This allows me to create user-friendly,
      visually appealing interfaces that meet the needs of both the client and the end-users.`,
    },
  ]
  return (
    <WithAnimation>
      <section className="mt-4 md:mt-40 pt-10" id="skills">
        <h2 className="text-4xl flex items-baseline">
          <span className="text-xl text-blue-300 mr-4">{`0${index}`}</span>
          <span>Skills</span>
        </h2>
        <article className="max-w-prose leading-relaxed text-gray-200">
          <p className="my-8 text-xl">
            Along the way, I accumulated extensive experience in web development
            and keep myself updated with the latest frontend technologies and
            methodologies. Here are some of my core skills:
          </p>
          {skillsList.map((skillItem) => (
            <SkillEntry
              key={skillItem.index}
              heading={skillItem.heading}
              content={skillItem.content}
            />
          ))}
        </article>
      </section>
    </WithAnimation>
  )
}

export default SkillsSection
