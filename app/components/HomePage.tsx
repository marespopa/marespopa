import React from 'react'

import AboutSection from './about/AboutSection'
import ContactSection from './contact/ContactSection'
import Container from './container/Container'
import HeroSection from './hero/HeroSection'
import ProjectsSection from './projects/ProjectsSection'

type Props = {}

const HomePage = (props: Props) => {
  return (
    <Container>
      <HeroSection />
      <ProjectsSection index={1} />
      <AboutSection index={2} />
      <ContactSection index={3} />
    </Container>
  )
}

export default HomePage
