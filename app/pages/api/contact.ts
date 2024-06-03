//import { NextApiRequest, NextApiResponse } from 'next'
import nodemailer from 'nodemailer'

const user = process.env.ZOHO_EMAIL_USER
const pass = process.env.ZOHO_EMAIL_PASSWORD

import type { NextApiRequest, NextApiResponse } from 'next'
export type FormData = {
  name: string
  email: string
  message: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method === 'POST') {
    try {
      // Process a POST request
      const { name, email, message } = req.body as FormData
      const transporter = nodemailer.createTransport({
        host: 'smtppro.zoho.eu',
        port: 465,
        auth: {
          user,
          pass,
        },
      })

      const mailOptions = {
        from: 'office@marespopa.com',
        to: 'popa.mares@gmail.com',
        subject: 'New message from marespopa.com',
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
      }

      await transporter.sendMail(mailOptions)
      res.status(200).json({ message: 'The message has been received.' })
    } catch (error) {
      console.error(error)
      res
        .status(500)
        .json({ message: 'The mail could not be sent. Please try again.' })
      throw new Error('The mail could not be sent. Please try again.')
    }
  } else {
    // Handle any other HTTP method
  }
}
