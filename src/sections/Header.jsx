import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

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

  return (
    <header className="fixed top-0 left-0 z-50 flex items-center justify-between w-full px-6 py-4 bg-white shadow-md">
      <h1 className="text-xl font-bold text-themepurple">MyBrand</h1>

      {/* Hamburger Button */}
      <div className="z-50 lg:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="relative flex flex-col items-center justify-center w-10 h-10"
        >
          {/* Top Line */}
          <motion.span
            initial={false}
            animate={{
              y: isOpen ? 0 : -6,
              rotate: 0,
              width: isOpen ? '100%' : '100%',
            }}
            transition={{ duration: 0.3 }}
            className="absolute w-8 h-[3px] bg-black rounded"
          />
          {/* Middle Line */}
          <motion.span
            initial={false}
            animate={{
              opacity: isOpen ? 1 : 1,
              y: 0,
              width: isOpen ? '100%' : '100%',
            }}
            transition={{ duration: 0.3 }}
            className="absolute w-8 h-[3px] bg-black rounded"
          />
          {/* Bottom Line */}
          <motion.span
            initial={false}
            animate={{
              y: isOpen ? 0 : 6,
              rotate: 0,
              width: isOpen ? '100%' : '100%',
            }}
            transition={{ duration: 0.3 }}
            className="absolute w-8 h-[3px] bg-black rounded"
          />
        </button>
      </div>

      {/* Desktop Menu */}
      <nav className="hidden gap-6 lg:flex">
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

      {/* Mobile Menu Overlay - Scale from center */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed top-0 left-0 z-40 flex flex-col items-center justify-center w-full h-screen gap-8 origin-center bg-white lg:hidden"
          >
            {navItems.map((item, index) => (
              <motion.button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                initial={{ opacity: 0.5, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 * index }}
                className="text-2xl font-semibold transition-all text-themepurple hover:text-themeyellow"
              >
                {item.name}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
