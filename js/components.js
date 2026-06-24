/* ============================================
   Altri Medical Ltd — Shared Components
   Injects nav & footer into every page
   ============================================ */
(function() {
  'use strict';

  const BASE = window.location.pathname.includes('/treatments/') ? '..' : '.';
  const DOMAIN = 'https://www.altrimedical.co.uk';

  /* ===== NAVBAR ===== */
  function renderNav() {
    const currentPage = window.location.pathname.split('/').pop().replace('.html', '') || 'index';

    const nav = document.createElement('header');
    nav.id = 'navbar';
    nav.className = 'navbar';
    nav.innerHTML = `
      <div class="nav-container">
        <a href="${BASE}/index.html" class="nav-logo" aria-label="Altri Medical — Home">
          <svg class="logo-mark" viewBox="0 0 100 100" width="40" height="40" aria-hidden="true">
            <rect width="100" height="100" rx="22" fill="#0d5c5c"/>
            <text x="50" y="70" font-size="56" font-family="Georgia, serif" fill="#c9a96a" text-anchor="middle">A</text>
          </svg>
          <span class="logo-text">Altri Medical</span>
        </a>

        <nav class="nav-menu" id="nav-menu" aria-label="Primary navigation">
          <a href="${BASE}/index.html" class="${currentPage === 'index' || currentPage === '' ? 'active' : ''}">Home</a>
          <a href="${BASE}/index.html#about" class="${currentPage === 'about' ? 'active' : ''}">About</a>
          <div class="nav-dropdown">
            <a href="${BASE}/index.html#services" class="nav-dropdown-trigger ${currentPage === 'index' ? '' : 'active'}">
              Treatments
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg>
            </a>
            <div class="nav-dropdown-menu">
              <span class="nav-dropdown-label">Aesthetics</span>
              <a href="${BASE}/treatments/thread-lifts.html">Thread Lifts</a>
              <a href="${BASE}/treatments/anti-wrinkle-injections.html">Anti-Wrinkle Injections</a>
              <a href="${BASE}/treatments/dermal-fillers.html">Dermal Fillers</a>
              <a href="${BASE}/treatments/dimpleplasty.html">Dimpleplasty</a>
              <a href="${BASE}/treatments/polynucleotides.html">Polynucleotides</a>
              <span class="nav-dropdown-label">Regenerative</span>
              <a href="${BASE}/treatments/prp-hair-rejuvenation.html">PRP Hair Rejuvenation</a>
              <a href="${BASE}/treatments/joint-prp.html">Joint PRP</a>
              <span class="nav-dropdown-label">Wellness & More</span>
              <a href="${BASE}/treatments/iv-drip-therapy.html">IV Drip Therapy</a>
              <a href="${BASE}/treatments/weight-loss.html">Weight Loss Programmes</a>
              <a href="${BASE}/treatments/private-blood-tests.html">Private Blood Tests</a>
              <a href="${BASE}/treatments/mole-lump-removal.html">Mole & Lump Removal</a>
              <a href="${BASE}/treatments/private-consultation.html">Private Consultation</a>
              <a href="${BASE}/treatments/sexual-wellness.html">Sexual Wellness</a>
            </div>
          </div>
          <a href="${BASE}/index.html#doctors" class="${currentPage === 'doctors' ? 'active' : ''}">Our Doctors</a>
          <a href="${BASE}/index.html#testimonials" class="${currentPage === 'testimonials' ? 'active' : ''}">Reviews</a>
          <a href="${BASE}/index.html#faq" class="${currentPage === 'faq' ? 'active' : ''}">FAQ</a>
          <a href="${BASE}/blog.html" class="${currentPage === 'blog' ? 'active' : ''}">Blog</a>
          <a href="${BASE}/index.html#contact" class="${currentPage === 'contact' ? 'active' : ''}">Contact</a>
        </nav>

        <div class="nav-actions">
          <a href="tel:01615317727" class="nav-phone" aria-label="Call us">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            <span>0161 531 7727</span>
          </a>
          <a href="${BASE}/index.html#contact" class="btn btn-gold btn-sm">Book Consultation</a>
          <button class="hamburger" id="hamburger" aria-label="Toggle menu" aria-expanded="false">
            <span></span><span></span><span></span>
          </button>
        </div>
      </div>
    `;
    document.body.prepend(nav);
  }

  /* ===== FOOTER ===== */
  function renderFooter() {
    const footer = document.createElement('footer');
    footer.className = 'footer';
    footer.innerHTML = `
      <div class="container">
        <div class="footer-grid">
          <div class="footer-col footer-brand">
            <div class="footer-logo">
              <svg class="logo-mark" viewBox="0 0 100 100" width="36" height="36" aria-hidden="true">
                <rect width="100" height="100" rx="22" fill="#0d5c5c"/>
                <text x="50" y="70" font-size="56" font-family="Georgia, serif" fill="#c9a96a" text-anchor="middle">A</text>
              </svg>
              <span>Altri Medical Ltd</span>
            </div>
            <p>Doctor-led aesthetics clinic in Altrincham. Evidence-based treatments, natural results, and clinical safety — delivered by GMC-registered doctors.</p>
            <p class="footer-address">35a Stamford New Road<br>Altrincham, WA14 1EB</p>
          </div>

          <div class="footer-col">
            <h4>Treatments</h4>
            <ul>
              <li><a href="${BASE}/treatments/thread-lifts.html">Thread Lifts</a></li>
              <li><a href="${BASE}/treatments/anti-wrinkle-injections.html">Anti-Wrinkle Injections</a></li>
              <li><a href="${BASE}/treatments/dermal-fillers.html">Dermal Fillers</a></li>
              <li><a href="${BASE}/treatments/prp-hair-rejuvenation.html">PRP Hair Rejuvenation</a></li>
              <li><a href="${BASE}/treatments/weight-loss.html">Weight Loss Programmes</a></li>
              <li><a href="${BASE}/treatments/iv-drip-therapy.html">IV Drip Therapy</a></li>
              <li><a href="${BASE}/treatments/polynucleotides.html">Polynucleotides</a></li>
            </ul>
          </div>

          <div class="footer-col">
            <h4>Company</h4>
            <ul>
              <li><a href="${BASE}/index.html#about">About Us</a></li>
              <li><a href="${BASE}/index.html#doctors">Our Doctors</a></li>
              <li><a href="${BASE}/index.html#testimonials">Reviews</a></li>
              <li><a href="${BASE}/index.html#faq">FAQ</a></li>
              <li><a href="${BASE}/index.html#contact">Contact</a></li>
              <li><a href="${BASE}/privacy.html">Privacy Policy</a></li>
            </ul>
          </div>

          <div class="footer-col">
            <h4>Contact</h4>
            <ul>
              <li><a href="tel:01615317727">📞 0161 531 7727</a></li>
              <li><a href="mailto:altrimedical@gmail.com">✉️ altrimedical@gmail.com</a></li>
              <li>Mon–Fri: 9am–6pm</li>
              <li>Sat: 9am–2pm</li>
            </ul>
            <a href="${BASE}/index.html#contact" class="btn btn-gold btn-sm">Book Now</a>
          </div>
        </div>

        <div class="footer-bottom">
          <p>&copy; 2026 Altri Medical Ltd. All rights reserved. Registered in England & Wales.</p>
          <p class="footer-credit">GMC-Registered · NHS-Trained · Serving Altrincham & Cheshire</p>
        </div>
      </div>
    `;
    document.body.appendChild(footer);
  }

  /* ===== MOBILE STICKY CTA ===== */
  function renderMobileCTA() {
    const cta = document.createElement('div');
    cta.className = 'mobile-cta';
    cta.id = 'mobile-cta';
    cta.innerHTML = `
      <a href="tel:01615317727" class="mobile-cta-btn mobile-cta-call">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
        Call
      </a>
      <a href="${BASE}/index.html#contact" class="mobile-cta-btn mobile-cta-book">
        Book Consultation
      </a>
    `;
    document.body.appendChild(cta);
  }

  /* ===== INIT ===== */
  renderNav();
  renderFooter();
  renderMobileCTA();
})();
