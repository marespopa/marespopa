import React from 'react'

type Props = {
  statusCode: number
}

const ErrorPage = ({ statusCode }: Props) => {
  if (statusCode === 404) {
    return (
      <div>
        <h2>Oops, the page could not be found!</h2>
      </div>
    )
  }

  return (
    <div>
      <h2>Oops, there is an error!</h2>
    </div>
  )
}

export default ErrorPage
