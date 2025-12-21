import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, ShoppingCart } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '/', isPage: true },
    { name: 'Menu', href: '/menu', isPage: true },
    { name: 'Contact', href: '#contact', isPage: false },
    {
      name: 'Orders',
      href: 'https://9onecafeorders.vercel.app',
      isPage: false,
      isExternal: true,
      isCTA: true
    }
  ];

  const handleScrollTo = (e, href) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const targetElement = document.querySelector(href);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
      setIsMobileMenuOpen(false);
    }
  };

  const linkBase =
    isScrolled || !isHomePage
      ? 'text-gray-700 hover:text-green-600'
      : 'text-white hover:text-green-200';

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || !isHomePage
          ? 'bg-white/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3">
            <motion.div whileHover={{ scale: 1.05 }}>
              <img
                src="https://horizons-cdn.hostinger.com/587f7367-974c-4b76-a36a-4340892fd783/chatgpt-image-oct-4-2025-05_45_20-am-4S7bU.png"
                alt="9ONE Café Logo"
                className="h-12 w-auto"
              />
            </motion.div>
          </Link>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map(item => (
              <motion.div key={item.name} whileHover={{ scale: 1.05 }}>
                {item.isPage ? (
                  <Link to={item.href} className={`font-medium transition-colors ${linkBase}`}>
                    {item.name}
                  </Link>
                ) : item.isExternal ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-2 font-semibold px-4 py-2 rounded-full
                      bg-yellow-400 text-black hover:bg-yellow-500 transition-all shadow`}
                  >
                    <ShoppingCart size={16} />
                    {item.name}
                  </a>
                ) : (
                  <a
                    href={item.href}
                    onClick={e => handleScrollTo(e, item.href)}
                    className={`font-medium transition-colors ${linkBase}`}
                  >
                    {item.name}
                  </a>
                )}
              </motion.div>
            ))}
          </div>

          {/* MOBILE TOGGLE */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 ${isScrolled || !isHomePage ? 'text-gray-700' : 'text-white'}`}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* MOBILE MENU */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden mt-4 bg-white rounded-lg shadow-lg p-4"
          >
            {navItems.map(item =>
              item.isPage ? (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block py-2 text-gray-700 hover:text-green-600 transition-colors"
                >
                  {item.name}
                </Link>
              ) : item.isExternal ? (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="mt-2 flex items-center justify-center gap-2
                    bg-yellow-400 text-black font-bold py-3 rounded-full shadow hover:bg-yellow-500 transition"
                >
                  <ShoppingCart size={18} />
                  {item.name}
                </a>
              ) : (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={e => handleScrollTo(e, item.href)}
                  className="block py-2 text-gray-700 hover:text-green-600 transition-colors"
                >
                  {item.name}
                </a>
              )
            )}
          </motion.div>
        )}
      </nav>
    </motion.header>
  );
};

export default Header;
