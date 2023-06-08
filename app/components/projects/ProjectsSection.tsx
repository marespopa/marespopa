import React from 'react'

import { homeSectionStyle } from '../common/styles'
import WithAnimation from '../common/WithAnimation'
import { PROJECTS_LIST } from './constants'
import ProjectEntry from './ProjectEntry'

type Props = {
  index: number
}

const ProjectsSection = ({ index }: Props) => {
  const projectsList = PROJECTS_LIST

  return (
    <WithAnimation>
      <section className={homeSectionStyle} id="projects">
        <h2 className="text-4xl flex items-baseline">
          <span className="text-xl text-blue-300 mr-4">{`0${index}`}</span>
          <span>Some Things I&apos;ve Built</span>
        </h2>
        <div className="flex flex-col gap-8 md:gap-4">
          {projectsList.map((project) => (
            <ProjectEntry key={project.id} {...project} />
          ))}
        </div>
      </section>
    </WithAnimation>
  )
}

export default ProjectsSection
