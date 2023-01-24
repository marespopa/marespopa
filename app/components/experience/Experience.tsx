import React from 'react'

import Container from '../container/Container'
import ExperienceEntry from './ExperienceEntry'

const Experience = () => {
  return (
    <section className="my-4 py-10 bg-white">
      <Container>
        <h4 className="mb-8 text-5xl font-bold text-center md:text-left">
          Experience
        </h4>
        <ExperienceEntry
          title="Frontend Engineer"
          company="Cognizant Softvision"
          period="May 2022 - present"
          description={[
            `Understand business requirements and translate them into technical
                        requirements`,
            `Develop new user-facing features using latest React
                        tools`,
            `Use Figma designs to develop responsive web and Single Page
                        Applications consuming server-side JSON restful services`,
            `Build
                        reusable components and front-end libraries`,
            `Manual and Automated
                        Unit Testing Work on CI/CD pipelines under assistance`,
            `Performs
                        design & code reviews for team members.`,
          ]}
        />
        <ExperienceEntry
          title="Sr. Frontend Engineer"
          company="3Pillar Global"
          period="Oct 2018 - May 2022"
          description={[
            `Develop and maintain codebases for rich, interactive modern application`,
            `Ensure quality and timeliness of deliverables by employing strategies such as code reviews, TDD, continuous integration`,
            `Involvement in technical and architectural decisions that shape the course of the project`,
            `Involvement in product shaping decisions and empowerment to propose new features`,
            `Document and update the design and architecture of projects`,
            `Spreading technical knowledge inside the team, mentoring juniors`,
          ]}
        />
        <ExperienceEntry
          title="Software Engineer"
          company="Frequentis"
          period="Sep 2015 - Sep 2018"
          description={[
            `.NET Developement (with DevExpress Framework)`,
            `Frontend Development on Angular JS`,
            `Ensure a streamlined user experience`,
            `Mantain a clean and modern look of the applications`,
            `Provide high quality code in accordance with the coding guidelines`,
          ]}
        />
      </Container>
    </section>
  )
}

export default Experience
