import { ArrowUpRight, Home, Building2 } from 'lucide-react';

const PromoCard = ({ color, titleLines, Icon, imageUrl }) => {
  return (
    <div className={`relative overflow-hidden rounded-[32px] p-6 sm:p-10`} style={{ backgroundColor: color.bg }}>
      <div className="grid grid-cols-[auto,1fr,auto] items-center gap-6 sm:gap-10">
        <div className="hidden sm:block">
          {imageUrl ? (
            <img src={imageUrl} alt="" className="w-28 h-28 sm:w-36 sm:h-36 object-contain" />
          ) : (
            <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-2xl bg-white/20 flex items-center justify-center">
              <Icon className="w-12 h-12 text-white" />
            </div>
          )}
        </div>

        <div className="text-white">
          <div className="text-3xl sm:text-5xl font-extrabold leading-tight">
            {titleLines.map((line, i) => (
              <div key={i}>{line}</div>
            ))}
          </div>
          <button className="mt-6 hidden sm:inline-flex items-center gap-2 text-white/90 font-semibold">
            Learn More
            <ArrowUpRight className="w-5 h-5" />
          </button>
        </div>

        <div className="self-end">
          <button
            className="w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center shadow-lg"
            style={{ backgroundColor: color.cta }}
            aria-label="Open"
          >
            <ArrowUpRight className="w-6 h-6 text-white" />
          </button>
        </div>
      </div>

      {/* notch circle to mimic cut-out */}
      <div
        className="absolute bottom-4 right-20 sm:right-28 w-16 h-16 rounded-full"
        style={{ backgroundColor: color.bg }}
      />
    </div>
  );
};

const ServicePromos = () => {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-8">
          <PromoCard
            color={{ bg: '#f97316', cta: '#f97316' }}
            titleLines={["Residential", "Cleaning"]}
            Icon={Home}
          />
          <PromoCard
            color={{ bg: '#1d4ed8', cta: '#f97316' }}
            titleLines={["Commercial", "Cleaning"]}
            Icon={Building2}
          />
        </div>
      </div>
    </section>
  );
};

export default ServicePromos;


