import { ShieldCheck, Heart, Star, Users } from 'lucide-react';

const About = () => {
  const values = [
    {
      title: "Trust",
      description: "Trust is our paramount value. All of our employees go through work authorization check.",
      icon: ShieldCheck
    },
    {
      title: "Care",
      description: "Average response time is less than 10 minutes. You can call, e-mail, text or message us.",
      icon: Heart
    },
    {
      title: "Quality",
      description: "Excellent performance, no surprises. Top-notch service guaranteed.",
      icon: Star
    },
    {
      title: "People",
      description: "We pay good wages and abide by the laws. Our team is our strength.",
      icon: Users
    }
  ];

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-600 mb-4">
            About Us
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-2">
            Your satisfaction is our priority.
          </p>
          <div className="w-24 h-1 bg-primary-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {values.map((value, index) => {
            const colors = [
              'border-l-4 border-primary-600',
              'border-l-4 border-primary-500',
              'border-l-4 border-primary-600',
              'border-l-4 border-primary-500'
            ];
            return (
              <div
                key={index}
                className={`bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow duration-300 ${colors[index]}`}
              >
              <div className="mb-4 mx-auto w-12 h-12 rounded-lg bg-primary-50 flex items-center justify-center">
                {(() => {
                  const Icon = value.icon;
                  return <Icon className="w-6 h-6 text-primary-600" />;
                })()}
              </div>
                <h3 className="text-xl font-bold text-blue-600 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600">
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?w=800&h=600&fit=crop&q=80"
              alt="Professional cleaning team - AMB 360 Cleaning Agency"
              className="rounded-2xl shadow-xl w-full"
              loading="lazy"
            />
          </div>
          <div>
            <h3 className="text-3xl font-bold text-blue-600 mb-6">
              Honest. Simple. Professional.
            </h3>
            <p className="text-lg text-gray-600 mb-4">
              At AMB 360 Cleaning Agency, we treat every space with care and attention to detail. 
              Whether it's your home, office, or commercial space, we tailor our services to fit 
              your lifestyle and expectations.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              Our team of experienced professionals is committed to delivering exceptional cleaning 
              services that exceed your expectations. We use eco-friendly products and modern 
              cleaning techniques to ensure a safe and healthy environment.
            </p>
            <div className="flex items-center gap-4">
              <div className="text-4xl font-bold text-primary-600">100%</div>
              <div className="text-gray-600">
                <div className="font-semibold">Satisfaction Rate</div>
                <div className="text-sm">Based on client reviews</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

