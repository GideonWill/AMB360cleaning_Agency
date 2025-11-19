import { useEffect, useState, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { ArrowUp } from 'lucide-react';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  const [showButton, setShowButton] = useState(false);
  const [isDarkBackground, setIsDarkBackground] = useState(false);
  const buttonRef = useRef(null);

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

  useEffect(() => {
    if (!showButton || !buttonRef.current) return;

    const checkBackground = () => {
      const button = buttonRef.current;
      if (!button) return;

      const rect = button.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      // Get element at button position
      const elementBelow = document.elementFromPoint(centerX, centerY);
      if (!elementBelow) return;

      // Walk up the DOM tree to find the section/container with background
      let currentElement = elementBelow;
      let bgColor = null;
      let attempts = 0;
      const maxAttempts = 10;

      while (currentElement && attempts < maxAttempts) {
        const computedStyle = window.getComputedStyle(currentElement);
        bgColor = computedStyle.backgroundColor;
        
        // Check if background is not transparent
        if (bgColor && bgColor !== 'rgba(0, 0, 0, 0)' && bgColor !== 'transparent') {
          break;
        }
        
        // Also check for background image
        const bgImage = computedStyle.backgroundImage;
        if (bgImage && bgImage !== 'none') {
          // If there's a background image, check parent for overlay
          const parent = currentElement.parentElement;
          if (parent) {
            const parentStyle = window.getComputedStyle(parent);
            const parentBg = parentStyle.backgroundColor;
            if (parentBg && parentBg !== 'rgba(0, 0, 0, 0)' && parentBg !== 'transparent') {
              bgColor = parentBg;
              break;
            }
          }
        }
        
        currentElement = currentElement.parentElement;
        attempts++;
      }

      if (bgColor) {
        // Parse RGB values
        const rgbMatch = bgColor.match(/\d+/g);
        if (rgbMatch && rgbMatch.length >= 3) {
          const r = parseInt(rgbMatch[0]);
          const g = parseInt(rgbMatch[1]);
          const b = parseInt(rgbMatch[2]);
          
          // Calculate luminance (relative brightness)
          const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
          
          // If luminance is less than 0.5, it's a dark background
          setIsDarkBackground(luminance < 0.5);
        }
      }
    };

    checkBackground();
    const interval = setInterval(checkBackground, 200);
    window.addEventListener('scroll', checkBackground, { passive: true });
    window.addEventListener('resize', checkBackground, { passive: true });

    return () => {
      clearInterval(interval);
      window.removeEventListener('scroll', checkBackground);
      window.removeEventListener('resize', checkBackground);
    };
  }, [showButton, pathname]);

  const handleScrollUp = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  };

  const textColor = isDarkBackground ? 'text-white' : 'text-slate-700';
  const dividerColor = isDarkBackground ? 'bg-white/60' : 'bg-slate-400';

  return (
    <>
      {showButton && (
        <button
          ref={buttonRef}
          type="button"
          onClick={handleScrollUp}
          className={`fixed z-40 right-4 bottom-28 sm:bottom-24 flex flex-col items-center gap-3 ${textColor} hover:opacity-80 transition-opacity`}
          aria-label="Scroll back to top"
        >
          <ArrowUp className="w-4 h-4" />
          <span
            className="text-[10px] font-semibold tracking-[0.35em] uppercase inline-block"
            style={{ 
              writingMode: 'vertical-rl',
              textOrientation: 'upright'
            }}
          >
            {'SCROLL TO TOP'.split(' ').reverse().join(' ')}
          </span>
          <span className={`block w-px h-8 ${dividerColor}`} aria-hidden="true" />
        </button>
      )}
    </>
  );
};

export default ScrollToTop;

