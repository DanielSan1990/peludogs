document.addEventListener("DOMContentLoaded", () => {
    const hideElfsightWidget = () => {
      const elfsightLink = document.querySelector('a[href*="elfsight.com/google-reviews-widget"]');
      if (elfsightLink instanceof HTMLElement) {
        elfsightLink.style.display = 'none';
      }
    };
  
    hideElfsightWidget();
    setTimeout(hideElfsightWidget, 5000);
  });
  