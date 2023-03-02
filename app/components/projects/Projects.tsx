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
                  href="https://doloper.netlify.app/"
                  className="flex flex-cols"
                >
                  <span className="mr-2">Doloper</span> <Icon type="extLink" />
                </a>
              </h5>
              <h6 className="text-lg font-bold">Productivity app</h6>
              <p>Built using NextJS</p>
            </div>
            <div className="flex flex-col col-span-4">
              <p>{`Some hard truth. Multitasking doesn't work. You probably know the 
                story of the hunter who tries to shoot two rabbits at the same time.
                In case you don't, let me share with you the end result. He gets out with no rabbit.
                That's the same with our development. If we try to focus on more than one task at a time, 
                we rarely give out our best effort.`}</p>
              <p className="mt-4">{`Doloper comes out to help you. It helps you streamline your workflow by planning, 
              time-boxing and executing one task at a time.`}</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Projects
