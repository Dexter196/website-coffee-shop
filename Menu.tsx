import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import MagneticButton from './MagneticButton';

const categories = ['Semua', 'Espresso', 'Manual Brew', 'Non-Coffee', 'Pastry'];

const products = [
  { id: 1, name: 'Signature Espresso', category: 'Espresso', price: 'Rp 25.000', image: 'https://images.unsplash.com/photo-1510591509098-f4fdc6d0c24d?auto=format&fit=crop&q=80&w=1200' },
  { id: 2, name: 'Caramel Macchiato', category: 'Espresso', price: 'Rp 35.000', image: 'https://images.unsplash.com/photo-1485808191679-5f86510681a2?auto=format&fit=crop&q=80&w=1200' },
  { id: 3, name: 'Iced Matcha Latte', category: 'Non-Coffee', price: 'Rp 35.000', image: 'https://images.unsplash.com/photo-1536256263959-770b48d82b0a?auto=format&fit=crop&q=80&w=1200' },
  { id: 4, name: 'Butter Croissant', category: 'Pastry', price: 'Rp 20.000', image: 'https://images.unsplash.com/photo-1549903072-7e6e0fb26faf?auto=format&fit=crop&q=80&w=1200' },
  { id: 5, name: 'V60 Pour Over', category: 'Manual Brew', price: 'Rp 32.000', image: 'https://images.unsplash.com/photo-1544243614-7fb7e671de84?auto=format&fit=crop&q=80&w=1200' },
  { id: 6, name: 'Artisan Chocolate', category: 'Non-Coffee', price: 'Rp 30.000', image: 'https://images.unsplash.com/photo-1542990253-0d0f5be5f0ed?auto=format&fit=crop&q=80&w=1200' },
  { id: 7, name: 'Classic Latte', category: 'Espresso', price: 'Rp 30.000', image: 'https://images.unsplash.com/photo-1570968915860-54d5c301fa9f?auto=format&fit=crop&q=80&w=1200' },
  { id: 8, name: 'Kyoto Cold Brew', category: 'Manual Brew', price: 'Rp 35.000', image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&q=80&w=1200' },
  { id: 9, name: 'Pain au Chocolat', category: 'Pastry', price: 'Rp 25.000', image: 'https://images.unsplash.com/photo-1608198093002-ad4e005484ec?auto=format&fit=crop&q=80&w=1200' },
  { id: 10, name: 'Earl Grey Bliss', category: 'Non-Coffee', price: 'Rp 28.000', image: 'https://images.unsplash.com/photo-1597481499750-3e6b22637e12?auto=format&fit=crop&q=80&w=1200' },
  { id: 11, name: 'Oat Milk Cappuccino', category: 'Espresso', price: 'Rp 38.000', image: 'https://images.unsplash.com/photo-1534687941688-651ccaafbff8?auto=format&fit=crop&q=80&w=1200' },
  { id: 12, name: 'Almond Denmark', category: 'Pastry', price: 'Rp 28.000', image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=1200' },
];

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState('Semua');
  const [hoveredProduct, setHoveredProduct] = useState<string | null>(null);

  const filteredProducts = products.filter(
    (product) => activeCategory === 'Semua' || product.category === activeCategory
  );

  return (
    <section className="py-24 bg-cream-50 relative" id="menu">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-caramel-500 uppercase tracking-[0.3em] text-xs font-bold block mb-4">Hidangan Kami</span>
          <h2 className="font-serif text-5xl md:text-6xl text-espresso-900 mb-4 leading-[0.95] italic font-light">Pilihan Menu</h2>
          <p className="text-espresso-900/70 max-w-2xl mx-auto text-lg leading-relaxed">
            Disajikan dengan teliti untuk menemani momen istirahat Anda.
          </p>
        </motion.div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((category) => (
            <MagneticButton
              key={category}
              strength={0.3}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full text-xs uppercase tracking-[0.2em] font-medium transition-all duration-500 border ${
                activeCategory === category
                  ? 'border-espresso-900 bg-espresso-900 text-cream-50 shadow-md'
                  : 'border-espresso-900/10 bg-transparent text-espresso-900/60 hover:text-espresso-900 hover:border-espresso-900/30'
              }`}
            >
              {category}
            </MagneticButton>
          ))}
        </div>

        {/* Product Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10 lg:gap-x-24 lg:gap-y-12 max-w-5xl mx-auto">
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
                onMouseEnter={() => setHoveredProduct(product.image)}
                onMouseLeave={() => setHoveredProduct(null)}
                className="group cursor-pointer flex flex-col interactive"
              >
                <div className="flex justify-between items-baseline border-b border-espresso-900/10 pb-3 relative overflow-hidden">
                  <motion.div
                    className="absolute bottom-0 left-0 h-px bg-caramel-500 w-0"
                    whileHover={{ width: '100%' }}
                    transition={{ duration: 0.5, ease: "circOut" }}
                  />
                  <h3 className="font-serif text-xl text-espresso-900 font-medium group-hover:italic transition-transform duration-500 group-hover:translate-x-2">{product.name}</h3>
                  <span className="font-bold text-sm text-caramel-500 tracking-wider whitespace-nowrap ml-4 relative z-10">{product.price}</span>
                </div>
                <p className="text-[11px] text-espresso-900/50 uppercase tracking-widest mt-3 transition-transform duration-500 group-hover:translate-x-2">
                   {product.category}
                </p>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Floating Image Preview on Desktop */}
      <AnimatePresence>
        {hoveredProduct && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ opacity: 0.15, scale: 1, rotate: 0 }}
            exit={{ opacity: 0, scale: 0.8, rotate: 5 }}
            transition={{ duration: 0.5 }}
            className="hidden lg:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 pointer-events-none z-0 rounded-full overflow-hidden blur-[2px]"
          >
            <img src={hoveredProduct} alt="Preview" className="w-full h-full object-cover" />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

