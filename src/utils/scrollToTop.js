/**
 * Utility function to smoothly scroll to the top of the page
 * Can be used on button clicks or any other interactions
 */
export const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'
  });
};

/**
 * Scroll to top instantly (without animation)
 * Useful for immediate navigation
 */
export const scrollToTopInstant = () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'auto'
  });
};

