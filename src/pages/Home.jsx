import Hero from '../components/Hero';
import FeaturedServices from '../components/FeaturedServices';
import StatsSection from '../components/StatsSection';
import WhyChooseUs from '../components/WhyChooseUs';
import ProcessSection from '../components/ProcessSection';
import Testimonials from '../components/Testimonials';
import CalloutCTA from '../components/CalloutCTA';
import Portfolio, { allVideos } from '../components/Portfolio';
import { Link } from 'react-router-dom';

const Home = () => {
  // Show first 3 videos on homepage
  const homepageVideos = allVideos.slice(0, 3);

  return (
    <div className="space-y-0">
      <Hero />
      <FeaturedServices />
      <StatsSection />
      <WhyChooseUs />
      <ProcessSection />
      <Portfolio videos={homepageVideos} showTitle={true} />
      <div className="bg-primary-50 py-8">
        <div className="container-custom text-center">
          <Link
            to="/portfolio"
            className="inline-block px-8 py-3 bg-primary-600 text-white font-semibold rounded-full hover:bg-primary-700 transition-colors shadow-lg hover:shadow-xl"
          >
            View All Portfolio Videos →
          </Link>
        </div>
      </div>
      <Testimonials />
      <CalloutCTA />
    </div>
  );
};

export default Home;



