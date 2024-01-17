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
            title="Sr. Frontend Engineer"
            company="Riverbed"
            site="https://www.riverbed.com/"
            period="July 2023 - Present"
            description={[
              `Collaborate with a team of talented individuals to develop and test new and existing features
              in the Alluvio Platform's SAAS UI, ensuring a seamless user experience and maintaining code quality.`,
              `Contribute to the design of new features and actively participate in technical discussions,
              leveraging my experience and knowledge to provide valuable insights and suggestions.`,
              `Utilize my skills in React, HTML, JavaScript, and CSS to create user-friendly front-end interfaces,
              while working closely with UX and product management teams to align with their vision. Embrace agile 
              software development practices, continuously seeking ways to enhance the product and provide innovative 
              ideas to the team.`,
            ]}
          />
          <ExperienceEntry
            title="Fullstack Course Lector"
            company="GoIT"
            site="https://goit.global/ro"
            period="March 2023 - Present"
            description={[
              `Delivering engaging and comprehensive lessons on HTML/CSS, JavaScript, React.js, and Node.js modules.`,
              `Following the curriculum schedule and conducting 2-hour lessons twice a week.`,
              `Providing valuable feedback to enhance the program's quality and actively participating in internal training for continuous improvement.`,
            ]}
          />

          <ExperienceEntry
            title="Frontend Engineer"
            company="Cognizant Romania"
            site="https://www.cognizant.com/ro/en"
            period="May 2022 - June 2023"
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
