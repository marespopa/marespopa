import React, { useEffect, useState } from 'react'

import { homeSectionStyle } from '../common/styles'
import WithAnimation from '../common/WithAnimation'
import ContactForm from './ContactForm'

type Props = {
  index: number
}

const ContactSection = ({ index }: Props) => {
  const [success, setSuccess] = useState(false)

  useEffect(() => {
    if (window.location.search.includes('success=true')) {
      setSuccess(true)
    }
  }, [])

  return (
    <WithAnimation>
      <section className={`${homeSectionStyle} pb-20`} id="contact">
        <h2 className="text-4xl flex items-baseline">
          <span className="text-xl text-blue-300 mr-4">{`0${index}`}</span>
          <span>Let&apos;s Connect</span>
        </h2>

        <ContactForm />
      </section>
    </WithAnimation>
  )
}
export default ContactSection
