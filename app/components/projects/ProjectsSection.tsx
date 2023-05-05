import React from 'react'

import Icon from '@/utils/Icon'

import { homeSectionStyle } from '../common/styles'
import WithAnimation from '../common/WithAnimation'
import DolooperImage from '../DolooperImage'
import SVGGithub from '../icons/SVGGithub'
import SVGLink from '../icons/SVGLink'

type Props = {
  index: number
}

const ProjectsSection = ({ index }: Props) => {
  return (
    <WithAnimation>
      <section className={homeSectionStyle} id="projects">
        <h2 className="text-4xl flex items-baseline">
          <span className="text-xl text-blue-300 mr-4">{`0${index}`}</span>
          <span>Some Things I&apos;ve Built</span>
        </h2>
        <div className="mt-8 flex flex-col md:flex-row">
          <div className="hidden md:flex mt-8 md:mt-0">
            <DolooperImage />
          </div>
          <div className="flex-1 md:pl-8">
            <h3 className="ml-auto text-xl text-blue-300">Featured project</h3>
            <h2 className="ml-auto text-2xl">
              <a
                className="hover:underline focus:underline"
                href="https://dolooper.netlify.app"
              >
                Dolooper
              </a>
            </h2>
            <article>
              <p className="max-w-prose mt-8 p-4 bg-blue-900 rounded shadow-sm md:-ml-20 md:text-right">
                Dolooper is a productivity app built with NextJS and Tailwind
                CSS, allowing users to stay focused on one task at a time. With
                enhanced security, all data is stored locally for privacy and
                peace of mind.
              </p>
            </article>
            <div className="flex gap-4 md:justify-end items-center mt-8 text-2xl">
              <a
                className="hover:text-blue-300 focus:text-blue-300"
                aria-label="App Link"
                href="https://dolooper.netlify.app"
              >
                <SVGLink />
              </a>
              <a
                className="hover:text-blue-300 focus:text-blue-300"
                aria-label="Github Link"
                href="https://github.com/smoothwizz/doloper"
              >
                <SVGGithub />
              </a>
            </div>
          </div>
        </div>
      </section>
    </WithAnimation>
  )
}

export default ProjectsSection
