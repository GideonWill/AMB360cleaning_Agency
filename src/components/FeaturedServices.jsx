import { useState } from 'react';
import { Link } from 'react-router-dom';
import { scrollToTop } from '../utils/scrollToTop';
import { ArrowRight, Sparkles, Building2, Home, Calendar } from 'lucide-react';

const FeaturedServices = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const services = [
    {
      id: 1,
      title: "Residential Cleaning",
      description: "Regular home cleaning services to keep your living space spotless and healthy.",
      icon: Home,
      color: "from-primary-500 to-primary-600",
      link: "/services"
    },
    {
      id: 2,
      title: "Commercial Cleaning",
      description: "Professional office cleaning to maintain a clean and productive workspace.",
      icon: Building2,
      color: "from-secondary-500 to-secondary-600",
      link: "/services"
    },
    {
      id: 3,
      title: "Event Cleaning",
      description: "Post-event cleanup services to restore venues to pristine condition.",
      icon: Calendar,
      color: "from-primary-400 to-primary-500",
      link: "/services"
    },
    {
      id: 4,
      title: "Deep Cleaning",
      description: "Comprehensive deep cleaning services for move-in/out and special occasions.",
      icon: Sparkles,
      color: "from-secondary-400 to-secondary-500",
      link: "/services"
    }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-600 mb-4">
            Our Featured Services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-2">
            Professional cleaning solutions tailored to your needs
          </p>
          <div className="w-24 h-1 bg-primary-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Link
                key={service.id}
                to={service.link}
                className="group relative bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={scrollToTop}
              >
                {/* Animated background gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                />
                
                {/* Icon */}
                <div className="relative mb-4">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="relative">
                  <h3 className="text-xl font-bold text-blue-600 mb-2 group-hover:text-white transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 group-hover:text-white/90 transition-colors duration-300">
                    {service.description}
                  </p>
                  <div className="flex items-center text-primary-600 font-semibold group-hover:text-white transition-colors duration-300">
                    Learn more
                    <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-2 transition-transform duration-300" />
                  </div>
                </div>

                {/* Decorative element */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500" />
              </Link>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Link to="/services" className="btn-primary inline-flex items-center gap-2" onClick={scrollToTop}>
            View All Services
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedServices;

