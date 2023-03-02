import React from 'react'

import Container from '../container/Container'
import ExperienceEntry from './ExperienceEntry'

const Experience = () => {
  return (
    <section className="my-4 py-10 bg-white">
      <Container>
        <h4 className="mb-8 text-5xl font-bold">Experience</h4>
        <ExperienceEntry
          title="Frontend Engineer"
          company="Cognizant Softvision"
          period="May 2022 - present"
          description={[
            `Working on a hotel booking app rewrite from AngularJS to NextJS, working with ~150 teammates using SAFe methodology`,
            `Applied atomic design principles to develop features from Figma designs using Chakra UI components`,
            `Improved unit testing coverage across the project (RTL and Jest) for all UI elements`,
          ]}
        />
        <ExperienceEntry
          title="Sr. Frontend Engineer"
          company="3Pillar Global"
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
          period="Sep 2015 - Sep 2018"
          description={[
            `Led development of an frontend application written in AngularJS from initial concept to completion,
            connecting to a REST Api and allowing improved data manipulation / visualization.`,
            `Enhanced software functionality via C# backend programming and creation/modification of SQL stored procedures.`,
            `Grew role from intern to Software Engineer, leveraging expertise in multiple development languages and technologies.`,
          ]}
        />
      </Container>
    </section>
  )
}

export default Experience
