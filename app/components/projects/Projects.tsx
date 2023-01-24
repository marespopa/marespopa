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
                  href="https://devxloper.netlify.app/"
                  className="flex flex-cols"
                >
                  <span className="mr-2">Devxloper</span>{' '}
                  <Icon type="extLink" />
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
              <p className="mt-4">{`Devxloper comes out to help you. Start by clearly describe what you are trying to accomplish in at most two hours coding session.
                For example, you might have to build out the navigation for your app. Depending on the complexity,
                this might take more than two hours if you plan on implementing authentication in this. 
                In that case, you should split it out in something that can be accomplished in a coding session.`}</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Projects
