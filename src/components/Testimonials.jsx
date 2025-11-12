import flagstaffHouse from '../assets/flagstaff house.jpg';
import ghs from '../assets/Ghana Health Service.png';
import williot from '../assets/Williot Constructions.png';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Flagstaff House",
      role: "Client",
      text: "Reliable, thorough and professional. Excellent service delivery every time.",
      image: flagstaffHouse
    },
    {
      name: "Ghana Health Service",
      role: "Client",
      text: "High standards maintained across facilities. Great attention to hygiene and detail.",
      image: ghs
    },
    {
      name: "Williot Constructions",
      role: "Client",
      text: "Post-construction cleaning was spotless. Efficient team and great results.",
      image: williot
    }
  ];

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-600 mb-4">
            What Our Clients Think
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto rounded-full mb-4"></div>
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="text-3xl font-bold text-primary-600">4.7</span>
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-6 h-6 fill-current" viewBox="0 0 20 20">
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
              ))}
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-50 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={`${testimonial.name} - ${testimonial.role}`}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                  loading="lazy"
                />
                <div>
                  <h4 className="font-bold text-blue-600">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-700 italic">"{testimonial.text}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

