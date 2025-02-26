document.addEventListener('DOMContentLoaded', () => {
    const stats = [
      { id: 'lives-saved', target: 500 },
      { id: 'donors-registered', target: 1000 },
      { id: 'hospitals-supported', target: 200 },
    ];
  
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5, // Trigger when 50% of the section is visible
    };
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          stats.forEach((stat) => {
            animateNumber(stat.id, stat.target);
          });
          observer.disconnect(); // Stop observing after animation
        }
      });
    }, options);
  
    const statsSection = document.querySelector('.statistics');
    observer.observe(statsSection);
  });
  
  function animateNumber(id, target) {
    let current = 0;
    const increment = target / 100; // Adjust speed
    const element = document.getElementById(id);
  
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        clearInterval(timer);
        current = target;
      }
      element.textContent = Math.floor(current);
    }, 20);
  }