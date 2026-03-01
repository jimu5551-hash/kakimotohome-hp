export const Facilities = () => {
  return `
    <section id="facilities" class="section facilities">
      <div class="container">
        <h2 class="section-title fade-up">自社のご紹介</h2>
        
        <!-- Factory Section -->
        <div class="facility-item fade-up">
          <div class="facility-image-wrapper">
            <img src="/自社工場/factory_new.jpg" alt="自社工場" />
          </div>
          <div class="facility-content">
            <h3 class="facility-title">自社工場完備</h3>
            <p class="facility-desc">
              当社は自社工場を完備しており、熟練の職人が建具の加工や調整を行います。<br>
              既製品では対応が難しい細かな寸法調整や、特殊な形状への対応も可能です。<br>
              また、急な加工や調整にも迅速に対応できる体制を整えており、施工精度の向上と工期の短縮にも貢献しています。<br>
              「ここを少し調整したい」「ぴったり収めたい」といった建具の調整も、お任せください。
            </p>
          </div>
        </div>

        <!-- Meeting Room Section -->
        <div class="facility-item facility-reverse fade-up delay-200">
          <div class="facility-image-wrapper">
            <img src="/商談部屋/8FD6A7C4-2850-4400-A6C7-5BF86762FC50.jpg" alt="商談スペース" />
          </div>
          <div class="facility-content">
            <h3 class="facility-title">落ち着いた商談スペース</h3>
            <p class="facility-desc">
              お客様にリラックスしてご相談いただけるよう、広々とした商談スペースをご用意しております。<br>
              カタログや豊富なサンプルを実際にお手に取っていただきながら、ゆっくりと理想の住まいについてお話しいただけます。<br>
              プライバシーにも配慮した空間で、他のお客様を気にすることなく、じっくりとお悩みやご要望をお聞かせください。
            </p>
          </div>
        </div>

      </div>
    </section>
    <style>
      .facilities {
        padding: var(--spacing-xl) 0;
        background-color: var(--color-bg-white);
      }

      .facility-item {
        display: flex;
        align-items: center;
        gap: 4rem;
        margin-bottom: 6rem;
      }

      .facility-item:last-child {
        margin-bottom: 0;
      }

      .facility-reverse {
        flex-direction: row-reverse;
      }

      .facility-image-wrapper {
        flex: 1;
        height: 400px;
        overflow: hidden;
        border-radius: 2px;
        box-shadow: var(--shadow-md);
      }

      .facility-image-wrapper img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 0.6s ease;
      }

      .facility-item:hover .facility-image-wrapper img {
        transform: scale(1.05);
      }

      .facility-content {
        flex: 1;
      }

      .facility-title {
        font-size: 1.8rem;
        margin-bottom: 1.5rem;
        font-weight: 500;
        letter-spacing: 0.1em;
        color: var(--color-text-primary);
        position: relative;
        padding-bottom: 1rem;
      }
      
      .facility-title::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 60px;
        height: 1px;
        background-color: var(--color-accent);
      }

      .facility-desc {
        font-size: 1rem;
        color: var(--color-text-secondary);
        line-height: 2.2;
        text-align: justify;
      }

      @media (max-width: 900px) {
        .facility-item {
          flex-direction: column;
          gap: 2rem;
          margin-bottom: 4rem;
        }

        .facility-reverse {
          flex-direction: column;
        }

        .facility-image-wrapper {
          width: 100%;
          height: 300px;
        }
        
        .facility-title::after {
          left: 50%;
          transform: translateX(-50%);
        }
        
        .facility-title {
          text-align: center;
        }
      }
    </style>
  `;
}
