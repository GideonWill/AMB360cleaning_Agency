import About from '../components/About';
import Testimonials from '../components/Testimonials';
import homeCleaningImage from '../assets/home cleaning.jpeg';
import SEO from '../components/SEO';

const AboutPage = () => {
  return (
    <div className="space-y-0">
      <SEO
        title="About amb360cleaningagency | Professional Cleaning & Fumigation Experts"
        description="Learn more about amb360cleaningagency, a trusted cleaning and fumigation company in Accra delivering safe and effective pest control solutions."
      />
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
              <div className="max-w-3xl bg-black/50 backdrop-blur-sm p-6 rounded-2xl">
                <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">
                  About amb360cleaningagency
                </h1>
                <p className="text-white text-base sm:text-lg md:text-xl font-medium drop-shadow-lg leading-relaxed">
                  amb360cleaningagency is a professional cleaning and fumigation company based in Accra, Ghana.
                  We specialize in residential and commercial cleaning, fumigation, pest control, and sanitization services.
                  Our mission is to create healthy, hygienic, and pest-free environments using safe and environmentally responsible methods.
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




