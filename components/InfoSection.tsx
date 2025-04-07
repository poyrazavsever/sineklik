import React from 'react'
import { FiPhone } from 'react-icons/fi'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const InfoSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 1,
  })

  const variants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: 'easeOut' } },
  }

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      className="w-full shadow-md py-8"
    >
      <div className="container mx-auto max-w-7xl flex justify-between items-center">
        {/* Sol kısım: ikon + yazı */}
        <div className="flex items-center gap-4 text-bg font-semibold text-3xl">
          <FiPhone className="text-3xl" />
          <span>Hemen Ara</span>
        </div>

        {/* Sağ kısım: telefon numarası */}
        <a
          href="tel:+905551234567"
          className="text-3xl font-bold text-bg hover:text-white transition"
        >
          +90 555 123 45 67
        </a>
      </div>
    </motion.div>
  )
}

export default InfoSection
