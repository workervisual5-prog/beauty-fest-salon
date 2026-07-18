import TopBar from './components/TopBar';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Reviews from './components/Reviews';
import Gallery from './components/Gallery';
import BookAppointment from './components/BookAppointment';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

export default function App() {
  return (
    <div className="min-h-screen bg-bg text-white">
      <TopBar />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Reviews />
        <Gallery />
        <BookAppointment />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
