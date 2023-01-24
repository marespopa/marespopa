import React from 'react'

import Contact from './contact/Contact'
import Experience from './experience/Experience'
import Hero from './hero/Hero'
import PublicLayout from './layouts/PublicLayout'
import Projects from './projects/Projects'

type Props = {}

const HomePage = (props: Props) => {
  return (
    <PublicLayout>
      <Hero />
      <Projects />
      <hr className="border-gray-400 mx-60" />
      <Experience />
      <hr className="border-gray-400 mx-60" />
      <Contact />
    </PublicLayout>
  )
}

export default HomePage
