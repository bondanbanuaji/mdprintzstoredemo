import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { name: 'Beranda', id: 'hero' },
    { name: 'Kategori', id: 'category' },
    { name: 'Layanan', id: 'services' },
    { name: 'Promo', id: 'promo' },
    { name: 'Produk', id: 'products' },
    { name: 'Ulasan', id: 'reviews' },
    { name: 'Instagram', id: 'insta' },
  ];

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

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
      {/* Gambar logo sebagai pengganti <h1> */}
      <a href="#hero">
        <img
          src="/logo.png"
          alt="MD Printz Logo"
          className="object-contain h-[3.5rem] auto w-"
        />
      </a>

      {/* Tombol hamburger */}
      <div className="z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="relative flex flex-col items-center justify-center w-10 h-10"
        >
          <motion.span
            initial={false}
            animate={{
              y: isOpen ? 0 : -6,
              rotate: isOpen ? 45 : 0,
            }}
            transition={{ duration: 0.3 }}
            className="absolute w-8 h-[3px] bg-black rounded origin-center"
          />
          <motion.span
            initial={false}
            animate={{
              x: isOpen ? 10 : 0,
              opacity: isOpen ? 0 : 1,
            }}
            transition={{ duration: 0.3 }}
            className="absolute w-8 h-[3px] bg-black rounded"
          />
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

      {/* Navigasi desktop (disembunyikan) */}
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

      {/* Overlay menu mobile */}
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
