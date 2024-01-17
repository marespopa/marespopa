import React from 'react'

type Props = {
  label: string
  handleClick: () => void
}

const Button = ({ label, handleClick }: Props) => {
  return (
    <button
      className="bg-sky-500 hover:bg-sky-700 text-white font-bold py-2 px-4 rounded hover:transition-all duration-150"
      onClick={() => handleClick}
    >
      {label}
    </button>
  )
}

export default Button
