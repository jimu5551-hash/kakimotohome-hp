export const AwardBanner = () => {
  return `
    <section class="award-banner-section">
      <div class="container">
        <div class="award-banner-inner">
          <div class="award-banner-top">
            <p class="award-banner-year">2024年度</p>
            <div class="award-banner-title-row">
              <img src="https://www.homepro.jp/popup/image/award/cs_small2024.gif" alt="ホームプロ 顧客満足優良会社 2024" width="160" height="58" class="award-banner-badge" />
              <h3 class="award-banner-title">顧客満足優良会社</h3>
            </div>
          </div>
          <p class="award-banner-desc">ホームプロにおいて、お客様からの高い評価をいただき、顧客満足優良会社として表彰されました。</p>
        </div>
      </div>
    </section>
    <style>
      .award-banner-section {
        padding: 2rem 0;
        background: linear-gradient(135deg, #faf9f6 0%, #f4f0e6 100%);
        position: relative;
        overflow: hidden;
      }

      .award-banner-section::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 1px;
        background: linear-gradient(90deg, transparent, rgba(216,141,45,0.3), transparent);
      }

      .award-banner-inner {
        text-align: center;
        padding: 1.5rem 2.5rem;
        background: rgba(255,255,255,0.85);
        border-radius: 12px;
        box-shadow: 
          0 4px 20px rgba(0,0,0,0.04),
          inset 0 1px 0 rgba(255,255,255,0.8);
        border: 1px solid rgba(216,141,45,0.15);
      }

      .award-banner-top {
        margin-bottom: 0.8rem;
      }

      .award-banner-year {
        font-size: 0.85rem;
        color: var(--color-accent);
        font-weight: 600;
        letter-spacing: 0.15em;
        margin-bottom: 0.5rem;
      }

      .award-banner-title-row {
        display: inline-flex;
        align-items: center;
        gap: 1.2rem;
        justify-content: center;
      }

      .award-banner-badge {
        flex-shrink: 0;
      }

      .award-banner-title {
        font-size: 1.5rem;
        font-weight: 700;
        letter-spacing: 0.1em;
        color: var(--color-text-primary);
        margin: 0;
        background: linear-gradient(135deg, #8B6914, #D4A843);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
      }

      .award-banner-desc {
        font-size: 0.95rem;
        color: var(--color-text-secondary);
        line-height: 1.8;
        margin: 0;
      }

      @media (max-width: 768px) {
        .award-banner-section {
          padding: 1.5rem 0;
        }

        .award-banner-inner {
          padding: 1.5rem;
        }

        .award-banner-title-row {
          flex-direction: column;
          gap: 0.5rem;
        }

        .award-banner-title {
          font-size: 1.3rem;
        }

        .award-banner-desc {
          font-size: 0.9rem;
        }
      }
    </style>
  `;
};
