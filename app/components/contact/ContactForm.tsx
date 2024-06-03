'use client'

import axios from 'axios'
import { FormData } from 'pages/api/contact'
import React, { useState } from 'react'

import ContentLink from '../common/ContentLink'

type SentStatus = 'sent' | 'idle' | 'progress'

interface Props {
  showIntro?: boolean
}

const ContactForm = ({ showIntro = false }: Props) => {
  const [error, setError] = useState('')
  const [sentStatus, setSentStatus] = useState<SentStatus>('idle')
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  })

  function renderProgressSection() {
    return (
      <div className="bg-teal-800 py-4 px-2 mt-8">
        <h2 className="text-xl font-extrabold text-white sm:text-2xl animate-pulse">
          Sending the message...
        </h2>
        <p>
          <div role="status">
            <svg
              aria-hidden="true"
              className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"
              />
            </svg>
            <span className="sr-only">Loading...</span>
          </div>
        </p>
      </div>
    )
  }

  function renderThankYouSection() {
    return (
      <div className="bg-teal-800 py-4 px-2 mt-8">
        <h2 className="text-xl font-extrabold text-white sm:text-2xl animate-pulse">
          Thank you!
        </h2>

        <p className="mt-2">
          I&apos;ve received your message, and will come back soon with the
          response.{' '}
        </p>
      </div>
    )
  }

  function renderForm() {
    return (
      <>
        {showIntro && (
          <>
            <p className="mt-8">
              Have questions, looking to collaborate, or just want to say hello?
              👋✨{' '}
            </p>
            <p className="mt-2">
              I&apos;m here for it all! Sending a message is as easy as hitting
              the <span className="font-bold">Send</span> button.
            </p>
          </>
        )}
        <div className="w-full max-w-md mt-2">
          <form
            name="contact-form"
            className="bg-emerald-900 p-4 rounded-md"
            method="post"
            onSubmit={(e) => {
              e.preventDefault()
              handleSubmit(formData)
            }}
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
  }

  async function postData(url = '', data = {}) {
    // Default options are marked with *
    const response = await fetch(url, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json',
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(data), // body data type must match "Content-Type" header
    })

    return response
  }

  async function handleSubmit(formData: FormData) {
    try {
      setSentStatus('progress')
      await postData('/api/contact', formData)
      setSentStatus('sent')
    } catch (error) {
      setError(`${error}`)
      setSentStatus('idle')
    }
  }

  return (
    <div className="max-w-prose leading-relaxed text-gray-200">
      {sentStatus === 'idle' && renderForm()}
      {sentStatus === 'progress' && renderProgressSection()}
      {sentStatus === 'sent' && renderThankYouSection()}
    </div>
  )
}

const labelStyle = ''
const inputStyle =
  'text-gray-700 shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline'
const formGroupStyle =
  'flex flex-col gap-2 text-sm font-bold mb-2 first:mt-0 mt-2'

export default ContactForm
