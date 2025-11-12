import { useEffect, useState } from 'react';

const PageShell = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Reset visibility on mount
    setIsVisible(false);
    
    // Small delay to ensure smooth transition
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 50);

    return () => {
      clearTimeout(timer);
      setIsVisible(false);
    };
  }, []);

  return (
    <div
      className={`transition-all duration-700 ease-out ${
        isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-4'
      }`}
    >
      {children}
    </div>
  );
};

export default PageShell;



