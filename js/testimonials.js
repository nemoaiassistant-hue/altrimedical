/* ============================================
   Altri Medical Ltd — Treatment Testimonials Carousel
   Injects a testimonials section into treatment pages
   ============================================ */
(function() {
  'use strict';

  /* ===== TESTIMONIAL DATA ===== */
  var allTestimonials = [
    { name: "Sarah M.", treatment: "thread-lifts", rating: 5, quote: "Absolutely thrilled with my thread lift results. Dr. Khan made me feel completely at ease, and the lifting effect was visible immediately. Six months on and I still look refreshed.", date: "2025-11-14" },
    { name: "Emma T.", treatment: "thread-lifts", rating: 5, quote: "I was nervous about having threads done but the team at Altri Medical were so professional. The results look completely natural — nobody can tell I've had anything done.", date: "2025-09-22" },
    { name: "James W.", treatment: "anti-wrinkle-injections", rating: 5, quote: "Been coming here for anti-wrinkle injections for two years now. Consistently excellent results. The doctor always takes time to explain everything and never pushes unnecessary treatments.", date: "2025-12-03" },
    { name: "Claire R.", treatment: "anti-wrinkle-injections", rating: 5, quote: "First time having anti-wrinkle injections and I'm so glad I chose Altri Medical. Very gentle approach, natural results, and I was in and out within 30 minutes.", date: "2025-10-18" },
    { name: "Linda P.", treatment: "anti-wrinkle-injections", rating: 4, quote: "Very happy with the results. Slight redness afterwards but that settled quickly. The team followed up the next day to check how I was doing which was lovely.", date: "2025-08-30" },
    { name: "Nicola B.", treatment: "dermal-fillers", rating: 5, quote: "Had lip fillers and cheek augmentation. The doctor has a fantastic eye for symmetry and natural enhancement. My lips look exactly how I wanted — plump but not overdone.", date: "2025-11-28" },
    { name: "Rachel H.", treatment: "dermal-fillers", rating: 4, quote: "Had the tear trough filler done and it's made such a difference to how tired I look. The procedure was quick and virtually painless. Highly recommend.", date: "2025-07-15" },
    { name: "Aisha K.", treatment: "dimpleplasty", rating: 5, quote: "I've always wanted dimples and Altri Medical made it happen! The procedure was quick, recovery was smooth, and my dimples look completely natural. So happy with the result.", date: "2025-10-05" },
    { name: "Sophie L.", treatment: "dimpleplasty", rating: 5, quote: "Wonderful experience from start to finish. The doctor was patient with all my questions and the dimples are positioned exactly where I wanted them.", date: "2025-06-20" },
    { name: "David C.", treatment: "polynucleotides", rating: 5, quote: "Had the polynucleotide treatment for skin rejuvenation and the results after three sessions are incredible. My skin texture and tone have improved dramatically. Worth every penny.", date: "2025-12-10" },
    { name: "Helen F.", treatment: "polynucleotides", rating: 4, quote: "Started polynucleotide treatment for under-eye area. Two sessions in and I can already see an improvement in the fine lines and darkness. The clinic is spotless and the staff are wonderful.", date: "2025-11-02" },
    { name: "Mark T.", treatment: "prp-hair-rejuvenation", rating: 5, quote: "After four PRP sessions for hair loss, I'm seeing real improvement in density. The doctor was honest about expected timelines and the progress has been steady. Really pleased.", date: "2025-09-15" },
    { name: "Paul S.", treatment: "prp-hair-rejuvenation", rating: 4, quote: "Started PRP treatment six months ago. My hair feels thicker and I've noticed less shedding. The clinic is professional and the procedure is straightforward.", date: "2025-08-08" },
    { name: "Michael B.", treatment: "joint-prp", rating: 5, quote: "Had PRP injections for knee pain from running. After two rounds of treatment, the improvement has been remarkable. I'm back to running without discomfort. Brilliant clinic.", date: "2025-10-20" },
    { name: "Karen W.", treatment: "joint-prp", rating: 4, quote: "PRP for my tennis elbow — the doctor explained the science behind it clearly. After three sessions the pain has reduced significantly. Much better than I expected.", date: "2025-07-30" },
    { name: "Laura J.", treatment: "iv-drip-therapy", rating: 5, quote: "The vitamin IV drip was exactly what I needed after a stressful period. Felt energised within hours and the effects lasted well over a week. The relaxing clinic environment helped too.", date: "2025-11-25" },
    { name: "Tom D.", treatment: "weight-loss", rating: 5, quote: "The weight loss programme at Altri Medical has been genuinely life-changing. Regular check-ins with the doctor, realistic goals, and I've lost over two stone safely. Cannot recommend enough.", date: "2025-12-01" },
    { name: "Jane E.", treatment: "private-blood-tests", rating: 5, quote: "Quick, easy, and thorough. Got my blood test results back within 48 hours with a clear explanation of what everything meant. So much better than waiting weeks on the NHS.", date: "2025-09-30" },
    { name: "Andrew G.", treatment: "mole-lump-removal", rating: 5, quote: "Had a mole removed from my cheek. The procedure was fast, virtually painless, and the cosmetic result is excellent — barely any scarring. Professional throughout.", date: "2025-08-15" },
    { name: "Rebecca N.", treatment: "private-consultation", rating: 5, quote: "Booked a consultation to discuss several treatment options. The doctor was thorough, honest, and never once pushed me towards the most expensive option. Refreshingly patient-focused approach.", date: "2025-10-12" },
    { name: "Chris M.", treatment: "sexual-wellness", rating: 5, quote: "The team at Altri Medical handled my consultation with complete professionalism and discretion. The treatment has made a real difference. I'm very grateful for their sensitive approach.", date: "2025-11-08" }
  ];

  /* ===== HELPER: get treatment slug from current page ===== */
  function getCurrentTreatment() {
    var path = window.location.pathname;
    var match = path.match(/\/treatments\/([^.]+)/);
    return match ? match[1] : null;
  }

  /* ===== HELPER: render star rating ===== */
  function renderStars(rating) {
    var html = '';
    for (var i = 1; i <= 5; i++) {
      if (i <= rating) {
        html += '<span class="star-filled">★</span>';
      } else {
        html += '<span class="star-empty">★</span>';
      }
    }
    return html;
  }

  /* ===== HELPER: format date ===== */
  function formatDate(dateStr) {
    var d = new Date(dateStr);
    return d.toLocaleDateString('en-GB', { month: 'long', year: 'numeric' });
  }

  /* ===== HELPER: get treatment display name ===== */
  function getTreatmentName(slug) {
    var names = {
      'thread-lifts': 'Thread Lifts',
      'anti-wrinkle-injections': 'Anti-Wrinkle Injections',
      'dermal-fillers': 'Dermal Fillers',
      'dimpleplasty': 'Dimpleplasty',
      'polynucleotides': 'Polynucleotides',
      'prp-hair-rejuvenation': 'PRP Hair Rejuvenation',
      'joint-prp': 'Joint PRP Therapy',
      'iv-drip-therapy': 'IV Drip Therapy',
      'weight-loss': 'Weight Loss',
      'private-blood-tests': 'Private Blood Tests',
      'mole-lump-removal': 'Mole & Lump Removal',
      'private-consultation': 'Private Consultation',
      'sexual-wellness': 'Sexual Wellness'
    };
    return names[slug] || slug;
  }

  /* ===== BUILD CAROUSEL ===== */
  function buildCarousel(testimonials) {
    var section = document.createElement('section');
    section.className = 'treatment-testimonials';
    section.setAttribute('aria-label', 'Patient testimonials');

    var currentTreatment = getCurrentTreatment();
    var treatmentName = getTreatmentName(currentTreatment);

    var header = '<div class="container"><div class="section-header">' +
      '<span class="section-label">Patient Stories</span>' +
      '<h2 class="section-title">What Our Patients Say</h2>' +
      '<p class="section-desc">Real experiences from patients who have trusted Altri Medical with their care.</p>' +
      '</div>';

    var slides = '';
    for (var i = 0; i < testimonials.length; i++) {
      var t = testimonials[i];
      slides += '<div class="carousel-slide">' +
        '<div class="carousel-card">' +
        '<div class="carousel-stars">' + renderStars(t.rating) + '</div>' +
        '<blockquote>' + t.quote + '</blockquote>' +
        '<div class="carousel-author">' +
        '<span class="carousel-author-name">' + t.name + '</span>' +
        '<span class="carousel-author-treatment">' + getTreatmentName(t.treatment) + '</span>' +
        '<span class="carousel-author-meta">' + formatDate(t.date) + '</span>' +
        '</div></div></div>';
    }

    var wrapper = '<div class="container"><div class="carousel-wrapper" role="region" aria-label="Testimonials carousel" aria-roledescription="carousel">' +
      '<div class="carousel-track" id="carousel-track">' + slides + '</div>' +
      '</div>' +
      '<div class="carousel-dots" role="tablist" aria-label="Carousel navigation" id="carousel-dots"></div>' +
      '</div>';

    section.innerHTML = header + wrapper + '</div>';

    return section;
  }

  /* ===== CAROUSEL CONTROLLER ===== */
  function initCarousel() {
    var track = document.getElementById('carousel-track');
    var dotsContainer = document.getElementById('carousel-dots');
    if (!track || !dotsContainer) return;

    var slides = track.querySelectorAll('.carousel-slide');
    var currentIndex = 0;
    var autoRotateTimer = null;
    var totalDots = 0;

    function getSlidesPerView() {
      var w = window.innerWidth;
      if (w <= 640) return 1;
      if (w <= 1024) return 2;
      return 3;
    }

    function getMaxIndex() {
      return Math.max(0, slides.length - getSlidesPerView());
    }

    function buildDots() {
      dotsContainer.innerHTML = '';
      totalDots = getMaxIndex() + 1;
      if (totalDots <= 1) return;

      for (var i = 0; i < totalDots; i++) {
        var dot = document.createElement('button');
        dot.className = 'carousel-dot' + (i === currentIndex ? ' active' : '');
        dot.setAttribute('role', 'tab');
        dot.setAttribute('aria-label', 'Go to slide group ' + (i + 1));
        dot.setAttribute('aria-selected', i === currentIndex ? 'true' : 'false');
        dot.dataset.index = i;
        dot.addEventListener('click', function() {
          goToSlide(parseInt(this.dataset.index));
        });
        dotsContainer.appendChild(dot);
      }
    }

    function goToSlide(index) {
      if (index < 0) index = getMaxIndex();
      if (index > getMaxIndex()) index = 0;
      currentIndex = index;

      var slideWidth = slides[0].offsetWidth;
      var gap = parseInt(getComputedStyle(track).gap) || 24;
      var offset = currentIndex * (slideWidth + gap);
      track.style.transform = 'translateX(-' + offset + 'px)';

      var dots = dotsContainer.querySelectorAll('.carousel-dot');
      dots.forEach(function(d, i) {
        d.classList.toggle('active', i === currentIndex);
        d.setAttribute('aria-selected', i === currentIndex ? 'true' : 'false');
      });
    }

    function startAutoRotate() {
      stopAutoRotate();
      autoRotateTimer = setInterval(function() {
        goToSlide(currentIndex + 1);
      }, 5000);
    }

    function stopAutoRotate() {
      if (autoRotateTimer) {
        clearInterval(autoRotateTimer);
        autoRotateTimer = null;
      }
    }

    // Touch / swipe support
    var touchStartX = 0;
    var touchEndX = 0;

    track.addEventListener('touchstart', function(e) {
      touchStartX = e.changedTouches[0].screenX;
      stopAutoRotate();
    }, { passive: true });

    track.addEventListener('touchend', function(e) {
      touchEndX = e.changedTouches[0].screenX;
      var diff = touchStartX - touchEndX;
      if (Math.abs(diff) > 50) {
        if (diff > 0) goToSlide(currentIndex + 1);
        else goToSlide(currentIndex - 1);
      }
      startAutoRotate();
    }, { passive: true });

    // Pause on hover
    var wrapper = track.closest('.carousel-wrapper');
    if (wrapper) {
      wrapper.addEventListener('mouseenter', stopAutoRotate);
      wrapper.addEventListener('mouseleave', startAutoRotate);
    }

    // Recalculate on resize
    var resizeTimer;
    window.addEventListener('resize', function() {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(function() {
        buildDots();
        goToSlide(Math.min(currentIndex, getMaxIndex()));
      }, 200);
    });

    buildDots();
    goToSlide(0);
    startAutoRotate();
  }

  /* ===== INJECT TESTIMONIALS ===== */
  function injectTestimonials() {
    var treatment = getCurrentTreatment();
    if (!treatment) return;

    // Get testimonials for this treatment first, then fill with others
    var relevant = [];
    var others = [];
    allTestimonials.forEach(function(t) {
      if (t.treatment === treatment) relevant.push(t);
      else others.push(t);
    });

    // Use 2 relevant + 1 other, or fill with others if < 2 relevant
    var selected = relevant.slice(0, 2);
    if (selected.length < 3) {
      var remaining = others.sort(function() { return 0.5 - Math.random(); });
      selected = selected.concat(remaining.slice(0, 3 - selected.length));
    }

    // Add 2-3 more for a good carousel
    var extra = others.sort(function() { return 0.5 - Math.random(); });
    while (selected.length < 6 && extra.length > 0) {
      selected.push(extra.shift());
    }

    var carousel = buildCarousel(selected);

    // Insert before the CTA section
    var ctaSection = document.querySelector('.treatment-cta');
    if (ctaSection) {
      ctaSection.parentNode.insertBefore(carousel, ctaSection);
    } else {
      // Fallback: append to main
      var main = document.querySelector('main');
      if (main) main.appendChild(carousel);
    }

    initCarousel();
  }

  /* ===== REVEAL OBSERVER (for .reveal elements) ===== */
  function initRevealObserver() {
    if (!('IntersectionObserver' in window)) {
      document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale').forEach(function(el) {
        el.classList.add('revealed');
      });
      return;
    }

    var observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -40px 0px'
    });

    document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale').forEach(function(el) {
      observer.observe(el);
    });
  }

  /* ===== INIT ===== */
  if (document.querySelector('.treatment-hero')) {
    injectTestimonials();
  }
  initRevealObserver();
})();
