import { useState } from 'react';
import { Shield, Leaf, Clock, Users, Award, Headphones } from 'lucide-react';

const WhyChooseUs = () => {
  const [activeCard, setActiveCard] = useState(0);

  const features = [
    {
      icon: Shield,
      title: "Background Checked",
      description: "All our cleaning professionals undergo thorough background checks and are fully insured for your peace of mind.",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Leaf,
      title: "Eco-Friendly Products",
      description: "We use environmentally safe cleaning products that are effective yet gentle on your family and pets.",
      color: "from-green-500 to-green-600"
    },
    {
      icon: Clock,
      title: "Flexible Scheduling",
      description: "Book cleaning services that fit your schedule. Available 24/7 to accommodate your needs.",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Users,
      title: "Trained Professionals",
      description: "Our team receives ongoing training to ensure the highest standards of cleaning excellence.",
      color: "from-primary-500 to-primary-600"
    },
    {
      icon: Award,
      title: "Satisfaction Guaranteed",
      description: "Not happy with the results? We'll come back and fix it at no extra charge. Your satisfaction is our priority.",
      color: "from-yellow-500 to-yellow-600"
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      description: "Our customer support team is always available to answer your questions and assist with bookings.",
      color: "from-pink-500 to-pink-600"
    }
  ];

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-600 mb-4">
            Why Choose AMB 360?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-2">
            We're committed to delivering exceptional cleaning services
          </p>
          <div className="w-24 h-1 bg-primary-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const isActive = activeCard === index;
            
            return (
              <div
                key={index}
                className={`group relative bg-white rounded-2xl p-6 cursor-pointer transition-all duration-300 ${
                  isActive 
                    ? 'shadow-2xl scale-105 border-2 border-primary-500' 
                    : 'shadow-lg hover:shadow-xl hover:-translate-y-1 border border-gray-100'
                }`}
                onMouseEnter={() => setActiveCard(index)}
                onClick={() => setActiveCard(index)}
              >
                {/* Gradient background on hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}
                />

                {/* Icon */}
                <div className="relative mb-4">
                  <div
                    className={`w-16 h-16 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center transform transition-all duration-300 ${
                      isActive ? 'scale-110 rotate-6' : 'group-hover:scale-105 group-hover:rotate-3'
                    }`}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="relative">
                  <h3 className="text-xl font-bold text-blue-600 mb-3">
                    {feature.title}
                  </h3>
                  <p className={`text-gray-600 transition-all duration-300 ${
                    isActive ? 'text-gray-700' : ''
                  }`}>
                    {feature.description}
                  </p>
                </div>

                {/* Active indicator */}
                {isActive && (
                  <div className="absolute top-4 right-4 w-3 h-3 bg-primary-500 rounded-full animate-pulse" />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

