import { CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { scrollToTop } from '../utils/scrollToTop';
import heroBg from '../assets/m2.jpg';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center">
      {/* Background image */}
      <div
        className="absolute inset-0 -z-10 bg-center"
        style={{ backgroundImage: `url(${heroBg})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}
        aria-hidden="true"
      />
      {/* Overlay removed to show background image at 100% opacity */}
      <div className="absolute inset-0 -z-10" style={{ backgroundColor: 'rgba(255,255,255,0)' }} />

      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left bg-white/60 backdrop-blur-sm rounded-xl p-4 md:p-6 shadow-sm">
            <h1 className="text-5xl md:text-7xl font-bold text-blue-600 mb-6">
              We Clean
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8">
              Professional cleaning services in Accra, Ghana. Trusted, reliable, and thorough.
            </p>
            <ul className="text-left inline-grid gap-2.5 text-gray-700 mb-6 text-sm md:text-base">
              <li className="flex items-center gap-2.5"><CheckCircle2 className="w-4 h-4 text-primary-600" /> Background checked professionals</li>
              <li className="flex items-center gap-2.5"><CheckCircle2 className="w-4 h-4 text-primary-600" /> Eco-friendly cleaning products</li>
              <li className="flex items-center gap-2.5"><CheckCircle2 className="w-4 h-4 text-primary-600" /> Book in under 60 seconds</li>
            </ul>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link to="/contact" className="btn-primary text-center" onClick={scrollToTop}>
                Book Now
              </Link>
              <Link to="/services" className="btn-primary text-center" onClick={scrollToTop}>
                Our Services
              </Link>
            </div>
            <div className="mt-6 flex flex-col sm:flex-row items-center gap-4 text-xs md:text-sm text-gray-600">
              <div className="flex items-center gap-2.5">
                <img src="https://images.unsplash.com/photo-1556911220-bff31c812dba?w=120&h=80&fit=crop&q=60" alt="clients" className="w-16 h-10 rounded object-cover" />
                <div>
                  <div className="font-semibold text-gray-900">Trusted by 200+ clients</div>
                  <div>Across Accra & surrounding areas</div>
                </div>
              </div>
              <div className="hidden sm:block w-px h-8 bg-gray-200" />
              <div className="flex items-center gap-1.5">
                <span className="text-yellow-400">★★★★★</span>
                <span>4.7 average rating</span>
              </div>
            </div>
          </div>
          
          <div className="relative" aria-hidden="true"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

