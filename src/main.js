import './style.css';
import { Header } from './components/Header.js';
import { Hero, initHeroAnimation } from './components/Hero.js';
import { About } from './components/About.js';
import { Services } from './components/Services.js';
import { News } from './components/News.js';
import { Company } from './components/Company.js';
import { Contact } from './components/Contact.js';
import { Footer } from './components/Footer.js';
import { Loader } from './components/Loader.js';
import { Reviews } from './components/Reviews.js';
import { CeoMessage } from './components/CeoMessage.js';
import { Facilities } from './components/Facilities.js';
import { StickyFooter } from './components/StickyFooter.js';
import { CtaSection } from './components/CtaSection.js';
import { BeforeAfter, initBeforeAfterSliders } from './components/BeforeAfter.js';
import { AwardBanner } from './components/AwardBanner.js';

// Render App
document.querySelector('#app').innerHTML = `
  ${Header()}
  <main>
    ${Hero()}
    ${AwardBanner()}
    ${BeforeAfter()}
    ${About()}
    ${CtaSection()}
    ${Services()}
    ${Facilities()}
    ${News()}
    ${Reviews()}
    ${CeoMessage()}
    ${Company()}
    ${Contact()}
  </main>
  ${Footer()}
  ${StickyFooter()}
`;

// Initialize Hero Animation
setTimeout(initHeroAnimation, 100);

// Initialize Before/After Sliders
setTimeout(initBeforeAfterSliders, 200);

// Mobile Menu Logic
const menuToggle = document.querySelector('.mobile-menu-toggle');
const nav = document.querySelector('.nav');

if (menuToggle && nav) {
  menuToggle.addEventListener('click', () => {
    nav.classList.toggle('active');
    menuToggle.classList.toggle('active');
  });

  // Close menu when clicking a link
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('active');
      menuToggle.classList.remove('active');
    });
  });
}

// Smooth Scroll for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

// Gallery Tabs Logic
const galleryTabs = document.querySelectorAll('.gallery-tab');
if (galleryTabs.length > 0) {
  galleryTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      // Remove active class from all tabs
      galleryTabs.forEach(t => t.classList.remove('active'));
      // Add active class to clicked tab
      tab.classList.add('active');

      // Hide all panels
      document.querySelectorAll('.gallery-panel').forEach(panel => {
        panel.classList.remove('active');
      });

      // Show target panel
      const targetId = tab.getAttribute('data-target');
      const targetPanel = document.getElementById(targetId);
      if (targetPanel) {
        targetPanel.classList.add('active');
      }
    });
  });
}

// Scroll Animation Observer
const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target); // Only animate once
    }
  });
}, observerOptions);

// Observe all elements with animation classes
document.querySelectorAll('.fade-in, .fade-up, .fade-left, .fade-right, .zoom-in, .reveal-image').forEach(el => {
  observer.observe(el);
});

// Postal Code Auto-fill Logic
const postalInput = document.getElementById('postal-code');
const addressInput = document.getElementById('address');

if (postalInput && addressInput) {
  postalInput.addEventListener('input', async (e) => {
    const zipcode = e.target.value.replace(/[^\d]/g, ''); // Remove non-digits

    if (zipcode.length === 7) {
      addressInput.value = '住所を検索中...'; // Loading feedback
      try {
        const response = await fetch(`https://zipcloud.ibsnet.co.jp/api/search?zipcode=${zipcode}`);
        const data = await response.json();

        if (data.status === 200 && data.results) {
          const result = data.results[0];
          const fullAddress = `${result.address1}${result.address2}${result.address3}`;
          addressInput.value = fullAddress;
        } else {
          addressInput.value = ''; // Clear if not found
          console.warn('Address not found or API error');
          alert('住所が見つかりませんでした。正しい郵便番号かご確認ください。');
        }
      } catch (error) {
        console.error('Error fetching address:', error);
        addressInput.value = '';
        alert('住所検索に失敗しました。');
      }
    }
  });
}

// Phone Number Auto-format Logic
const phoneInput = document.getElementById('phone');
if (phoneInput) {
  phoneInput.addEventListener('input', (e) => {
    let value = e.target.value.replace(/[^\d]/g, ''); // Remove non-digits
    let formatted = value;

    if (value.length > 0) {
      // Format 09012345678 -> 090-1234-5678 or 0312345678 -> 03-1234-5678
      if (value.length > 10) { // Mobile or long landline
        formatted = value.replace(/^(\d{3})(\d{4})(\d{4})$/, '$1-$2-$3');
      } else if (value.length === 10) { // Landline
        formatted = value.replace(/^(\d{2})(\d{4})(\d{4})$/, '$1-$2-$3');
        // Handle Tokyo/Osaka 03/06 special cases better if needed, 
        // but consistent hyphenation is good for now.
        // Better regex for standard Japanese numbers:
        if (value.startsWith('03') || value.startsWith('06')) {
          formatted = value.replace(/^(\d{2})(\d{4})(\d{4})$/, '$1-$2-$3');
        } else {
          // General 3-3-4 pattern for non-major city landlines if 10 digits? 
          // Most are 2-4-4 (tokyo) or 3-3-4 or 4-2-4. 
          // Let's stick to a simple strategy: insert hyphens as they type?
          // "Don't hyphenate" request -> actually user said "Don't need to type hyphens".
          // So we insert them automatically.

          // Simple approach: 3-4-4 for 11 digits, 2-4-4 for 10 digits (common for Tokyo).
        }
      }

      // Let's use a simpler progressive formatting for better ux while typing
    }
  });

  // Re-implementing with a blur event or simple formatter to avoid fighting cursor?
  // User asked "Don't need to type hyphens", so formatting on blur is safest, 
  // or simple replace on change.
  // Let's do simple formatting on blur to be less intrusive, or live if requested.
  // "Text input: auto format" usually means live.

  phoneInput.addEventListener('blur', (e) => {
    let value = e.target.value.replace(/[^\d]/g, '');
    if (value.length === 11) {
      e.target.value = value.replace(/^(\d{3})(\d{4})(\d{4})$/, '$1-$2-$3');
    } else if (value.length === 10) {
      // Assumption: 03-xxxx-xxxx
      e.target.value = value.replace(/^(\d{2,3})(\d{3,4})(\d{4})$/, (match, p1, p2, p3) => {
        return `${p1}-${p2}-${p3}`;
      });
    }
  });
}

// Email Domain Helper Logic
const emailInput = document.getElementById('email');
const domainBtns = document.querySelectorAll('.domain-btn');

if (emailInput && domainBtns.length > 0) {
  domainBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const domain = btn.getAttribute('data-domain');
      const currentVal = emailInput.value;

      // If empty, just add domain (UX choice? usually not useful)
      // If already has @, maybe replace? Or just append if incomplete?
      // Simple logic: Append domain to current value if no @ exists.

      if (!currentVal.includes('@')) {
        emailInput.value = currentVal + domain;
      } else {
        // If @ exists, replace everything after @
        const parts = currentVal.split('@');
        emailInput.value = parts[0] + domain;
      }
      emailInput.focus();
    });
  });
}
