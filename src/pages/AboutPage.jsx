import About from '../components/About';
import Testimonials from '../components/Testimonials';
import homeCleaningImage from '../assets/home cleaning.jpeg';

const AboutPage = () => {
  return (
    <div className="space-y-0">
      {/* Hero Section */}
      <section className="relative w-full overflow-hidden">
        <div className="relative w-full h-[50vh] sm:h-[55vh] md:h-[60vh] lg:h-[65vh] xl:h-[70vh]">
          <img
            src={homeCleaningImage}
            alt="AMB 360 Cleaning Agency team"
            className="absolute inset-0 w-full h-full object-cover"
            style={{ 
              objectPosition: 'center 30%'
            }}
            aria-hidden="true"
          />
          <div className="absolute inset-0 flex items-end">
            <div className="container-custom w-full pb-4 sm:pb-6 md:pb-8 lg:pb-12">
              <div className="max-w-2xl">
                <p className="text-white text-sm sm:text-base md:text-lg lg:text-xl font-medium drop-shadow-lg">
                  Professional cleaning services you can trust
                </p>
              </div>
            </div>
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




