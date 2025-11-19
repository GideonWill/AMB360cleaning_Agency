import { useEffect, useRef } from 'react';
import Hero from '../components/Hero';
import FeaturedServices from '../components/FeaturedServices';
import StatsSection from '../components/StatsSection';
import WhyChooseUs from '../components/WhyChooseUs';
import ProcessSection from '../components/ProcessSection';
import Testimonials from '../components/Testimonials';
import CalloutCTA from '../components/CalloutCTA';
import Portfolio, { allVideos } from '../components/Portfolio';
import { Link } from 'react-router-dom';
import showcasePrimary from '../assets/m3.jpg';
import showcaseSecondary from '../assets/m4.jpg';
import fumigationHeroVideo from '../assets/AMB videos/fumigation1.mp4';

const Home = () => {
  const heroVideoRef = useRef(null);
  // Show first 3 videos on homepage
  const homepageVideos = allVideos.slice(0, 3);

  useEffect(() => {
    const videoElement = heroVideoRef.current;
    if (!videoElement) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            videoElement.play().catch(() => {});
          } else {
            videoElement.pause();
          }
        });
      },
      { threshold: 0.4 }
    );

    observer.observe(videoElement);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="space-y-0">
      <Hero />
      <section className="bg-slate-950 text-white py-16 sm:py-20 md:py-24">
        <div className="container-custom flex flex-col gap-12 lg:grid lg:grid-cols-2 lg:items-center lg:gap-14">
          <div className="space-y-6 text-center lg:text-left max-w-2xl mx-auto lg:mx-0">
            <p className="text-sm uppercase tracking-[0.35em] text-primary-200">
              Fumigation Highlight
            </p>
            <h2 className="text-3xl md:text-4xl font-bold">
              Safe Fumigation From the AMB 360 Rapid Response Team
            </h2>
            <p className="text-lg text-white/80">
              Watch how our certified fumigation experts seal, sanitize, and protect homes and
              businesses across Ghana. Every project follows strict safety protocols and eco-friendly
              chemical handling to keep families, staff, and customers safe.
            </p>
            <ul className="space-y-3 text-white/80">
              <li className="flex items-start gap-3 justify-center lg:justify-start">
                <span className="mt-1 block h-2 w-2 rounded-full bg-primary-400" aria-hidden="true"></span>
                <span>WHO-approved chemicals and full PPE compliance.</span>
              </li>
              <li className="flex items-start gap-3 justify-center lg:justify-start">
                <span className="mt-1 block h-2 w-2 rounded-full bg-primary-400" aria-hidden="true"></span>
                <span>24-hour re-entry guidance to keep your spaces protected.</span>
              </li>
              <li className="flex items-start gap-3 justify-center lg:justify-start">
                <span className="mt-1 block h-2 w-2 rounded-full bg-primary-400" aria-hidden="true"></span>
                <span>Custom plans for residences, estates, offices, and healthcare centers.</span>
              </li>
            </ul>
          </div>
          <div className="relative w-full max-w-3xl mx-auto lg:mx-0">
            <div className="rounded-[24px] sm:rounded-[32px] overflow-hidden shadow-2xl ring-1 ring-white/20 w-full aspect-video min-h-[220px] sm:min-h-[260px]">
              <video
                ref={heroVideoRef}
                src={fumigationHeroVideo}
                muted
                loop
                playsInline
                preload="metadata"
                className="w-full h-full object-cover"
                aria-label="AMB 360 fumigation team in action"
              />
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/50 to-transparent" />
            </div>
          </div>
        </div>
      </section>
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-blue-600 mb-4">
                What AMB 360 Cleaning Looks Like In Action
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                From sparkling kitchens to polished floors, our team handles every detail with care.
                Here&apos;s a glimpse at how we transform homes and commercial spaces across Accra.
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-primary-600 font-semibold mt-0.5">&bull;</span>
                  <span>On-site teams equipped with professional tools and eco-friendly solutions.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary-600 font-semibold mt-0.5">&bull;</span>
                  <span>Detail-oriented cleaning for kitchens, living spaces, and post-construction projects.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary-600 font-semibold mt-0.5">&bull;</span>
                  <span>Consistent, high-quality results delivered by trained AMB 360 professionals.</span>
                </li>
              </ul>
            </div>
            <div className="relative">
              <div className="sm:hidden grid gap-4">
                <img
                  src={showcasePrimary}
                  alt="AMB 360 Cleaning team detailing a modern kitchen"
                  className="w-full h-full rounded-3xl object-cover shadow-xl"
                  loading="lazy"
                />
                <img
                  src={showcaseSecondary}
                  alt="AMB 360 Cleaning team polishing a living room floor"
                  className="w-full h-full rounded-3xl object-cover shadow-xl"
                  loading="lazy"
                />
              </div>
              <div className="hidden sm:block relative pb-16 md:pb-24">
                <div className="rounded-[36px] overflow-hidden shadow-2xl ring-1 ring-black/10">
                  <img
                    src={showcasePrimary}
                    alt="AMB 360 Cleaning team detailing a modern kitchen"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="absolute -bottom-12 right-6 md:right-12 w-2/3 md:w-[55%]">
                  <div className="rounded-3xl overflow-hidden shadow-xl ring-1 ring-black/10">
                    <img
                      src={showcaseSecondary}
                      alt="AMB 360 Cleaning team polishing a living room floor"
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>
                <span className="absolute -top-8 -left-8 w-28 h-28 md:w-32 md:h-32 rounded-full bg-primary-500/10 blur-0" aria-hidden="true" />
                <span
                  className="absolute top-6 left-6 w-20 h-20 md:w-24 md:h-24 rounded-full bg-white shadow-lg flex items-center justify-center text-primary-600 font-semibold text-[10px] md:text-xs tracking-[0.2em]"
                  aria-hidden="true"
                >
                  AMB&nbsp;360
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
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



