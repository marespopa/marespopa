import React from 'react'

import EmphasisedWord from '../common/EmphasisedWord'
import { homeSectionStyle } from '../common/styles'
import WithAnimation from '../common/WithAnimation'

type Props = {
  index: number
}

const AboutSection = ({ index }: Props) => {
  return (
    <WithAnimation>
      <section className={homeSectionStyle} id="about">
        <h2 className="text-4xl flex items-baseline">
          <span className="text-xl text-blue-300 mr-4">{`0${index}`}</span>
          <span>About me</span>
        </h2>
        <article className="max-w-prose leading-relaxed text-gray-200">
          <p className="mt-8">
            My passion for frontend development began in high school when I
            co-created an online football manager game. This early project
            sparked my interest in building intuitive, user-centered interfaces.
          </p>
          <p className="mt-4">
            {' '}
            Since then, I&apos;ve had the privilege of working at global
            companies such as <EmphasisedWord>Riverbed</EmphasisedWord>, {` `}
            <EmphasisedWord>Cognizant</EmphasisedWord>,{' '}
            <EmphasisedWord>3Pillar Global</EmphasisedWord>, and{' '}
            <EmphasisedWord>Frequentis</EmphasisedWord>, where I&apos;ve worked
            projects ranging from modernizing a hotel booking app to
            implementing robust cybersecurity features.
          </p>{' '}
          <p className="mt-4">
            I&apos;m also sharing my knowledge as a lecturer for an online
            full-stack course covering{' '}
            <EmphasisedWord>
              HTML, CSS, Javascript, React and Node.JS
            </EmphasisedWord>{' '}
            for <EmphasisedWord>GoIT</EmphasisedWord>, an international ed-tech
            company with more than 6 years of experience, over the course of
            which we have received several remarkable achievements.
          </p>{' '}
          <p className="mt-4">
            My focus these days is on building robust, accessible web
            applications using cutting-edge technologies such as{' '}
            <EmphasisedWord>React, NextJS, and Typescript</EmphasisedWord>.
            Whether it&apos;s developing customizable dashboards or implementing
            dark/light modes, I&apos;m committed to delivering exceptional user
            experiences.
          </p>
          <p className="mt-4">
            When I&apos;m not coding, I love exploring new cities with my
            wonderful wife, cycling through scenic routes, and shooting hoops on
            the basketball court. These hobbies keep me balanced and energized,
            and I&apos;m always excited to share recommendations for the best
            bike paths, restaurants, and sights to see.
          </p>
        </article>
      </section>
    </WithAnimation>
  )
}

export default AboutSection
