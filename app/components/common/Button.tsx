import React from 'react'

type Props = {
  label: string
  handleClick: () => void
}

const Button = ({ label, handleClick }: Props) => {
  return (
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      onClick={() => handleClick}
    >
      {label}
    </button>
  )
}

export default Button
