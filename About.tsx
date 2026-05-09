import { motion } from 'motion/react';

export default function About() {
  return (
    <section className="py-24 bg-[#1E3329]" id="kisah-kami">
      <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-caramel-500 uppercase tracking-[0.3em] text-xs font-bold mb-4 block">Kisah Kami</span>
          <h2 className="text-5xl md:text-6xl font-serif text-cream-50 mb-10 leading-[0.95]">
            Cerita di Balik <br/><span className="italic font-light">Ajuy Coffee.</span>
          </h2>
          <div className="space-y-6 text-cream-50/70 text-lg leading-relaxed mx-auto">
            <p>
              Bagi kami, kopi bukan sekadar minuman penghilang kantuk. Ia adalah media untuk bercerita, menyatukan rasa, dan memberikan ketenangan di sela-sela rutinitas yang padat.
            </p>
            <p>
              Melalui Ajuy Coffee, kami ingin menghadirkan ruang yang merangkul kesederhanaan. Setiap cangkir yang kami seduh adalah bentuk apresiasi terhadap proses—dari biji hingga menjadi cerita di meja Anda.
            </p>
            <div className="mt-12 pt-10 border-t border-cream-50/10">
              <p className="font-serif text-cream-50 text-2xl md:text-3xl italic leading-snug">
                "Kopi yang baik selalu berawal dari niat yang tulus."
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
