import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { ArrowUp } from 'lucide-react';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }, [pathname]);

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
          className="fixed z-40 right-4 bottom-28 sm:bottom-24 flex flex-col items-center gap-3 text-slate-700 hover:text-primary-600 transition-colors"
          aria-label="Scroll back to top"
        >
          <ArrowUp className="w-4 h-4" />
          <span
            className="text-xs font-semibold tracking-[0.4em]"
            style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
          >
            SCROLL TO TOP
          </span>
          <span className="block w-px h-8 bg-slate-400" aria-hidden="true" />
        </button>
      )}
    </>
  );
};

export default ScrollToTop;

