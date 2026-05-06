import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Videos', path: '/videos' }
  ];

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

        @media (max-width: 768px) {
          .font-label-caps {
            font-size: 10px;
          }
        }
      `}</style>

      <nav className="fixed top-0 w-full z-50 border-b border-white/10 bg-transparent backdrop-blur-xl">
        <div className="flex justify-between items-center px-8 py-6 max-w-[1920px] mx-auto">
          {/* Logo */}
          <Link 
            to="/" 
            className="text-2xl font-light tracking-[0.4em] text-[#f0bf5c] drop-shadow-[0_0_8px_rgba(240,191,92,0.4)] hover:drop-shadow-[0_0_15px_rgba(240,191,92,0.6)] transition-all duration-500"
            style={{ fontFamily: "'Noto Serif', serif" }}
          >
            Dr. Dadhes Ayur & Nature Cure
          </Link>

          {/* Navigation Links */}
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

          {/* Mobile Menu Button (optional) */}
          <button className="md:hidden text-white/70 hover:text-[#f0bf5c] transition-colors">
            <span className="material-symbols-outlined">menu</span>
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;