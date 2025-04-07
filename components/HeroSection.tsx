import React, { useEffect, useState } from 'react'

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

      {/* Content */}
      <div className="relative z-20 h-full flex flex-col justify-center items-center text-center px-4">
        <h1 className="text-primary text-4xl md:text-6xl font-bold mb-4 max-w-3xl">Ak Yapı Dekorasyon & Ayna & Cam Balkon</h1>
        <p className="text-neutral-700 text-lg md:text-xl mb-6 max-w-5xl">
        Bir telefon uzağınızda olan Ak Yapı Dekorasyon müşterilerine yerinde  hizmet vermektedir. Ölçü ve tamirat için iletişim numaralarımızı  kullanabilirsiniz. Detaylı bilgi için iletişime geçerek randevu  alabilirsiniz.
        </p>
        <button className="bg-primary text-white px-6 py-3 rounded-full hover:-translate-y-1 hover:scale-105 transition cursor-pointer">
          Hemen Ara
        </button>
      </div>

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
