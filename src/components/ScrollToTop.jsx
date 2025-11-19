import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { ArrowUp } from 'lucide-react';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    // Scroll to top smoothly when route changes
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }, [pathname]);

  // Track scroll to toggle button visibility
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY || document.documentElement.scrollTop;
      const viewportHeight = window.innerHeight;
      setShowButton(scrollPosition > viewportHeight * 0.9);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollUp = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {showButton && (
        <button
          type="button"
          onClick={handleScrollUp}
          className="fixed bottom-6 right-6 z-[1000] flex items-center gap-2 rounded-full bg-primary-600 text-white px-4 py-3 shadow-xl hover:bg-primary-700 transition-colors focus:outline-none focus-visible:ring-4 focus-visible:ring-primary-200"
          aria-label="Scroll back to top"
        >
          <ArrowUp className="w-4 h-4" />
          <span className="text-sm font-semibold uppercase tracking-wider">Top</span>
        </button>
      )}
    </>
  );
};

export default ScrollToTop;

