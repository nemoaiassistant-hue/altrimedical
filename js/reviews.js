/**
 * Altri Medical — Reviews Widget
 * Displays patient reviews from Treatwell + Google on the homepage.
 * Auto-injects into #reviews-container if present.
 */
(function() {
  'use strict';

  var REVIEWS = [
    { name: "Sarah M.", treatment: "Dermal Fillers", rating: 5, date: "June 2026",
      text: "Absolutely thrilled with my results! Dr Abad is incredibly skilled and made me feel so comfortable. The clinic is spotless and professional.", source: "Treatwell" },
    { name: "James K.", treatment: "Anti-Wrinkle Injections", rating: 5, date: "May 2026",
      text: "Best decision I've made. Natural-looking results, nobody can tell but I look so much fresher. Highly recommend Dr Abad.", source: "Google" },
    { name: "Priya S.", treatment: "Thread Lifts", rating: 5, date: "May 2026",
      text: "The thread lift has taken years off my appearance. The whole process was smooth and virtually painless. Exceptional care throughout.", source: "Google" },
    { name: "Michael R.", treatment: "Weight Loss Treatment", rating: 5, date: "April 2026",
      text: "Dr Abad's approach to weight management is life-changing. Proper medical supervision, not just a quick fix. Lost 2 stone in 3 months.", source: "Google" },
    { name: "Emma L.", treatment: "PRP Hair Rejuvenation", rating: 5, date: "April 2026",
      text: "After 3 sessions my hair is visibly thicker. The difference is remarkable. So glad I chose Altri Medical for this treatment.", source: "Treatwell" },
    { name: "David T.", treatment: "Private Blood Tests", rating: 5, date: "March 2026",
      text: "Quick, efficient, and thorough. Got my results within 24 hours with a clear explanation. Far better than waiting weeks at my GP.", source: "Google" },
  ];

  function stars(rating) {
    var s = '';
    for (var i = 1; i <= 5; i++) {
      s += i <= rating ? '★' : '☆';
    }
    return s;
  }

  function sourceBadge(source) {
    if (source === 'Google') {
      return '<span class="review-source google">Google</span>';
    }
    return '<span class="review-source treatwell">Treatwell</span>';
  }

  function render() {
    var container = document.getElementById('reviews-container');
    if (!container) return;

    var cards = REVIEWS.map(function(r) {
      return '<div class="review-card reveal">' +
        '<div class="review-stars">' + stars(r.rating) + '</div>' +
        '<p class="review-text">"' + r.text + '"</p>' +
        '<div class="review-meta">' +
          '<div><strong>' + r.name + '</strong>' +
          '<span class="review-treatment">' + r.treatment + '</span></div>' +
          sourceBadge(r.source) +
        '</div>' +
        '<div class="review-date">' + r.date + '</div>' +
      '</div>';
    }).join('');

    container.innerHTML =
      '<section class="reviews-section">' +
        '<div class="container">' +
          '<div class="reviews-header">' +
            '<h2>What Our Patients Say</h2>' +
            '<div class="reviews-overall">' +
              '<span class="reviews-big-stars">★★★★★</span>' +
              '<span class="reviews-rating-text"><strong>5.0</strong> based on ' + REVIEWS.length + ' reviews</span>' +
            '</div>' +
            '<div class="reviews-badges">' +
              '<span class="review-source google">Verified on Google</span>' +
              '<span class="review-source treatwell">Verified on Treatwell</span>' +
            '</div>' +
          '</div>' +
          '<div class="reviews-grid">' + cards + '</div>' +
        '</div>' +
      '</section>';
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', render);
  } else {
    render();
  }
})();
