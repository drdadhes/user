import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Videos', path: '/videos' }
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

      <nav className="fixed top-0 w-full z-50 border-b border-white/10 bg-[#131312]/90 backdrop-blur-xl">
        <div className="flex justify-between items-center px-8 py-6 max-w-[1920px] mx-auto">
          {/* Logo */}
          <Link 
            to="/" 
            className="text-lg sm:text-2xl font-light tracking-[0.2em] sm:tracking-[0.4em] text-[#f0bf5c] drop-shadow-[0_0_8px_rgba(240,191,92,0.4)] hover:drop-shadow-[0_0_15px_rgba(240,191,92,0.6)] transition-all duration-500"
            style={{ fontFamily: "'Noto Serif', serif" }}
          >
            Dr. Dadhes Ayur & Nature Cure
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex gap-10 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`font-label-caps text-xs tracking-[0.2em] uppercase transition-all duration-500 hover:tracking-widest ${
                  location.pathname === link.path
                    ? 'text-[#f0bf5c] font-semibold border-b border-[#f0bf5c] pb-1'
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
            className="md:hidden text-white/70 hover:text-[#f0bf5c] transition-colors"
          >
            <span className="material-symbols-outlined">
              {isMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden mobile-menu bg-[#131312]/95 backdrop-blur-xl border-t border-white/5">
            <div className="flex flex-col px-8 py-6 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`font-label-caps text-sm tracking-[0.2em] uppercase transition-all duration-300 py-2 ${
                    location.pathname === link.path
                      ? 'text-[#f0bf5c] font-semibold'
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