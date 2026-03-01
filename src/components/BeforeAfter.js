import Swiper from 'swiper';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export const BeforeAfter = () => {
  return `
    <section id="before-after" class="section before-after-section">
      <div class="container">
        <div class="intro-block fade-up">
          <h3 class="intro-title">信頼と実績の半世紀</h3>
          <p class="intro-text">
            当社は、昭和40年6月の創業以来、一般木造建築や鉄骨・鉄筋構造建築からプレハブ住宅の製造・建築まで、幅広い分野で事業を展開し、皆様のご要望に応えられるよう日々努力してまいりました。
          </p>
        </div>
        <div class="ba-section-header fade-up">
          <h2 class="ba-section-title">施工事例</h2>
          <div class="ba-section-line"></div>
          <p class="ba-section-desc">施工前後の変化をご覧ください</p>
        </div>
        
        <div class="ba-slider-container fade-up delay-200">
          <!-- Swiper -->
          <div class="swiper ba-swiper">
            <div class="swiper-wrapper">

              <!-- Case 1: B様邸 和室 -->
              <div class="swiper-slide">
                <div class="ba-case">
                  <div class="ba-case-header">
                    <h3 class="ba-case-title">B様邸 和室リフォーム</h3>
                  </div>
                  <div class="ba-pair">
                    <div class="ba-side">
                      <div class="ba-side-label ba-side-label--before">Before</div>
                      <div class="ba-side-img">
                        <img src="/ribinngu/B様邸　和室　前.jpg" alt="B様邸 和室 施工前" loading="lazy" />
                      </div>
                    </div>
                    <div class="ba-arrow-divider">
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
                    </div>
                    <div class="ba-side">
                      <div class="ba-side-label ba-side-label--after">After</div>
                      <div class="ba-side-img">
                        <img src="/ribinngu/B様邸　和室　後.jpg" alt="B様邸 和室 施工後" loading="lazy" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Case 2: S様邸 浴室 -->
              <div class="swiper-slide">
                <div class="ba-case">
                  <div class="ba-case-header">
                    <h3 class="ba-case-title">S様邸 浴室リフォーム</h3>
                  </div>
                  <div class="ba-pair">
                    <div class="ba-side">
                      <div class="ba-side-label ba-side-label--before">Before</div>
                      <div class="ba-side-img">
                        <img src="/施工事例/S様邸　浴室　前.jpg" alt="S様邸 浴室 施工前" loading="lazy" />
                      </div>
                    </div>
                    <div class="ba-arrow-divider">
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
                    </div>
                    <div class="ba-side">
                      <div class="ba-side-label ba-side-label--after">After</div>
                      <div class="ba-side-img">
                        <img src="/施工事例/S様邸　浴室　後.jpg" alt="S様邸 浴室 施工後" loading="lazy" class="brighten-img" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Case 3: H様邸 屋根カバー工法 -->
              <div class="swiper-slide">
                <div class="ba-case">
                  <div class="ba-case-header">
                    <h3 class="ba-case-title">H様邸 屋根カバー工法</h3>
                  </div>
                  <div class="ba-pair">
                    <div class="ba-side">
                      <div class="ba-side-label ba-side-label--before">Before</div>
                      <div class="ba-side-img">
                        <img src="/★丸野/H様邸屋根_カバー工法/600099505697718292.jpg" alt="H様邸 屋根 施工前" loading="lazy" />
                      </div>
                    </div>
                    <div class="ba-arrow-divider">
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
                    </div>
                    <div class="ba-side">
                      <div class="ba-side-label ba-side-label--after">After</div>
                      <div class="ba-side-img">
                        <img src="/★丸野/H様邸屋根_カバー工法/600099522172944526.jpg" alt="H様邸 屋根 施工後" loading="lazy" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
            <!-- Pagination -->
            <div class="swiper-pagination ba-pagination"></div>
            <!-- Navigation -->
            <div class="swiper-button-prev ba-button-prev"></div>
            <div class="swiper-button-next ba-button-next"></div>
          </div>
        </div>

        <div class="ba-more-wrapper fade-up delay-300">
          <a href="/gallery.html" class="ba-more-btn">
            施工事例をもっと見る →
          </a>
        </div>
      </div>
    </section>
    <style>
      .before-after-section {
        padding: var(--spacing-xl) 0;
        background: linear-gradient(180deg, var(--color-bg-secondary) 0%, #f8f6f3 100%);
      }

      /* Intro Text Block */
      .intro-block {
        text-align: center;
        max-width: 800px;
        margin: 0 auto 3rem;
        padding-bottom: 1.5rem;
        border-bottom: 1px solid var(--color-border);
      }

      .intro-title {
        font-size: 1.5rem;
        margin-bottom: 1.5rem;
        font-weight: 500;
        letter-spacing: 0.1em;
        color: var(--color-text-primary);
      }

      .intro-text {
        line-height: 2.2;
        color: var(--color-text-secondary);
        text-align: justify;
      }
      
      @media (max-width: 768px) {
        .intro-title {
            font-size: 1.3rem;
        }
        
        .intro-text {
            text-align: left;
        }
      }

      .ba-section-header {
        text-align: center;
        margin-bottom: 3rem;
      }

      .ba-section-title {
        font-family: var(--font-serif);
        font-size: clamp(2rem, 5vw, 2.8rem);
        font-weight: 600;
        letter-spacing: 0.15em;
        color: var(--color-text-primary);
        margin: 0 0 1.5rem 0;
      }

      .ba-section-line {
        width: 80px;
        height: 2px;
        background: linear-gradient(90deg, transparent, var(--color-primary), transparent);
        margin: 0 auto 1.5rem;
      }

      .ba-section-desc {
        font-size: 1rem;
        color: var(--color-text-secondary);
        line-height: 1.8;
        margin: 0;
      }

      /* ===== Side-by-Side Layout ===== */
      .ba-cases-wrapper {
        display: flex;
        flex-direction: column;
        gap: 3rem;
      }

      .ba-case {
        background: var(--color-bg-white);
        border-radius: 12px;
        overflow: hidden;
        box-shadow: 0 4px 24px rgba(0,0,0,0.06);
        transition: transform 0.3s ease, box-shadow 0.3s ease;
      }

      .ba-case:hover {
        transform: translateY(-4px);
        box-shadow: 0 12px 40px rgba(0,0,0,0.1);
      }

      .ba-case-header {
        padding: 1.5rem 2rem;
        border-bottom: 1px solid var(--color-border);
      }

      .ba-case-title {
        font-size: 1.2rem;
        font-weight: 600;
        letter-spacing: 0.05em;
        margin: 0;
      }

      .ba-pair {
        display: flex;
        align-items: center;
        position: relative;
      }

      .ba-side {
        flex: 1;
        position: relative;
        overflow: hidden;
      }

      .ba-side-label {
        position: absolute;
        top: 1rem;
        z-index: 2;
        padding: 0.4rem 1.2rem;
        border-radius: 20px;
        font-size: 0.8rem;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 1.5px;
      }

      .ba-side-label--before {
        left: 1rem;
        background: linear-gradient(135deg, #555 0%, #333 100%);
        color: white;
      }

      .ba-side-label--after {
        left: 1rem;
        background: linear-gradient(135deg, var(--color-accent) 0%, #c4956a 100%);
        color: white;
      }

      .ba-side-img {
        width: 100%;
        overflow: hidden;
      }

      .ba-side-img img {
        width: 100%;
        height: auto;
        display: block;
        transition: transform 0.5s ease, filter 0.3s ease;
      }

      .brighten-img {
        filter: brightness(1.08) contrast(1.05);
      }

      .brighten-img-ultra {
        filter: brightness(1.2) contrast(1.3) saturate(0.7); /* Whitening/Cleaning effect, reduced brightness */
      }

      .ba-side:hover .ba-side-img img {
        transform: scale(1.03);
      }

      /* Arrow divider between Before/After */
      .ba-arrow-divider {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 56px;
        flex-shrink: 0;
        background: var(--color-bg-white);
        color: var(--color-accent);
        z-index: 1;
        position: relative;
      }

      .ba-arrow-divider::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 1px;
        height: 100%;
        background: var(--color-border);
      }

      .ba-arrow-divider::after {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        width: 1px;
        height: 100%;
        background: var(--color-border);
      }

      .ba-arrow-divider svg {
        animation: ba-arrow-pulse 2s ease-in-out infinite;
      }

      @keyframes ba-arrow-pulse {
        0%, 100% { transform: translateX(0); opacity: 1; }
        50% { transform: translateX(4px); opacity: 0.6; }
      }

      /* More Button Styles */
      .ba-more-wrapper {
        text-align: center;
        margin-top: 3rem;
      }

      .ba-more-btn {
        display: inline-block;
        padding: 1.2rem 3rem;
        border: 2px solid #e67e22;
        color: #e67e22;
        text-decoration: none;
        font-size: 1.1rem;
        font-weight: 600;
        letter-spacing: 0.08em;
        transition: all 0.3s ease;
      }

      .ba-more-btn:hover {
        background: #e67e22;
        color: white;
      }

      /* --- Swiper Styles --- */
      .ba-slider-container {
        position: relative;
        padding: 0 40px; /* Space for navigation arrows */
      }

      .ba-swiper {
        padding-bottom: 3rem; /* Space for pagination */
      }

      .swiper-slide {
        height: auto;
      }

      /* Navigation Arrows */
      .ba-button-prev,
      .ba-button-next {
        color: var(--color-accent);
        background: var(--color-bg-white);
        width: 44px;
        height: 44px;
        border-radius: 50%;
        box-shadow: 0 4px 12px rgba(0,0,0,0.1);
        top: 40%;
      }

      .ba-button-prev:after,
      .ba-button-next:after {
        font-size: 1.2rem;
        font-weight: bold;
      }

      .ba-button-prev {
        left: -10px;
      }

      .ba-button-next {
        right: -10px;
      }

      /* Pagination Dots */
      .ba-pagination {
        bottom: 0 !important;
      }

      .ba-pagination .swiper-pagination-bullet {
        width: 10px;
        height: 10px;
        background: var(--color-text-secondary);
        opacity: 0.5;
        transition: all 0.3s ease;
      }

      .ba-pagination .swiper-pagination-bullet-active {
        opacity: 1;
        background: var(--color-accent);
        width: 24px;
        border-radius: 5px;
      }

      /* --- Mobile --- */
      @media (max-width: 768px) {
        .before-after-section {
          padding: var(--spacing-md) 0;
        }

        .ba-slider-container {
          padding: 0; /* Remove padding on mobile */
        }

        .ba-button-prev,
        .ba-button-next {
          display: none; /* Hide arrows on mobile, rely on swipe */
        }

        .intro-block {
          margin: 0 auto 2rem;
          padding-bottom: 1rem;
        }

        .intro-title {
          font-size: 1.2rem;
        }

        .intro-text {
          text-align: left;
          font-size: 0.95rem;
        }

        .ba-section-header {
          margin-bottom: 2rem;
        }

        .ba-section-title {
          font-size: 1.8rem;
        }

        .ba-pair {
          flex-direction: column;
        }

        .ba-arrow-divider {
          width: 100%;
          height: 44px;
          flex-direction: row;
        }

        .ba-arrow-divider::before {
          top: 0;
          left: 0;
          width: 100%;
          height: 1px;
        }

        .ba-arrow-divider::after {
          top: auto;
          bottom: 0;
          right: 0;
          width: 100%;
          height: 1px;
        }

        .ba-arrow-divider svg {
          transform: rotate(90deg);
          animation: ba-arrow-pulse-mobile 2s ease-in-out infinite;
        }

        @keyframes ba-arrow-pulse-mobile {
          0%, 100% { transform: rotate(90deg) translateX(0); opacity: 1; }
          50% { transform: rotate(90deg) translateX(4px); opacity: 0.6; }
        }

        .ba-case-header {
          padding: 1rem 1.2rem;
        }

        .ba-case-title {
          font-size: 1.05rem;
        }

        .ba-side-label {
          padding: 0.3rem 0.9rem;
          font-size: 0.7rem;
        }

        .ba-more-btn {
          width: 100%;
          padding: 1rem;
          font-size: 0.95rem;
          text-align: center;
          box-sizing: border-box;
        }
      }
    </style>
  `;
};

export const initBeforeAfterSliders = () => {
  new Swiper('.ba-swiper', {
    modules: [Navigation, Pagination, Autoplay],
    slidesPerView: 1,
    spaceBetween: 30,
    centeredSlides: true,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.ba-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.ba-button-next',
      prevEl: '.ba-button-prev',
    },
    breakpoints: {
      1024: {
        slidesPerView: 1.2, /* Show a bit of the next/prev slide on large screens */
        spaceBetween: 40,
      }
    }
  });
};
