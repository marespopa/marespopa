import { motion, useAnimation } from 'framer-motion'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'

type Props = {
  children: React.ReactElement
}

const WithAnimation = ({ children }: Props) => {
  const control = useAnimation()
  const [ref, inView] = useInView()
  const [isAnimationShown, setIsAnimationShown] = useState(false)

  const boxVariant = {
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
    hidden: { opacity: 0, scale: 0 },
  }

  useEffect(() => {
    if (!isAnimationShown) {
      if (inView) {
        control.start('visible')
        setIsAnimationShown(true)
      } else {
        control.start('hidden')
      }
    }
  }, [isAnimationShown, control, inView])

  return (
    <motion.div
      className="box"
      ref={ref}
      variants={boxVariant}
      initial="hidden"
      animate={control}
    >
      {children}
    </motion.div>
  )
}

export default WithAnimation
