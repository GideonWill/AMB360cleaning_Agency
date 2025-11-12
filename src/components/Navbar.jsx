import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { scrollToTop } from '../utils/scrollToTop';
import logo from '../assets/AMB360 CLEANING LOGO.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/services', label: 'Services' },
    { to: '/portfolio', label: 'Portfolio' },
    { to: '/contact', label: 'Contact' },
  ];

  const handleNavClick = () => {
    setIsOpen(false);
    scrollToTop();
  };

  const linkClasses = ({ isActive }) =>
    `text-sm font-medium transition-colors ${isActive ? 'text-primary-600' : 'text-gray-700 hover:text-primary-600'}`;

  return (
    <nav className="bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/70 fixed w-full top-0 z-50 shadow-sm border-b border-gray-100">
      <div className="container-custom">
        <div className="flex justify-between items-center py-3">
          <Link to="/" className="flex items-center gap-3" aria-label="AMB 360 Cleaning Agency Home" onClick={scrollToTop}>
            <img
              src={logo}
              alt="AMB 360 Cleaning Agency logo"
              className="h-12 md:h-16 lg:h-20 w-auto select-none"
              loading="eager"
              decoding="async"
            />
            <span className="sr-only">AMB 360 Cleaning Agency</span>
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <NavLink key={link.to} to={link.to} className={linkClasses} onClick={handleNavClick}>
                {link.label}
              </NavLink>
            ))}
          </div>

          <div className="hidden md:block">
            <NavLink to="/contact" className="btn-primary" onClick={scrollToTop}>
              Request Service
            </NavLink>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700 hover:text-primary-600 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `block py-2 text-sm font-medium transition-colors ${
                    isActive ? 'text-primary-600' : 'text-gray-700 hover:text-primary-600'
                  }`
                }
                onClick={handleNavClick}
              >
                {link.label}
              </NavLink>
            ))}
            <NavLink to="/contact" className="block mt-4 btn-primary text-center" onClick={handleNavClick}>
              Request Service
            </NavLink>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

