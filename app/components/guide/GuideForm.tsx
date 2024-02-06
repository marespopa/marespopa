'use client'

import Link from 'next/link'
import React, { useState } from 'react'
import ConfettiExplosion from 'react-confetti-explosion'

type SentStatus = 'sent' | 'idle'

const GuideForm = () => {
  const [error, setError] = useState('')
  const [sentStatus, setSentStatus] = useState<SentStatus>('idle')
  const [formData, setFormData] = useState({
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
      <div className="bg-teal-900 py-8 px-4 mt-8 prose prose-invert rounded-md mx-auto">
        <h2 className="text-xl font-extrabold text-white sm:text-2xl">
          Thank you, {formData.name}! ✨
        </h2>

        <ConfettiExplosion />

        <h3>
          <Link
            href={'/pdf/website-recipe-2024.pdf'}
            rel="noopener noreferrer"
            target="_blank"
          >
            Click here to download the guide
          </Link>
        </h3>

        <p>You&apos;ve taken the first step toward improving your website.</p>
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
        <div className="w-full max-w-md mt-2" id="guideForm">
          <form
            name="guide"
            className="bg-emerald-900 p-4 rounded-md"
            onSubmit={handleSubmit}
            data-netlify="true"
            data-netlify-honeypot="bot-field"
          >
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
                Grab the FREE guide!
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
      body: encode({ 'form-name': 'guide', ...formData }),
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

export default GuideForm
