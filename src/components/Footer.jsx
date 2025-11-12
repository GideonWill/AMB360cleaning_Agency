import { Link } from 'react-router-dom';
import { scrollToTop } from '../utils/scrollToTop';

const Footer = () => {
  const services = [
    "Residential/Domestic Cleaning",
    "Estate Cleaning",
    "Events Cleaning",
    "Office Cleaning",
    "Move-in and Move-out Cleaning",
    "Hotel Cleaning",
    "Commercial Cleaning",
    "Back to School Cleaning",
    "Post Construction Cleaning",
    "Fumigation"
  ];

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-800 text-white section-padding">
      <div className="container-custom">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-blue-600">AMB 360 Cleaning Agency</h3>
            <p className="text-gray-400">
              Professional cleaning services in Accra, Ghana. Trusted, reliable, and thorough.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-blue-600">Services</h4>
            <ul className="space-y-2 text-gray-400">
              {services.slice(0, 5).map((service, index) => (
                <li key={index}>
                  <Link to="/services" className="hover:text-primary-400 transition-colors" onClick={scrollToTop}>
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-blue-600">Info</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link to="/contact" className="hover:text-primary-400 transition-colors" onClick={scrollToTop}>Contact</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-primary-400 transition-colors" onClick={scrollToTop}>About</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-primary-400 transition-colors" onClick={scrollToTop}>Services</Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-blue-600">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="tel:+233535548408" className="hover:text-primary-400 transition-colors">
                  +233 53 554 8408
                </a>
              </li>
              <li>
                <a 
                  href="https://wa.me/233535548408" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-primary-400 transition-colors"
                >
                  WhatsApp: +233 53 554 8408
                </a>
              </li>
              <li className="text-sm">
                Weija Gbawe, Demargo Contractors<br />
                HM8Q+XJR, Gbawe, Accra - Ghana
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} AMB 360 Cleaning Agency. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a
                href="https://instagram.com/amb_360_cleaning_agency"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary-400 transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

