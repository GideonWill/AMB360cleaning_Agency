import { useEffect, useState, useRef } from 'react';
import { Users, Award, Clock, Star } from 'lucide-react';

const StatsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const stats = [
    {
      icon: Users,
      value: 200,
      suffix: '+',
      label: 'Happy Clients',
      color: 'text-primary-600'
    },
    {
      icon: Award,
      value: 5000,
      suffix: '+',
      label: 'Jobs Completed',
      color: 'text-secondary-600'
    },
    {
      icon: Clock,
      value: 24,
      suffix: '/7',
      label: 'Hours Available',
      color: 'text-primary-500'
    },
    {
      icon: Star,
      value: 4.7,
      suffix: '',
      label: 'Average Rating',
      color: 'text-yellow-500'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const Counter = ({ end, suffix, duration = 2000 }) => {
    const [count, setCount] = useState(0);
    const countRef = useRef(null);

    useEffect(() => {
      if (!isVisible) return;

      let startTime = null;
      const animate = (currentTime) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / duration, 1);
        
        // Easing function for smooth animation
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        setCount(Math.floor(easeOutQuart * end));

        if (progress < 1) {
          countRef.current = requestAnimationFrame(animate);
        } else {
          setCount(end);
        }
      };

      countRef.current = requestAnimationFrame(animate);

      return () => {
        if (countRef.current) {
          cancelAnimationFrame(countRef.current);
        }
      };
    }, [isVisible, end, duration]);

    return (
      <span>
        {count}{suffix}
      </span>
    );
  };

  return (
    <section ref={sectionRef} className="section-padding bg-gradient-to-br from-primary-600 via-primary-500 to-secondary-600 text-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl" />
      
      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-600 mb-4">
            Trusted by Thousands
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Our numbers speak for themselves
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="text-center transform transition-all duration-500"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                  transitionDelay: `${index * 100}ms`
                }}
              >
                <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-full mb-4 backdrop-blur-sm">
                  <Icon className={`w-10 h-10 ${stat.color === 'text-yellow-500' ? 'text-yellow-300' : 'text-white'}`} />
                </div>
                <div className="text-5xl md:text-6xl font-bold mb-2">
                  <Counter end={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-white/90 font-medium">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;

