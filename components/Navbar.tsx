import React from 'react'

const Navbar = () => {

  const linkStyle = "hover:text-white transition-colors duration-300"

  return (
    <nav className="fixed top-0 left-0 w-full z-50 text-bg">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold">Logo</div>

        <ul className="flex space-x-6 text-bg font-medium">

          <li>
            <a href="#home" className={linkStyle}>Ana Sayfa</a>
          </li>

          <li>
            <a href="#services" className={linkStyle}>Hizmetlerimiz</a>
          </li>

          <li>
            <a href="#about" className={linkStyle}>Hakkımızda</a>
          </li>

          <li>
            <a href="#contact" className={linkStyle}>İletişim</a>
          </li>

        </ul>

      </div>
    </nav>
  )
}

export default Navbar
