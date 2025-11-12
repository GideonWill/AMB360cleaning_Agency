
const services = [
    {
      id: 1,
      title: "Residential/Domestic Cleaning",
      description: "Regular home cleaning services to keep your living space spotless and healthy.",
      image: "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=600&h=400&fit=crop"
    },
    {
      id: 2,
      title: "Estate Cleaning",
      description: "Comprehensive cleaning services for residential estates and communities.",
      image: "https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?w=600&h=400&fit=crop"
    },
    {
      id: 3,
      title: "Events Cleaning",
      description: "Post-event cleanup services to restore venues to pristine condition.",
      image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=600&h=400&fit=crop"
    },
    {
      id: 4,
      title: "Office Cleaning",
      description: "Professional office cleaning to maintain a clean and productive workspace.",
      image: "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=600&h=400&fit=crop"
    },
    {
      id: 5,
      title: "Move-in and Move-out Cleaning",
      description: "Thorough cleaning services for properties before moving in or after moving out.",
      image: "https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?w=600&h=400&fit=crop"
    },
    {
      id: 6,
      title: "Hotel Cleaning",
      description: "Specialized cleaning services for hotels and hospitality establishments.",
      image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=600&h=400&fit=crop"
    },
    {
      id: 7,
      title: "Commercial Cleaning",
      description: "Complete commercial cleaning solutions for businesses of all sizes.",
      image: "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=600&h=400&fit=crop"
    },
    {
      id: 8,
      title: "Back to School Cleaning",
      description: "Deep cleaning services to prepare schools and educational facilities.",
      image: "https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?w=600&h=400&fit=crop"
    },
    {
      id: 9,
      title: "Post Construction Cleaning",
      description: "Comprehensive cleanup after construction projects to remove debris and dust.",
      image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=600&h=400&fit=crop"
    },
    {
      id: 10,
      title: "Fumigation",
      description: "Professional fumigation services to eliminate pests and ensure a healthy environment.",
      image: "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=600&h=400&fit=crop"
    }
  ];

const Services = () => {

  return (
    <section id="services" className="section-padding bg-gradient-to-b from-white to-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-600 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-2">
            Professional cleaning services tailored to your needs
          </p>
          <div className="w-24 h-1 bg-primary-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 group border border-gray-100 hover:shadow-2xl hover:-translate-y-1"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={`${service.image}&q=80`}
                  alt={`${service.title} - AMB 360 Cleaning Agency`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-semibold text-primary-700">
                  AMB 360
                </div>
                <div className="absolute inset-0 flex items-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-full bg-black/60 text-white p-4 text-sm">
                    <p className="font-semibold mb-1">{service.title}</p>
                    <p className="text-white/80">Click to view details &amp; gallery</p>
                  </div>
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

