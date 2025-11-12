import { CheckCircle2, Phone, Calendar, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { scrollToTop } from '../utils/scrollToTop';

const ProcessSection = () => {
  const steps = [
    {
      number: '01',
      icon: Phone,
      title: 'Book Your Service',
      description: 'Call us or book online in under 60 seconds. Choose your preferred date and time.',
      color: 'from-primary-500 to-primary-600'
    },
    {
      number: '02',
      icon: Calendar,
      title: 'We Confirm',
      description: 'We\'ll confirm your booking and send you a reminder before your scheduled cleaning.',
      color: 'from-secondary-500 to-secondary-600'
    },
    {
      number: '03',
      icon: Sparkles,
      title: 'We Clean',
      description: 'Our professional team arrives on time with all equipment and eco-friendly supplies.',
      color: 'from-primary-400 to-primary-500'
    },
    {
      number: '04',
      icon: CheckCircle2,
      title: 'You Enjoy',
      description: 'Relax and enjoy your sparkling clean space. We guarantee your satisfaction!',
      color: 'from-green-500 to-green-600'
    }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-600 mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-2">
            Getting a professional clean is simple and hassle-free
          </p>
          <div className="w-24 h-1 bg-primary-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connecting line for desktop */}
          <div className="hidden lg:block absolute top-20 left-0 right-0 h-0.5 bg-gradient-to-r from-primary-200 via-primary-300 to-primary-200" />
          
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative">
                {/* Step card */}
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center group">
                  {/* Step number */}
                  <div className="relative mb-6">
                    <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-20 rounded-full blur-xl group-hover:opacity-30 transition-opacity duration-300`} />
                    <div className={`relative w-20 h-20 mx-auto bg-gradient-to-br ${step.color} rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-10 h-10 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md">
                      <span className="text-xs font-bold text-gray-600">{step.number}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-blue-600 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {step.description}
                  </p>
                </div>

                {/* Arrow connector for mobile/tablet */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <div className="w-8 h-0.5 bg-primary-300" />
                    <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-8 border-l-primary-300 border-t-4 border-t-transparent border-b-4 border-b-transparent" />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Link to="/contact" className="btn-primary inline-flex items-center gap-2" onClick={scrollToTop}>
            Get Started Today
            <CheckCircle2 className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;

