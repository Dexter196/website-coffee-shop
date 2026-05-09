import { Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#1E3329] text-cream-50 pt-20 pb-12 border-t border-[#16251E]" id="lokasi">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between gap-12 lg:gap-24">
        
        <div className="md:w-1/2 max-w-sm">
          <h4 className="font-serif text-xl border-b border-cream-50/10 pb-2 italic mb-6">Kontak & Lokasi</h4>
          <ul className="space-y-4 text-lg text-cream-50/70 leading-relaxed font-serif italic">
            <li>Jl. Sadang, <br/>Cibiru, Bandung</li>
            <li>hello@ajuycoffee.com</li>
            <li>+62 812 3456 7890</li>
          </ul>
        </div>
        
        <div className="md:w-1/2 max-w-sm md:text-right flex flex-col md:items-end">
          <h4 className="font-serif text-xl border-b border-cream-50/10 pb-2 italic mb-6 w-full">Sosial Media</h4>
          <a href="https://www.instagram.com/stefanus_liri?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noreferrer" className="flex items-center md:flex-row-reverse gap-3 hover:text-caramel-500 transition-colors text-sm font-bold uppercase tracking-widest text-cream-50 mt-2">
            <Instagram className="w-7 h-7 opacity-80" />
            <span>Instagram</span>
          </a>
        </div>
        
      </div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 mt-20 pt-6 border-t border-cream-50/10 flex flex-col md:flex-row items-center justify-between text-[10px] text-cream-50/40 uppercase tracking-[0.2em] gap-4">
        <div>&copy; {new Date().getFullYear()} Ajuy Coffee Co. All Rights Reserved.</div>
        <div className="flex items-center gap-4">
          <span>Scroll for Experience</span>
          <div className="w-px h-8 bg-cream-50/10 hidden md:block"></div>
          <span className="hidden md:inline">Bandung, Indonesia</span>
        </div>
      </div>
    </footer>
  );
}
