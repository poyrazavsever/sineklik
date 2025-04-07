import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 px-4 text-center">
      <div className="text-sm mb-2">
        &copy; {new Date().getFullYear()} Tüm hakları saklıdır.
      </div>
      <div className="text-gray-400 text-sm mb-2">
        Bu web sitesi modern web teknolojileri kullanılarak oluşturulmuştur. 
        Kullanıcı dostu bir deneyim sunmayı amaçlar.
      </div>
      <div className="text-xs text-gray-500">
        Created by <span className="font-semibold text-white">Poyraz Avsever</span>
      </div>
    </footer>
  )
}

export default Footer
