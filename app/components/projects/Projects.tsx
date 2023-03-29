import React from 'react'

import Icon from '../../utils/Icon'
import Container from '../container/Container'

const Projects = () => {
  return (
    <section className="py-10 my-4 bg-white">
      <Container>
        <div>
          <p className="mt-0 mb-3 mx-auto font-bold text-5xl">Working on</p>

          <div className="grid grid-cols-1 md:grid-cols-6 my-10">
            <div className="flex flex-col col-span-2 mb-4 md:mb-0">
              <h5 className="text-xl md:text-2xl font-bold underline">
                <a
                  href="https://dolooper.netlify.app/"
                  className="flex flex-cols"
                >
                  <span className="mr-2">Dolooper</span> <Icon type="extLink" />
                </a>
              </h5>
              <h6 className="text-lg font-bold">Productivity app</h6>
              <p>Built using NextJS</p>
            </div>
            <div className="flex flex-col col-span-4">
              <p>{`Dolooper is a productivity app written on top of Next.JS, using Tailwind CSS and Typescript.`}</p>
              <p className="mt-4">{`With Dolooper's One Task Focus feature, you can work on one task at a time for improved concentration and productivity. Our Clear Planning feature allows you to break down complex tasks into manageable pieces for easier prioritization and success. Time-Boxing helps you fight procrastination and accomplish more in less time by setting time estimates for each task. And with Markdown support, organizing and formatting your work has never been easier.`}</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Projects
