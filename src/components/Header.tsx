import { useState } from 'react';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="flex justify-between items-center py-6 px-6 md:px-10 relative z-50">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <img src="src/assets/image.png" alt="InjurySync Logo" className="h-8" />
      </div>

      {/* Desktop Nav */}
      <nav className="hidden md:flex gap-8 items-center text-gray-700">
        <a href="#">Home</a>
        <a href="#">Pricing</a>
        <a href="#">Contact Us</a>
        <button className="px-4 py-2 border border-blue-600 text-blue-600 rounded-md">
          Sign In
        </button>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-md">
          Get Started
        </button>
      </nav>

      {/* Hamburger Icon */}
      <div className="md:hidden">
        <button onClick={() => setMenuOpen(!menuOpen)} className="focus:outline-none">
          <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md flex flex-col items-start p-6 gap-4 md:hidden">
          <a href="#" className="text-gray-700">Home</a>
          <a href="#" className="text-gray-700">Pricing</a>
          <a href="#" className="text-gray-700">Contact Us</a>
          <button className="w-full px-4 py-2 border border-blue-600 text-blue-600 rounded-md">
            Sign In
          </button>
          <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-md">
            Get Started
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
