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
          <a href="https://wa.me/447311350196" target="_blank" rel="noopener" class="nav-whatsapp" aria-label="WhatsApp us">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
          </a>
          <a href="tel:01615317727" class="nav-phone" aria-label="Call us">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            <span>0161 531 7727</span>
          </a>
          <a href="https://widget.treatwell.co.uk/place/altri-medical/" target="_blank" rel="noopener" class="btn btn-gold btn-sm">Book Consultation</a>
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
              <li><a href="https://wa.me/447311350196" target="_blank" rel="noopener">💬 WhatsApp: 07311 350196</a></li>
              <li>Mon–Fri: 9am–6pm</li>
              <li>Sat: 9am–2pm</li>
            </ul>
            <a href="https://widget.treatwell.co.uk/place/altri-medical/" target="_blank" rel="noopener" class="btn btn-gold btn-sm">Book Now</a>
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
      <a href="https://wa.me/447311350196" target="_blank" rel="noopener" class="mobile-cta-btn mobile-cta-whatsapp" aria-label="WhatsApp us">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
        WhatsApp
      </a>
      <a href="https://widget.treatwell.co.uk/place/altri-medical/" target="_blank" rel="noopener" class="mobile-cta-btn mobile-cta-book">
        Book
      </a>
    `;
    document.body.appendChild(cta);
  }

  /* ===== INIT ===== */
  renderNav();
  renderFooter();
  renderMobileCTA();
})();
