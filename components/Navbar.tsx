import React from 'react'

const Navbar = () => {

  const linkStyle = "hover:text-white transition-colors duration-300"

  return (
    <nav className="fixed top-0 left-0 w-full z-50 text-bg bg-primary">
      <div className="max-w-7xl mx-auto px-4 py-8 flex justify-between items-center">
        <img src="Logo/LogoUzun.png" alt="LogoUzun" className='w-32'/>

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

        </ul>

      </div>
    </nav>
  )
}

export default Navbar
