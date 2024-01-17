import React from 'react'

import ButtonLink from '../common/ButtonLink'
import ContentLink from '../common/ContentLink'
import { homeSectionStyle } from '../common/styles'
import WithAnimation from '../common/WithAnimation'

type Props = {
  index: number
}

const ContactSection = ({ index }: Props) => {
  return (
    <WithAnimation>
      <section className={`${homeSectionStyle} pb-20`} id="contact">
        <h2 className="text-4xl flex items-baseline">
          <span className="text-xl text-blue-300 mr-4">{`0${index}`}</span>
          <span>Let&apos;s Connect</span>
        </h2>
        <article className="max-w-prose leading-relaxed text-gray-200">
          <p className="mt-8">
            Have questions, looking to collaborate, or just want to say hello?
            I&apos;m here for it all! Sending an email is as easy as hitting the{' '}
            <span className="font-bold">Send</span> button.
          </p>
          <p className="mt-2">
            Connect with me on{' '}
            <ContentLink
              url="https://www.linkedin.com/in/mares-popa/"
              title="Mares Popa LinkedIN"
              label="LinkedIn"
              isExternal={true}
              target="_blank"
            />{' '}
            if you prefer a more casual introduction.
          </p>

          <p className="mt-2">
            {' '}
            Let&apos;s make it easy and start the conversation today! 👋✨
          </p>
          <div className="flex mt-4">
            <ButtonLink url="mailto:hello@marespopa.com" label="Send" />
          </div>
        </article>
      </section>
    </WithAnimation>
  )
}

export default ContactSection
