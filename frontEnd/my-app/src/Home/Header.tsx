import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Prevent scrolling when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-[#0a0f1d] via-[#1b1440] to-[#3a1d6e] bg-opacity-80 backdrop-blur-lg shadow-md py-4 px-6 md:px-16 flex justify-between items-center">
        {/* Logo / Site Name */}
        <h1 className="text-xl font-semibold text-white">My Website</h1>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-6">
          <Link to="/" className="text-white hover:text-purple-400 transition">Home</Link>
          <Link to="/about" className="text-white hover:text-purple-400 transition">About</Link>
          <Link to="/services" className="text-white hover:text-purple-400 transition">Services</Link>
          <Link to="/contact" className="text-white hover:text-purple-400 transition">Contact</Link>

          {/* Login Button */}
          <Link 
            to="/login" 
            className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition"
          >
            Login
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="absolute top-16 left-0 w-full bg-[#1b1440] text-white flex flex-col items-center space-y-4 py-6 md:hidden">
            <Link to="/" className="hover:text-purple-400 transition" onClick={() => setMenuOpen(false)}>Home</Link>
            <Link to="/about" className="hover:text-purple-400 transition" onClick={() => setMenuOpen(false)}>About</Link>
            <Link to="/services" className="hover:text-purple-400 transition" onClick={() => setMenuOpen(false)}>Services</Link>
            <Link to="/contact" className="hover:text-purple-400 transition" onClick={() => setMenuOpen(false)}>Contact</Link>
            <Link to="/login" className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-lg transition" onClick={() => setMenuOpen(false)}>
              Login
            </Link>
          </div>
        )}
      </header>

      {/* Prevent Content Overlap */}
      <div className="pt-[4rem]"></div>
    </>
  );
};

export default Header;