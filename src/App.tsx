import { Analytics } from '@vercel/analytics/react';
import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Schedule from './components/Schedule';
import Services from './components/Services';

function App() {
  return (
    <>
      <Analytics />
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <Schedule />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
