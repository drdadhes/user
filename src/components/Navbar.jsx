import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Events', path: '/events' },
    { name: 'Videos', path: '/videos' },
    // { name: 'Book OP', path: '/book-appointment' }
  ];

  // Close menu when route changes
  React.useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <>
      <style>{`
        .font-label-caps {
          font-family: 'Manrope', sans-serif;
          font-size: 12px;
          line-height: 100%;
          letter-spacing: 0.1em;
          font-weight: 600;
        }

        .mobile-menu {
          animation: slideDown 0.3s ease-out;
        }

        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (max-width: 768px) {
          .font-label-caps {
            font-size: 10px;
          }
        }
      `}</style>

      <nav className={`fixed top-0 w-full z-50 border-b backdrop-blur-xl transition-colors duration-500 ${
        isHome
          ? 'border-[#9a6d1f]/20 bg-[#fffaf0]/90'
          : 'border-white/10 bg-[#131312]/90'
      }`}>
        <div className="flex justify-between items-center gap-4 px-5 sm:px-8 py-5 sm:py-6 max-w-[1920px] mx-auto">
          {/* Logo */}
          <Link 
            to="/" 
            className={`text-[15px] sm:text-2xl leading-relaxed font-light tracking-[0.12em] sm:tracking-[0.35em] transition-all duration-500 ${
              isHome
                ? 'text-[#24452f] hover:text-[#9a6d1f]'
                : 'text-[#f0bf5c] drop-shadow-[0_0_8px_rgba(240,191,92,0.4)] hover:drop-shadow-[0_0_15px_rgba(240,191,92,0.6)]'
            }`}
            style={{ fontFamily: "'Noto Serif', serif" }}
          >
            Dr. Dadhe's Ayur & Nature Cure
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex gap-10 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`font-label-caps text-xs tracking-[0.2em] uppercase transition-all duration-500 hover:tracking-widest ${
                  location.pathname === link.path
                    ? `${isHome ? 'text-[#8a6117]' : 'text-[#f0bf5c]'} font-semibold border-b border-[#b38228] pb-1`
                    : isHome
                      ? 'text-[#24452f]/75 hover:text-[#8a6117]'
                      : 'text-white/70 hover:text-[#f0bf5c]'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden transition-colors ${
              isHome
                ? 'text-[#24452f] hover:text-[#8a6117]'
                : 'text-white/70 hover:text-[#f0bf5c]'
            }`}
            aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
          >
            <span className="material-symbols-outlined">
              {isMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div id="mobile-navigation" className={`md:hidden mobile-menu backdrop-blur-xl border-t ${
            isHome
              ? 'bg-[#fffaf0]/95 border-[#9a6d1f]/15'
              : 'bg-[#131312]/95 border-white/5'
          }`}>
            <div className="flex flex-col px-8 py-6 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`font-label-caps text-sm tracking-[0.2em] uppercase transition-all duration-300 py-2 ${
                    location.pathname === link.path
                      ? `${isHome ? 'text-[#8a6117]' : 'text-[#f0bf5c]'} font-semibold`
                      : isHome
                        ? 'text-[#24452f]/75 hover:text-[#8a6117]'
                        : 'text-white/70 hover:text-[#f0bf5c]'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
