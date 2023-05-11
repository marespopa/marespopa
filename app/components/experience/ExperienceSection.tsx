import React from 'react'

import { homeSectionStyle } from '../common/styles'
import WithAnimation from '../common/WithAnimation'
import ExperienceEntry from './ExperienceEntry'

type Props = {
  index: number
}

const ExperienceSection = ({ index }: Props) => {
  return (
    <WithAnimation>
      <section className={homeSectionStyle} id="experience">
        <h2 className="text-4xl flex items-baseline">
          <span className="text-xl text-blue-300 mr-4">{`0${index}`}</span>
          <span>Where I&apos;ve worked</span>
        </h2>
        <p className="mt-8 text-xl">
          As a frontend engineer, I have worked with multiple companies and
          contributed to various digital products. Here are some of my proudest
          works:
        </p>
        <article className="leading-relaxed text-gray-200 mt-4">
          <ExperienceEntry
            title="Frontend Engineer"
            company="Cognizant Romania"
            site="https://www.cognizant.com/ro/en"
            period="May 2022 - Present"
            description={[
              `Working on a hotel booking app rewrite from AngularJS to NextJS, working with ~150 teammates using SAFe methodology`,
              `Applied atomic design principles to develop features from Figma designs using Chakra UI components`,
              `Improved unit testing coverage across the project (RTL and Jest) for all UI elements`,
            ]}
          />
          <ExperienceEntry
            title="Sr. Frontend Engineer"
            company="3Pillar Global"
            site="https://www.3pillarglobal.com/"
            period="Oct 2018 - May 2022"
            description={[
              `Contributed to the success of a fast-growing cybersecurity startup, developing advanced features for their frontend application`,
              `Pioneered the transition of the FE application from AngularJS to React`,
              `Developed key elements such as an interactive HighchartJS Dashboard and a versatile search functionality`,
              `Spreading technical knowledge inside the team, mentoring juniors`,
            ]}
          />
          <ExperienceEntry
            title="Software Engineer"
            company="Frequentis"
            site="https://www.frequentis.com/en"
            period="Sep 2015 - Sep 2018"
            description={[
              `Led development of an frontend application written in AngularJS from initial concept to completion,
            connecting to a REST Api and allowing improved data manipulation / visualization.`,
              `Enhanced software functionality via C# backend programming and creation/modification of SQL stored procedures.`,
              `Grew role from intern to Software Engineer, leveraging expertise in multiple development languages and technologies.`,
            ]}
          />
        </article>
      </section>
    </WithAnimation>
  )
}

export default ExperienceSection
