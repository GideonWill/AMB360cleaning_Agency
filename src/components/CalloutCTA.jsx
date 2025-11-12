import { Phone, MessageCircle } from 'lucide-react';

const CalloutCTA = () => {
  return (
    <section className="py-10">
      <div className="container-custom">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-primary-600 to-primary-500 p-6 sm:p-10 text-white shadow-xl">
          <div className="grid md:grid-cols-3 items-center gap-6">
            <div className="md:col-span-2">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-blue-600">Ready for a sparkling clean?</h3>
              <p className="text-white/90 mt-2">Book your residential or commercial cleaning today. Fast response, professional results.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 justify-end">
              <a href="tel:+233535548408" className="btn-secondary bg-white text-primary-600">
                <span className="inline-flex items-center gap-2"><Phone className="w-5 h-5" /> Call</span>
              </a>
              <a href="https://wa.me/233535548408" target="_blank" rel="noopener noreferrer" className="btn-primary bg-white/10 hover:bg-white/20 border border-white/30">
                <span className="inline-flex items-center gap-2"><MessageCircle className="w-5 h-5" /> WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CalloutCTA;


