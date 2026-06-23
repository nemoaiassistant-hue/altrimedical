/* ============================================
   Altri Medical Ltd — Interactions
   ============================================ */
(function() {
  'use strict';

  /* ===== NAVBAR SCROLL ===== */
  const navbar = document.getElementById('navbar');
  let lastScroll = 0;

  window.addEventListener('scroll', function() {
    const scroll = window.pageYOffset;

    // Add shadow when scrolled
    if (scroll > 10) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    lastScroll = scroll;
  }, { passive: true });

  /* ===== MOBILE MENU ===== */
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('nav-menu');

  hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
    hamburger.setAttribute('aria-expanded', hamburger.classList.contains('active'));
  });

  // Close menu when clicking a link
  navMenu.querySelectorAll('a').forEach(function(link) {
    link.addEventListener('click', function() {
      hamburger.classList.remove('active');
      navMenu.classList.remove('active');
      hamburger.setAttribute('aria-expanded', 'false');
    });
  });

  /* ===== ACTIVE NAV ON SCROLL ===== */
  const sections = document.querySelectorAll('section[id]');
  const navLinks = navMenu.querySelectorAll('a');

  function updateActiveNav() {
    const scrollPos = window.pageYOffset + 120;

    sections.forEach(function(section) {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute('id');

      if (scrollPos >= top && scrollPos < top + height) {
        navLinks.forEach(function(link) {
          link.classList.remove('active');
          if (link.getAttribute('href') === '#' + id) {
            link.classList.add('active');
          }
        });
      }
    });
  }

  window.addEventListener('scroll', updateActiveNav, { passive: true });

  /* ===== FADE-IN ON SCROLL ===== */
  const fadeElements = document.querySelectorAll('.fade-in');

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    fadeElements.forEach(function(el) {
      observer.observe(el);
    });
  } else {
    // Fallback: show all
    fadeElements.forEach(function(el) {
      el.classList.add('visible');
    });
  }

  /* ===== SMOOTH SCROLL OFFSET ===== */
  document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#' || targetId === '#main') return;

      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        const offset = 80;
        const top = target.getBoundingClientRect().top + window.pageYOffset - offset;

        window.scrollTo({
          top: top,
          behavior: 'smooth'
        });
      }
    });
  });

  /* ===== FAQ — CLOSE OTHERS WHEN ONE OPENS ===== */
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(function(item) {
    item.addEventListener('toggle', function() {
      if (item.open) {
        faqItems.forEach(function(other) {
          if (other !== item && other.open) {
            other.open = false;
          }
        });
      }
    });
  });

  /* ===== FORM SUBMIT ===== */
  const form = document.getElementById('enquiry-form');

  if (form) {
    form.addEventListener('submit', function(e) {
      var btn = form.querySelector('button[type="submit"]');
      var originalText = btn.textContent;

      btn.textContent = 'Sending...';
      btn.disabled = true;

      // Allow the form to submit (Formspree handles the POST)
      // The timeout is just for UX feedback before redirect
      setTimeout(function() {
        btn.textContent = originalText;
        btn.disabled = false;
      }, 5000);
    });
  }

  /* ===== LAZY LOAD FALLBACK ===== */
  if (!('loading' in HTMLImageElement.prototype)) {
    const lazyImages = document.querySelectorAll('img[loading="lazy"]');
    lazyImages.forEach(function(img) {
      img.src = img.dataset.src || img.src;
    });
  }

})();
