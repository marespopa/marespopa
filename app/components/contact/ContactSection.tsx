import React, { useState } from 'react'

import Button from '../common/Button'
import ContentLink from '../common/ContentLink'
import { homeSectionStyle } from '../common/styles'
import WithAnimation from '../common/WithAnimation'

type Props = {
  index: number
}

type SentStatus = 'sent' | 'idle'

const ContactSection = ({ index }: Props) => {
  const [sentStatus, setSentStatus] = useState<SentStatus>('idle')
  const [error, setError] = useState('')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  return (
    <WithAnimation>
      <section className={`${homeSectionStyle} pb-20`} id="contact">
        <h2 className="text-4xl flex items-baseline">
          <span className="text-xl text-blue-300 mr-4">{`0${index}`}</span>
          <span>Let&apos;s Connect</span>
        </h2>
        <div className="max-w-prose leading-relaxed text-gray-200">
          {sentStatus === 'idle' && renderContactForm()}
          {sentStatus === 'sent' && renderThankYouSection()}
        </div>
      </section>
    </WithAnimation>
  )

  function renderThankYouSection() {
    return (
      <div className="bg-cyan-900 py-4 px-2 mt-8">
        <h2 className="text-xl font-extrabold text-white sm:text-2xl">
          Thank you!
        </h2>

        <p className="mt-2">
          I&apos;ve received your message, and will come back soon with the
          response.{' '}
        </p>
      </div>
    )
  }

  function renderContactForm() {
    return (
      <>
        <p className="mt-8">
          Have questions, looking to collaborate, or just want to say hello?
          👋✨{' '}
        </p>
        <p className="mt-2">
          I&apos;m here for it all! Sending a message is as easy as hitting the{' '}
          <span className="font-bold">Send</span> button.
        </p>

        <div className="w-full max-w-md mt-2">
          <form
            className="bg-cyan-900 p-4"
            onSubmit={handleSubmit}
            data-netlify="true"
            data-netlify-honeypot="bot-field"
          >
            <div className="mb-4">
              <label className={formGroupStyle}>
                <span className={labelStyle}>Your Name:</span>
                <input
                  className={inputStyle}
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />
                <input type="hidden" name="form-name" value="contact" />
              </label>
            </div>
            <div className="mb-4">
              <label className={formGroupStyle}>
                <span className={labelStyle}>Your Email:</span>
                <input
                  className={inputStyle}
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
              </label>
            </div>
            <div className="mb-4">
              <label className={formGroupStyle}>
                <span className={labelStyle}>Message:</span>
                <textarea
                  className={inputStyle}
                  name="message"
                  rows={3}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                ></textarea>
              </label>
            </div>
            <div className="mb-4">
              <button
                className="bg-sky-500 hover:bg-sky-700 text-white font-bold py-2 px-4 rounded hover:transition-all duration-150"
                type="submit"
              >
                Send
              </button>
            </div>
            {error.length > 0 && (
              <div className="my-2 p-4 rounded-md bg-red-300 border-red-400 border">
                {error}
              </div>
            )}
          </form>
        </div>

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
      </>
    )

    function handleSubmit(event: React.FormEvent) {
      event.preventDefault()
      setError('')

      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({ 'form-name': 'contact', ...formData }),
      })
        .then(() => {
          console.debug('Submit')
          setSentStatus('sent')
        })
        .catch((error) => setError(error))

      event.preventDefault()
    }
  }
}

const encode = (data: any) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

const labelStyle = ''
const inputStyle =
  'text-gray-700 shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline'
const formGroupStyle =
  'flex flex-col gap-2 text-sm font-bold mb-2 first:mt-0 mt-2'

export default ContactSection
