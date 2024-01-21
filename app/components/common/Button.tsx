import React from 'react'

type Props = {
  label: string
  handleClick: (_e: React.FormEvent) => void
  type?: 'button' | 'submit' | 'reset'
}

const Button = ({ label, handleClick, type }: Props) => {
  return (
    <button
      className="bg-sky-500 hover:bg-sky-700 text-white font-bold py-2 px-4 rounded hover:transition-all duration-150"
      onClick={() => handleClick}
      type={type || 'button'}
    >
      {label}
    </button>
  )
}

export default Button
