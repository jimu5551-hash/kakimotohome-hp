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
        
        <div class="ba-cases-wrapper fade-up delay-200">

          <!-- Case 1: B様邸 和室 -->
          <div class="ba-case">
            <div class="ba-case-header">
              <h3 class="ba-case-title">B様邸 和室リフォーム</h3>
            </div>
            <div class="ba-compare-wrapper">
              <div class="ba-bg-blur" style="background-image: url('/ribinngu/B様邸　和室　後.jpg')"></div>
              <img src="/ribinngu/B様邸　和室　後.jpg" alt="B様邸 和室 施工後" class="ba-img-after" loading="lazy" />
              <img src="/ribinngu/B様邸　和室　前.jpg" alt="B様邸 和室 施工前" class="ba-img-before" loading="lazy" />
              <div class="ba-label ba-label-before">Before</div>
              <div class="ba-label ba-label-after">After</div>
              <div class="ba-compare-handle">
                <div class="ba-handle-line"></div>
                <div class="ba-handle-button">
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l-3 3 3 3m8-6l3 3-3 3"></path></svg>
                </div>
              </div>
              <input type="range" min="0" max="100" value="50" class="ba-compare-range" aria-label="Before/After Image Comparison Slider">
            </div>
          </div>

          <!-- Case 2: S様邸 浴室 -->
          <div class="ba-case">
            <div class="ba-case-header">
              <h3 class="ba-case-title">S様邸 浴室リフォーム</h3>
            </div>
            <div class="ba-compare-wrapper">
              <div class="ba-bg-blur" style="background-image: url('/施工事例/S様邸　浴室　後.jpg')"></div>
              <img src="/施工事例/S様邸　浴室　後.jpg" alt="S様邸 浴室 施工後" class="ba-img-after brighten-img" loading="lazy" />
              <img src="/施工事例/S様邸　浴室　前.jpg" alt="S様邸 浴室 施工前" class="ba-img-before" loading="lazy" />
              <div class="ba-label ba-label-before">Before</div>
              <div class="ba-label ba-label-after">After</div>
              <div class="ba-compare-handle">
                <div class="ba-handle-line"></div>
                <div class="ba-handle-button">
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l-3 3 3 3m8-6l3 3-3 3"></path></svg>
                </div>
              </div>
              <input type="range" min="0" max="100" value="50" class="ba-compare-range" aria-label="Before/After Image Comparison Slider">
            </div>
          </div>

          <!-- Case 3: H様邸 屋根カバー工法 -->
          <div class="ba-case">
            <div class="ba-case-header">
              <h3 class="ba-case-title">H様邸 屋根カバー工法</h3>
            </div>
            <div class="ba-compare-wrapper">
              <div class="ba-bg-blur" style="background-image: url('/★丸野/H様邸屋根_カバー工法/600099522172944526.jpg')"></div>
              <img src="/★丸野/H様邸屋根_カバー工法/600099522172944526.jpg" alt="H様邸 屋根 施工後" class="ba-img-after" loading="lazy" />
              <img src="/★丸野/H様邸屋根_カバー工法/600099505697718292.jpg" alt="H様邸 屋根 施工前" class="ba-img-before" loading="lazy" />
              <div class="ba-label ba-label-before">Before</div>
              <div class="ba-label ba-label-after">After</div>
              <div class="ba-compare-handle">
                <div class="ba-handle-line"></div>
                <div class="ba-handle-button">
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l-3 3 3 3m8-6l3 3-3 3"></path></svg>
                </div>
              </div>
              <input type="range" min="0" max="100" value="50" class="ba-compare-range" aria-label="Before/After Image Comparison Slider">
            </div>
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

      /* ===== Slider Layout ===== */
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

      /* Image Comparison Slider core */
      .ba-compare-wrapper {
        position: relative;
        width: 100%;
        /* Use a standard landscape ratio, but allow it to adjust based on width */
        aspect-ratio: 16 / 9; 
        max-height: 700px;
        overflow: hidden;
        background-color: #1a1a1a; /* Dark fallback background */
      }

      .ba-bg-blur {
        position: absolute;
        top: -10%;
        left: -10%;
        width: 120%;
        height: 120%;
        background-size: cover;
        background-position: center;
        filter: blur(20px) brightness(0.6);
        z-index: 0;
        pointer-events: none;
      }

      .ba-img-after, .ba-img-before {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: contain; /* Changed from cover to contain to prevent any cropping */
        object-position: center;
        pointer-events: none; /* Let range input handle clicks */
        z-index: 1;
      }

      .ba-img-before {
        clip-path: polygon(0 0, 50% 0, 50% 100%, 0 100%);
        z-index: 2;
      }
      
      .brighten-img {
        filter: brightness(1.08) contrast(1.05);
      }

      /* Labels */
      .ba-label {
        position: absolute;
        top: 20px;
        z-index: 4;
        background: rgba(0,0,0,0.6);
        color: white;
        padding: 6px 16px;
        border-radius: 20px;
        font-size: 0.9rem;
        font-weight: bold;
        pointer-events: none;
        letter-spacing: 0.1em;
        backdrop-filter: blur(4px);
      }

      .ba-label-before { left: 20px; }
      .ba-label-after { right: 20px; }

      /* Invisible Range Input */
      .ba-compare-range {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 10;
        opacity: 0;
        cursor: ew-resize;
        margin: 0;
      }

      /* Handle UI */
      .ba-compare-handle {
        position: absolute;
        top: 0;
        left: 50%;
        width: 4px;
        height: 100%;
        background-color: white;
        transform: translateX(-50%);
        z-index: 5;
        pointer-events: none;
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 0 0 10px rgba(0,0,0,0.3);
      }

      .ba-handle-button {
        width: 48px;
        height: 48px;
        background-color: white;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 0 2px 10px rgba(0,0,0,0.2);
        color: var(--color-accent);
        z-index: 6;
      }

      .ba-handle-button svg {
        width: 24px;
        height: 24px;
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

      /* --- Mobile --- */
      @media (max-width: 768px) {
        .before-after-section {
          padding: var(--spacing-md) 0;
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

        .ba-case-header {
          padding: 1rem 1.2rem;
        }

        .ba-case-title {
          font-size: 1.05rem;
        }

        .ba-compare-wrapper {
          aspect-ratio: 4 / 3; /* Taller ratio for mobile to ensure enough touch area */
          max-height: 400px;
        }
        
        .ba-label {
          padding: 4px 12px;
          font-size: 0.8rem;
          top: 10px;
        }

        .ba-label-before { left: 10px; }
        .ba-label-after { right: 10px; }

        .ba-handle-button {
          width: 36px;
          height: 36px;
        }

        .ba-handle-button svg {
          width: 18px;
          height: 18px;
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
  const sliders = document.querySelectorAll('.ba-compare-wrapper');

  sliders.forEach(slider => {
    const range = slider.querySelector('.ba-compare-range');
    const beforeImg = slider.querySelector('.ba-img-before');
    const handle = slider.querySelector('.ba-compare-handle');

    if (range && beforeImg && handle) {
      const updateSlider = () => {
        const val = range.value;
        beforeImg.style.clipPath = `polygon(0 0, ${val}% 0, ${val}% 100%, 0 100%)`;
        handle.style.left = `${val}%`;
      };

      range.addEventListener('input', updateSlider);

      // Initialize layout
      updateSlider();
    }
  });
};
