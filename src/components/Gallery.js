export const Gallery = () => {
  return `
    <section id="gallery" class="section gallery">
      <div class="container">
        <h2 class="section-title fade-up">施工事例</h2>
        
        <div class="gallery-slider fade-up delay-200">
          <div class="gallery-track">
            <!-- Item 1 - Reform -->
            <div class="gallery-item">
              <div class="gallery-image">
                <img src="/gallery_new/kitchen-01.jpg" alt="キッチンリフォーム" loading="lazy" />
                <div class="gallery-overlay">
                  <h4>キッチン</h4>
                  <p>使い勝手と美しさを両立</p>
                </div>
              </div>
            </div>
            <!-- Item 2 - Bath -->
            <div class="gallery-item">
              <div class="gallery-image">
                <img src="/gallery_new/bath-01.jpg" alt="バスルーム" loading="lazy" />
                <div class="gallery-overlay">
                  <h4>バスルーム</h4>
                  <p>癒しのバスタイムを演出</p>
                </div>
              </div>
            </div>
             <!-- Item 3 - Exterior -->
            <div class="gallery-item">
              <div class="gallery-image">
                <img src="/gallery_new/exterior-01.jpg" alt="外観・外構" loading="lazy" />
                <div class="gallery-overlay">
                  <h4>外構</h4>
                  <p>家の顔となるアプローチ</p>
                </div>
              </div>
            </div>
             <!-- Item 4 - Deck -->
            <div class="gallery-item">
              <div class="gallery-image">
                <img src="/gallery_new/deck-01.jpg" alt="ウッドデッキ" loading="lazy" />
                <div class="gallery-overlay">
                  <h4>ウッドデッキ</h4>
                  <p>リビングとつながる開放感</p>
                </div>
              </div>
            </div>
            <!-- Item 5 - Steel -->
            <div class="gallery-item">
              <div class="gallery-image">
                <img src="/gallery_new/steel-01.jpg" alt="軽量鉄骨建築" loading="lazy" />
                <div class="gallery-overlay">
                  <h4>軽量鉄骨建築</h4>
                  <p>耐久性と自由度を兼ね備えた建築</p>
                </div>
              </div>
            </div>
            <!-- Item 6 - Living -->
            <div class="gallery-item">
              <div class="gallery-image">
                <img src="/gallery_new/reform-living-01.jpg" alt="リビングリフォーム" loading="lazy" />
                <div class="gallery-overlay">
                  <h4>リビング</h4>
                  <p>家族が集う明るい空間</p>
                </div>
              </div>
            </div>
            <!-- Item 7 - Garage -->
            <div class="gallery-item">
              <div class="gallery-image">
                <img src="/gallery_new/steel-03.jpg" alt="ガレージ" loading="lazy" />
                <div class="gallery-overlay">
                  <h4>ガレージ</h4>
                  <p>愛車を守る堅牢な造り</p>
                </div>
              </div>
            </div>

            <!-- Duplicates for Loop -->
            <div class="gallery-item">
              <div class="gallery-image">
                <img src="/gallery_new/kitchen-01.jpg" alt="キッチンリフォーム" loading="lazy" />
                <div class="gallery-overlay">
                  <h4>キッチン</h4>
                  <p>使い勝手と美しさを両立</p>
                </div>
              </div>
            </div>
            <div class="gallery-item">
              <div class="gallery-image">
                <img src="/gallery_new/bath-01.jpg" alt="バスルーム" loading="lazy" />
                <div class="gallery-overlay">
                  <h4>バスルーム</h4>
                  <p>癒しのバスタイムを演出</p>
                </div>
              </div>
            </div>
            <div class="gallery-item">
              <div class="gallery-image">
                <img src="/gallery_new/exterior-01.jpg" alt="外観・外構" loading="lazy" />
                <div class="gallery-overlay">
                  <h4>外構</h4>
                  <p>家の顔となるアプローチ</p>
                </div>
              </div>
            </div>
            <div class="gallery-item">
              <div class="gallery-image">
                <img src="/gallery_new/deck-01.jpg" alt="ウッドデッキ" loading="lazy" />
                <div class="gallery-overlay">
                  <h4>ウッドデッキ</h4>
                  <p>リビングとつながる開放感</p>
                </div>
              </div>
            </div>
            <div class="gallery-item">
              <div class="gallery-image">
                <img src="/gallery_new/steel-01.jpg" alt="軽量鉄骨建築" loading="lazy" />
                <div class="gallery-overlay">
                  <h4>軽量鉄骨建築</h4>
                  <p>耐久性と自由度を兼ね備えた建築</p>
                </div>
              </div>
            </div>
            <div class="gallery-item">
              <div class="gallery-image">
                <img src="/gallery_new/reform-living-01.jpg" alt="リビングリフォーム" loading="lazy" />
                <div class="gallery-overlay">
                  <h4>リビング</h4>
                  <p>家族が集う明るい空間</p>
                </div>
              </div>
            </div>
            <div class="gallery-item">
              <div class="gallery-image">
                <img src="/gallery_new/steel-03.jpg" alt="ガレージ" loading="lazy" />
                <div class="gallery-overlay">
                  <h4>ガレージ</h4>
                  <p>愛車を守る堅牢な造り</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="gallery-more fade-up delay-300">
          <a href="/gallery.html" class="btn-more">施工事例一覧を見る</a>
        </div>
      </div>
    </section>
    <style>
      .gallery {
        padding: var(--spacing-xl) 0;
        background-color: var(--color-bg-white);
        overflow: hidden; /* Prevent horizontal scroll */
      }
      
      .section-subtitle {
        text-align: center;
        color: var(--color-text-secondary);
        margin-bottom: 3rem;
        letter-spacing: 0.1em;
        font-size: 0.9rem;
      }

      .gallery-slider {
        width: 100%;
        margin-bottom: 3rem;
        overflow: hidden;
      }

      .gallery-track {
        display: flex;
        width: max-content;
        animation: scroll-left 40s linear infinite;
      }

      .gallery-track:hover {
        animation-play-state: paused;
      }

      @keyframes scroll-left {
        0% { transform: translateX(0); }
        100% { transform: translateX(-50%); }
      }

      .gallery-item {
        position: relative;
        overflow: hidden;
        cursor: pointer;
        height: 300px;
        width: 400px; /* Fixed width for slideshow */
        margin-right: 2rem;
        flex-shrink: 0;
      }

      .gallery-image {
        width: 100%;
        height: 100%;
      }

      .gallery-image img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 0.6s ease;
      }

      .gallery-item:hover .gallery-image img {
        transform: scale(1.1);
      }

      .gallery-overlay {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        background: linear-gradient(to top, rgba(0,0,0,0.95), rgba(0,0,0,0.7) 50%, transparent);
        padding: 2rem 1.5rem;
        color: #ffffff;
        transform: translateY(100%);
        transition: transform 0.4s ease;
      }

      .gallery-item:hover .gallery-overlay {
        transform: translateY(0);
      }

      .gallery-overlay h4 {
        font-size: 1.1rem;
        margin-bottom: 0.5rem;
        font-weight: 600;
        text-shadow: 0 2px 4px rgba(0,0,0,0.5);
      }

      .gallery-overlay p {
        font-size: 0.85rem;
        text-shadow: 0 1px 2px rgba(0,0,0,0.5);
      }

      .gallery-more {
        text-align: center;
      }

      .btn-more {
        display: inline-block;
        padding: 1rem 3rem;
        border: 1px solid var(--color-text-primary);
        color: var(--color-text-primary);
        text-decoration: none;
        transition: all 0.3s ease;
        letter-spacing: 0.1em;
      }

      .btn-more:hover {
        background-color: var(--color-text-primary);
        color: #fff;
      }

      @media (max-width: 768px) {
        .gallery-item {
          width: 280px;
          height: 220px;
          margin-right: 1rem;
        }
      }
    </style>
  `;
}


