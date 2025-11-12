import { Phone, MessageCircle, MapPin, Instagram } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-600 mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-2">
            Book online, by phone, or through social media
          </p>
          <div className="w-24 h-1 bg-primary-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-blue-600 mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="text-primary-600 text-2xl mr-4"><Phone className="w-5 h-5" /></div>
                  <div>
                    <h4 className="font-semibold text-blue-600 mb-1">Phone</h4>
                    <a href="tel:+233535548408" className="text-gray-600 hover:text-primary-600">
                      +233 53 554 8408
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="text-primary-600 text-2xl mr-4"><MessageCircle className="w-5 h-5" /></div>
                  <div>
                    <h4 className="font-semibold text-blue-600 mb-1">WhatsApp</h4>
                    <a 
                      href="https://wa.me/233535548408" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-primary-600"
                    >
                      +233 53 554 8408
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="text-primary-600 text-2xl mr-4"><MapPin className="w-5 h-5" /></div>
                  <div>
                    <h4 className="font-semibold text-blue-600 mb-1">Location</h4>
                    <p className="text-gray-600">
                      Weija Gbawe, Demargo Contractors, HM8Q+XJR, Gbawe<br />
                      Accra - Ghana
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="text-primary-600 text-2xl mr-4"><Instagram className="w-5 h-5" /></div>
                  <div>
                    <h4 className="font-semibold text-blue-600 mb-1">Instagram</h4>
                    <a 
                      href="https://instagram.com/amb_360_cleaning_agency" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-primary-600"
                    >
                      @amb_360_cleaning_agency
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-primary-600 text-white p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-blue-600 mb-4">Book A Free Consultation</h3>
              <p className="mb-6">
                At AMB 360 Cleaning Agency, we treat every space with care. Whether it's your home, 
                office, or commercial space, we tailor our services to fit your lifestyle and expectations.
              </p>
              <a href="tel:+233535548408" className="btn-secondary bg-white text-primary-600 inline-block">
                Call Now
              </a>
            </div>
          </div>

          {/* Map */}
          <div>
            <h3 className="text-2xl font-bold text-blue-600 mb-6">Find Us</h3>
            <div className="rounded-xl overflow-hidden shadow-xl h-96">
              <iframe
                src="https://www.google.com/maps?q=Weija+Gbawe+Demargo+Contractors+HM8Q+XJR+Gbawe+Accra+Ghana&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="AMB 360 Cleaning Agency Location - Weija Gbawe, Demargo Contractors, HM8Q+XJR, Gbawe, Accra - Ghana"
              ></iframe>
            </div>
            <p className="mt-4 text-gray-600 text-sm">
              Weija Gbawe, Demargo Contractors, HM8Q+XJR, Gbawe, Accra - Ghana
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

