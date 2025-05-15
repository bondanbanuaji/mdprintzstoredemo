import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { name: 'Hero', id: 'hero' },
    { name: 'Category', id: 'category' },
    { name: 'Services', id: 'services' },
    { name: 'Types', id: 'types' },
    { name: 'Products', id: 'products' },
    { name: 'Reviews', id: 'reviews' },
    { name: 'Insta', id: 'insta' },
  ];

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  // Handle scroll position and change header background
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true); // Change header style after 50px scroll
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Lock scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    // Cleanup if component unmounts
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <header
      className={`fixed top-0 left-0 z-50 flex items-center justify-between w-full px-6 py-4 transition-all duration-300 ${
        scrolled ? 'bg-white bg-opacity-100' : 'bg-opacity-100 bg-white'
      } shadow-md`}
    >
      <h1 className="text-xl font-bold text-themepurple">MD Printz</h1>

      {/* Hamburger Button - always visible */}
      <div className="z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="relative flex flex-col items-center justify-center w-10 h-10"
        >
          {/* Top Line */}
          <motion.span
            initial={false}
            animate={{
              y: isOpen ? 0 : -6,
              rotate: isOpen ? 45 : 0,
            }}
            transition={{ duration: 0.3 }}
            className="absolute w-8 h-[3px] bg-black rounded origin-center"
          />
          {/* Middle Line */}
          <motion.span
            initial={false}
            animate={{
              x: isOpen ? 10 : 0,
              opacity: isOpen ? 0 : 1,
            }}
            transition={{ duration: 0.3 }}
            className="absolute w-8 h-[3px] bg-black rounded"
          />
          {/* Bottom Line */}
          <motion.span
            initial={false}
            animate={{
              y: isOpen ? 0 : 6,
              rotate: isOpen ? -45 : 0,
            }}
            transition={{ duration: 0.3 }}
            className="absolute w-8 h-[3px] bg-black rounded origin-center"
          />
        </button>
      </div>

      {/* Hidden desktop nav */}
      <nav className="hidden">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollTo(item.id)}
            className="font-medium text-black transition-all hover:text-themepurple"
          >
            {item.name}
          </button>
        ))}
      </nav>

      {/* Mobile Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed top-0 left-0 z-40 flex flex-col items-center justify-center w-full h-screen gap-8 bg-white"
          >
            {navItems.map((item, index) => (
              <motion.button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.05 * index }}
                className="relative text-2xl font-semibold text-themepurple group"
              >
                {item.name}
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-themepurple transition-all duration-300 group-hover:w-full"></span>
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
