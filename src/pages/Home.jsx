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
import showcasePrimary from '../assets/deep cleaning.jpg';
import showcaseSecondary from '../assets/residential cleaning.jpg';
import SEO from '../components/SEO';
import fumigationHeroVideo from '../assets/AMB videos/fumigation1.mp4';
import newProjectVideo from '../assets/AMB videos/v21.mp4';

const Home = () => {
  const heroVideoRef = useRef(null);
  const newProjectVideoRef = useRef(null);
  // Show first 3 videos on homepage
  const homepageVideos = allVideos.slice(0, 3);

  useEffect(() => {
    const videoElement = heroVideoRef.current;
    if (!videoElement) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.play().catch(() => { });
          } else {
            entry.target.pause();
          }
        });
      },
      { threshold: 0.4 }
    );

    if (videoElement) observer.observe(videoElement);
    if (newProjectVideoRef.current) observer.observe(newProjectVideoRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="space-y-0">
      <SEO
        title="Professional Cleaning & Fumigation Services in Accra | amb360cleaningagency"
        description="amb360cleaningagency offers professional cleaning and fumigation services in Accra. Safe, reliable pest control for homes, offices, and businesses."
      />
      <Hero />

      {/* New Completed Project Section */}
      <section className="bg-white py-16 sm:py-20 md:py-24">
        <div className="container-custom flex flex-col-reverse gap-12 lg:grid lg:grid-cols-2 lg:items-center lg:gap-14">
          <div className="relative w-full max-w-3xl mx-auto lg:mx-0">
            <div className="rounded-[24px] sm:rounded-[32px] overflow-hidden shadow-2xl ring-1 ring-black/10 w-full aspect-video min-h-[220px] sm:min-h-[260px]">
              <video
                ref={newProjectVideoRef}
                src={newProjectVideo}
                muted
                loop
                playsInline
                preload="metadata"
                className="w-full h-full object-cover"
                aria-label="New Completed Project Video"
              />
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/30 to-transparent" />
            </div>
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-primary-600/10 rounded-full blur-2xl -z-10" />
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-blue-600/10 rounded-full blur-3xl -z-10" />
          </div>

          <div className="space-y-6 text-center lg:text-left max-w-2xl mx-auto lg:mx-0">
            <div className="inline-block px-4 py-1.5 bg-primary-50 text-primary-700 rounded-full text-xs font-bold uppercase tracking-wider mb-2">
              Recent Achievement
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 leading-tight">
              New <span className="text-primary-600">Completed</span> Project
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              We recently completed a comprehensive deep cleaning and fumigation project that transformed this space.
              Our team's attention to detail ensures every corner is sanitized, refreshed, and perfectly prepared
              for immediate use.
            </p>
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start pt-2">
              <div className="flex items-center gap-2 text-slate-700 font-medium">
                <span className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center text-white text-[10px]">✓</span>
                Deep Cleaned
              </div>
              <div className="flex items-center gap-2 text-slate-700 font-medium">
                <span className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center text-white text-[10px]">✓</span>
                Fully Sanitized
              </div>
              <div className="flex items-center gap-2 text-slate-700 font-medium">
                <span className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center text-white text-[10px]">✓</span>
                Safety Certified
              </div>
            </div>
          </div>
        </div>
      </section>
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



