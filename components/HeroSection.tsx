import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const images = [
  '/Images/image1.png',
  '/Images/image2.png',
  '/Images/image1.png',
]

const HeroSection = () => {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  // Motion variants
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  }

  return (
    <div className="relative h-screen overflow-hidden">
      {/* Background Image Slider */}
      <div className="absolute inset-0 transition-all duration-1000">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Slide ${index}`}
            className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${
              current === index ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}
        {/* White Overlay */}
        <div className="absolute inset-0 bg-white opacity-70 z-10" />
      </div>

      {/* Content with motion */}
      <motion.div
        className="relative z-20 h-full flex flex-col justify-center items-center text-center px-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          variants={itemVariants}
          className="text-primary text-4xl md:text-6xl font-bold mb-4 max-w-3xl"
        >
          Ak Yapı Dekorasyon & Ayna & Cam Balkon
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-neutral-700 text-lg md:text-xl mb-6 max-w-5xl"
        >
          Bir telefon uzağınızda olan Ak Yapı Dekorasyon müşterilerine yerinde
          hizmet vermektedir. Ölçü ve tamirat için iletişim numaralarımızı
          kullanabilirsiniz. Detaylı bilgi için iletişime geçerek randevu
          alabilirsiniz.
        </motion.p>

        <motion.button
            variants={itemVariants}
            whileHover={{ scale: 1.05, y: -4 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="bg-primary text-white px-6 py-3 rounded-full cursor-pointer"
            >
            Hemen Ara
        </motion.button>

      </motion.div>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2 z-30">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full ${
              current === index ? 'bg-primary' : 'bg-gray-700'
            } transition`}
          />
        ))}
      </div>
    </div>
  )
}

export default HeroSection
