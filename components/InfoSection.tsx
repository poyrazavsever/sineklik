import React from 'react'
import { FiPhone } from 'react-icons/fi'

const InfoSection = () => {
  return (
    <div className="w-full shadow-md py-8">
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
    </div>
  )
}

export default InfoSection
