import React from 'react'

interface Props {
  children: React.ReactNode
}

const Container = ({ children }: Props) => {
  return (
    <div className="w-full max-w-5xl px-8 mx-auto md:px-4 lg:px-2">
      {children}
    </div>
  )
}

export default Container
