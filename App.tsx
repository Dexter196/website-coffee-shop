import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Menu from './components/Menu';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';

export default function App() {
  return (
    <div className="min-h-screen bg-cream-50 font-sans text-espresso-900 selection:bg-caramel-500 selection:text-cream-50">
      <CustomCursor />
      <Header />
      <main>
        <Hero />
        <About />
        <Menu />
      </main>
      <Footer />
    </div>
  );
}


