import About from '../components/About';
import Testimonials from '../components/Testimonials';
import homeCleaningImage from '../assets/home cleaning.jpeg';

const AboutPage = () => {
  return (
    <div className="space-y-0">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] overflow-hidden flex items-end">
        <img
          src={homeCleaningImage}
          alt="AMB 360 Cleaning Agency team"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ objectPosition: 'center 30%' }}
          aria-hidden="true"
        />
        <div className="container-custom relative z-10 pb-8 md:pb-12">
          <div className="max-w-2xl">
            <p className="text-white text-lg md:text-xl font-medium drop-shadow-lg">
              Professional cleaning services you can trust
            </p>
          </div>
        </div>
      </section>
      
      <div className="space-y-16">
        <About />
        <Testimonials />
      </div>
    </div>
  );
};

export default AboutPage;




