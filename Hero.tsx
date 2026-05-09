import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'motion/react';
import { useRef, useEffect } from 'react';
import MagneticButton from './MagneticButton';

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  const shapeX = useTransform(smoothMouseX, [-1, 1], [-20, 20]);
  const shapeY = useTransform(smoothMouseY, [-1, 1], [-20, 20]);
  const imgScale = useTransform(smoothMouseX, [-1, 1], [1.02, 1.08]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth) * 2 - 1;
      const y = (e.clientY / innerHeight) * 2 - 1;
      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-screen overflow-hidden flex items-center bg-cream-50 pt-20" id="beranda">
      {/* Dynamic Background Shape */}
      <div className="absolute inset-0 w-full h-full z-0">
        <motion.div style={{ x: shapeX, y: shapeY }} className="absolute inset-y-0 right-0 w-full lg:w-5/12 bg-[#1E3329] hidden lg:block rounded-l-[80px]"></motion.div>
        <motion.div style={{ x: shapeX, y: shapeY }} className="absolute top-0 inset-x-0 h-2/3 bg-[#1E3329] block lg:hidden rounded-b-[80px]"></motion.div>
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        
        {/* Text Content */}
        <div className="col-span-1 lg:col-span-6 flex flex-col justify-center space-y-8 order-2 lg:order-1 mt-12 lg:mt-0">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-caramel-500 uppercase tracking-[0.3em] text-xs font-bold block mb-2">
              Est. 2024 • Kopi Spesialti
            </span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 30, rotate: 2 }}
            animate={{ opacity: 1, y: 0, rotate: 0 }}
            transition={{ duration: 1, delay: 0.4, type: "spring", stiffness: 50 }}
            className="text-5xl md:text-7xl font-serif leading-[0.95] text-espresso-900"
          >
            Seni dalam <br />
            <span className="italic font-light">secangkir</span> kopi.
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg leading-relaxed text-espresso-900/70 max-w-sm"
          >
            Menyajikan ruang yang tenang dan kopi dengan cita rasa tinggi. Diramu dengan passion untuk pengalaman ruang yang minimalis dan jujur.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex items-center gap-6"
          >
            <MagneticButton>
              <a
                href="#menu"
                className="group relative px-6 py-3 bg-espresso-900 text-cream-50 text-xs uppercase tracking-widest rounded-full hover:bg-espresso-800 transition-colors shadow-lg overflow-hidden block"
              >
                <span className="relative z-10 transition-transform duration-300 group-hover:block group-hover:-translate-y-full">Lihat Menu</span>
                <span className="absolute inset-0 flex items-center justify-center z-10 translate-y-full transition-transform duration-300 group-hover:translate-y-0 text-caramel-500">Lihat Menu</span>
              </a>
            </MagneticButton>
            <MagneticButton strength={0.2}>
              <a
                href="#kisah-kami"
                className="flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-espresso-900 hover:text-caramel-500 transition-colors group p-2"
              >
                <span className="relative">
                  Kisah Kami
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-caramel-500 transition-all duration-300 group-hover:w-full"></span>
                </span>
              </a>
            </MagneticButton>
          </motion.div>
        </div>

        {/* Visual Area */}
        <div className="col-span-1 lg:col-span-5 lg:col-start-8 relative flex items-center justify-center order-1 lg:order-2 h-[450px] md:h-[550px] mt-8 lg:mt-0">
          <motion.div
            style={{ y, opacity }}
            className="w-full h-full max-w-md bg-cream-50 rounded-t-full border border-[#1E3329]/20 relative overflow-hidden flex items-center justify-center shadow-xl group"
          >
            <div className="absolute bottom-0 left-0 w-full h-3/4 bg-cream-100 transition-colors duration-500 group-hover:bg-cream-200"></div>
            <motion.div style={{ x: shapeX, y: shapeY }} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-80 bg-[#1E3329] rounded-full mix-blend-multiply opacity-20 block transition-opacity duration-500 group-hover:opacity-30"></motion.div>
            
            <motion.img
              style={{ scale: imgScale }}
              src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&q=80&w=1000"
              alt="Coffee shop ambiance"
              className="relative z-10 object-cover w-[85%] h-[85%] rounded-t-full rounded-b-[4px] shadow-2xl transition-transform duration-1000 origin-bottom"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
