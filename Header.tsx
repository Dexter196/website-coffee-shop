import { motion } from 'motion/react';
import { Coffee, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        isScrolled
          ? 'bg-cream-50/80 backdrop-blur-md border-espresso-900/5 py-4 shadow-sm'
          : 'bg-cream-50/40 backdrop-blur-md border-espresso-900/5 py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-10 h-10 bg-[#1E3329] rounded-full flex items-center justify-center text-cream-50 font-serif italic text-2xl transition-transform group-hover:scale-110">A</div>
          <span className="font-serif text-3xl tracking-tight font-semibold text-[#1E3329]">
            Ajuy Coffee
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10 text-sm uppercase tracking-widest font-medium">
          {['Beranda', 'Kisah Kami', 'Menu', 'Lokasi'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(' ', '-')}`}
              className="text-espresso-900/60 hover:text-espresso-900 transition-colors"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-espresso-900"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="absolute top-full left-0 right-0 bg-cream-50 border-b border-cream-200 md:hidden flex flex-col p-6 gap-4 shadow-xl"
        >
          {['Beranda', 'Kisah Kami', 'Menu', 'Lokasi'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(' ', '-')}`}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-lg font-serif text-espresso-900 hover:text-caramel-600 transition-colors"
            >
              {item}
            </a>
          ))}
        </motion.div>
      )}
    </motion.header>
  );
}
