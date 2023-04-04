import React from 'react'

import PublicLayout from './common/layouts/PublicLayout'
import Contact from './contact/Contact'
import Experience from './experience/Experience'
import Hero from './hero/Hero'
import Projects from './projects/Projects'
import WithAnimation from './WithAnimation'

type Props = {}

const HomePage = (props: Props) => {
  return (
    <PublicLayout>
      <Hero />
      <WithAnimation>
        <Projects />
      </WithAnimation>
      <hr className="border-gray-400 mx-60" />
      <WithAnimation>
        <Experience />
      </WithAnimation>
      <hr className="border-gray-400 mx-60" />
      <WithAnimation>
        <Contact />
      </WithAnimation>
    </PublicLayout>
  )
}

export default HomePage
