'use client'

import React, { useState } from 'react'
import ConfettiExplosion from 'react-confetti-explosion'

type SentStatus = 'sent' | 'idle'

const ReviewForm = () => {
  const [error, setError] = useState('')
  const [sentStatus, setSentStatus] = useState<SentStatus>('idle')
  const [formData, setFormData] = useState({
    website: '',
    name: '',
    email: '',
  })

  return (
    <div className="max-w-prose leading-relaxed text-gray-200">
      {sentStatus === 'idle' && renderForm()}
      {sentStatus === 'sent' && renderThankYouSection()}
    </div>
  )

  function renderThankYouSection() {
    return (
      <div className="bg-fuchsia-900 py-8 px-4 mt-8 prose prose-invert rounded-md">
        <h2 className="text-xl font-extrabold text-white sm:text-2xl">
          Thank you, {formData.name}! ✨
        </h2>

        <ConfettiExplosion />

        <h3>You&apos;ve taken the first step toward improving your website.</h3>

        <p>
          You can expect to receive{' '}
          <span className="font-bold">
            a detailed report within 1-3 business days
          </span>
          . Keep an eye on your inbox for my email and stay tuned for valuable
          insights to elevate your online presence!
        </p>
        <p className="italic">
          Best regards, <br />
          Mares
        </p>
      </div>
    )
  }

  function renderForm() {
    return (
      <>
        <div className="w-full max-w-md mt-2" id="reviewForm">
          <form
            name="review"
            className="bg-fuchsia-900 p-4 rounded-md"
            onSubmit={handleSubmit}
            data-netlify="true"
            data-netlify-honeypot="bot-field"
          >
            <div className="mb-4">
              <label className={formGroupStyle}>
                <span className={labelStyle}>Your website URL:</span>
                <input
                  className={inputStyle}
                  type="url"
                  name="website"
                  placeholder="https://"
                  value={formData.website}
                  onChange={(e) =>
                    setFormData({ ...formData, website: e.target.value })
                  }
                />
                <input type="hidden" name="form-name" value="contact" />
              </label>
            </div>

            <div className="mb-4">
              <label className={formGroupStyle}>
                <span className={labelStyle}>Your name:</span>
                <input
                  className={inputStyle}
                  type="text"
                  name="name"
                  placeholder="John Smith"
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
                <span className={labelStyle}>Your best email:</span>
                <input
                  className={inputStyle}
                  type="email"
                  name="email"
                  placeholder="me@email.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
              </label>
            </div>
            <div className="mb-4">
              <button
                className="bg-yellow-300 hover:bg-yellow-400 focus:bg-yellow-400 text-gray-900 font-bold py-2 px-4 rounded hover:transition-all duration-150"
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
      </>
    )
  }

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault()

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'review', ...formData }),
    })
      .then(() => {
        setSentStatus('sent')
      })
      .catch((error) => setError(error))

    event.preventDefault()
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

export default ReviewForm
