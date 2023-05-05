import { motion } from 'framer-motion'

type Props = {
  children: React.ReactElement
}

const WithAnimation = ({ children }: Props) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      variants={{
        visible: { opacity: 1 },
        hidden: { opacity: 0 },
      }}
    >
      {children}
    </motion.div>
  )
}

export default WithAnimation
