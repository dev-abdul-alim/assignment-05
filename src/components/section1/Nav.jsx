import LogoText from '../../assets/logo-text.png'
import Hamburger from '../../assets/hamburger.png'

const Nav = () => {
  return (
<nav className="sticky  top-0 z-50 bg-amber-50 border-b border-gray-300">
      <div className="flex items-center justify-between px-4 py-4 md:px-10">

        {/* Hamburger - Mobile */}
        <button className="text-2xl md:hidden">
          <img src={Hamburger} alt="" />
        </button>

        {/* Logo */}
        <img
          src={LogoText}
          alt="Dev Stack"
          className="w-32 md:w-auto"
        />

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6 text-black">
          <a href="#" className="brand-gradient bg-clip-text text-transparent">
            Home
          </a>
          <a href="#">Technologies</a>
          <a href="#">Projects</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </div>

        {/* Buttons */}
        <div className="flex items-center gap-2 md:gap-4">
          <button className="text-sm md:text-base">
            Sign In
          </button>

          <button className="bg-pink-600 text-white px-4 py-1.5 md:px-5 md:py-2 rounded-3xl text-sm md:text-base">
            Sign Up
          </button>
        </div>

      </div>
    </nav>  )
}

export default Nav
