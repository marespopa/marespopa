import React from 'react'

function Footer() {
  const getCurrentYear = () => {
    return new Date().getFullYear()
  }

  return (
    <footer
      className="bg-gray-800 mt-auto p-5 w-full fixed left-0 bottom-0
    flex justify-center items-center text-white"
    >
      <p className="mx-auto">Mares Popa {getCurrentYear()}. All rights reserved.</p>
    </footer>
  )
}

export default Footer
