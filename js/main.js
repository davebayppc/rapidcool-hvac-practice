document.addEventListener('DOMContentLoaded', () => {
  // Mobile Menu Toggle
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const mainNav = document.querySelector('.main-nav');

  if (mobileMenuBtn && mainNav) {
    mobileMenuBtn.addEventListener('click', () => {
      mainNav.classList.toggle('active');
    });
  }

  // Smooth Scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
        // Close mobile menu if open
        if (mainNav.classList.contains('active')) {
          mainNav.classList.remove('active');
        }
      }
    });
  });

  // Sticky header adjustments on scroll
  const siteHeader = document.querySelector('.site-header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      siteHeader.style.padding = '0';
      siteHeader.style.boxShadow = 'var(--shadow-md)';
    } else {
      siteHeader.style.padding = '0';
      siteHeader.style.boxShadow = 'var(--shadow-sm)';
    }
  });
});
