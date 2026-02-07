
import { Home, Building2, CalendarCheck, Briefcase, KeyRound, BedDouble, Factory, GraduationCap, Hammer, ShieldAlert } from 'lucide-react';
import servicesHero from '../assets/Estate Cleaning.jpg';

const services = [
  {
    id: 1,
    title: "Residential Cleaning & Fumigation",
    description: "Our residential cleaning and fumigation services eliminate pests, bacteria, and allergens from homes, ensuring a clean, safe, and comfortable living environment.",
    icon: Home,
    color: "from-primary-500 to-primary-600"
  },
  {
    id: 2,
    title: "Estate Cleaning",
    description: "Comprehensive cleaning services for residential estates and communities.",
    icon: Building2,
    color: "from-blue-500 to-blue-600"
  },
  {
    id: 3,
    title: "Events Cleaning",
    description: "Post-event cleanup services to restore venues to pristine condition.",
    icon: CalendarCheck,
    color: "from-purple-500 to-purple-600"
  },
  {
    id: 4,
    title: "Commercial & Office Cleaning",
    description: "amb360cleaningagency provides professional cleaning and fumigation services for offices, shops, warehouses, and commercial facilities across Accra.",
    icon: Briefcase,
    color: "from-secondary-500 to-secondary-600"
  },
  {
    id: 5,
    title: "Move-in and Move-out Cleaning",
    description: "Thorough cleaning services for properties before moving in or after moving out.",
    icon: KeyRound,
    color: "from-amber-500 to-amber-600"
  },
  {
    id: 6,
    title: "Hotel Cleaning",
    description: "Specialized cleaning services for hotels and hospitality establishments.",
    icon: BedDouble,
    color: "from-teal-500 to-teal-600"
  },
  {
    id: 7,
    title: "Disinfection & Sanitization",
    description: "Our disinfecting and sanitization services help reduce the spread of germs and viruses in homes, offices, and high-traffic environments.",
    icon: Factory,
    color: "from-slate-600 to-slate-700"
  },
  {
    id: 8,
    title: "Back to School Cleaning",
    description: "Deep cleaning services to prepare schools and educational facilities.",
    icon: GraduationCap,
    color: "from-green-500 to-green-600"
  },
  {
    id: 9,
    title: "Post Construction Cleaning",
    description: "Comprehensive cleanup after construction projects to remove debris and dust.",
    icon: Hammer,
    color: "from-orange-500 to-orange-600"
  },
  {
    id: 10,
    title: "Pest Control & Fumigation",
    description: "We offer effective pest control and fumigation services to eliminate cockroaches, rodents, termites, mosquitoes, and other pests using approved treatment methods.",
    icon: ShieldAlert,
    color: "from-red-500 to-red-600"
  }
];

const Services = () => {

  return (
    <section id="services" className="section-padding bg-gradient-to-b from-white to-gray-50">
      <div className="container-custom">
        <div className="mb-16">
          <div className="relative h-72 md:h-96 rounded-3xl overflow-hidden shadow-2xl">
            <img
              src={servicesHero}
              alt="AMB 360 Cleaning team providing floor care services"
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black/30" />
            <div className="absolute inset-0 flex flex-col justify-end p-8 text-white">
              <p className="text-sm uppercase tracking-[0.3em] mb-2 text-primary-200">AMB 360 Cleaning Agency</p>
              <h2 className="text-3xl md:text-4xl font-bold">
                Comprehensive Cleaning Services Tailored to Your Space
              </h2>
            </div>
          </div>
        </div>

        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-600 mb-4">
            Our Cleaning and Fumigation Services
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-2">
            Professional cleaning and fumigation services in Accra
          </p>
          <div className="w-24 h-1 bg-primary-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 group border border-gray-100 hover:shadow-2xl hover:-translate-y-1"
              >
                <div className={`relative h-48 flex items-center justify-center bg-gradient-to-br ${service.color} overflow-hidden`}>
                  <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top,white,transparent_60%)]" />
                  <div className="relative flex flex-col items-center gap-3 text-white">
                    <div className="w-20 h-20 rounded-2xl bg-white/15 backdrop-blur flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-300">
                      <Icon className="w-10 h-10" />
                    </div>
                    <span className="text-xs uppercase tracking-[0.35em] text-white/80">
                      AMB 360
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-blue-600 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600">
                    {service.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;

