export const Company = () => {
  return `
    <section id="company" class="section company">
      <div class="container">
        <h2 class="section-title fade-up">会社概要</h2>
        
        <div class="company-intro fade-up delay-100">
          <h3>信頼と実績の半世紀</h3>
          <p>
            当社は、昭和40年6月の創業以来、一般木造建築や鉄骨・鉄筋構造建築からプレハブ住宅の製造・建築まで、幅広い分野で事業を展開し、皆様のご要望に応えられるよう日々努力してまいりました。
          </p>
        </div>

        <div class="company-section fade-up delay-200">
          <h3 class="subsection-title">沿革</h3>
          <div class="history-list">
            <div class="history-item">
              <span class="history-year">昭和40年 6月</span>
               <span class="history-content">横浜市緑区において創業</span>
            </div>
            <div class="history-item">
              <span class="history-year">昭和47年12月</span>
              <span class="history-content">資本金150万円で「有限会社柿本工務店」を設立</span>
            </div>
            <div class="history-item">
              <span class="history-year">昭和52年 9月</span>
              <span class="history-content">社名を「柿本ホーム産業有限会社」に変更</span>
            </div>
            <div class="history-item">
              <span class="history-year">昭和53年 7月</span>
              <span class="history-content">組織を株式会社へ変更し「柿本ホーム産業株式会社」となる</span>
            </div>
            <div class="history-item">
              <span class="history-year">平成元年10月</span>
              <span class="history-content">資本金を1,000万円に増資、総合建設業へ移行</span>
            </div>
          </div>
        </div>

        <div class="company-section fade-up delay-300">
          <h3 class="subsection-title">概要</h3>
          <dl class="company-overview">
            <div class="overview-item">
              <dt>会社名</dt>
              <dd>柿本ホーム産業</dd>
            </div>
            <div class="overview-item">
              <dt>所在地</dt>
              <dd>〒225-0025 神奈川県横浜市青葉区鉄町1463</dd>
            </div>
            <div class="overview-item">
              <dt>資本金</dt>
              <dd>10,000,000円</dd>
            </div>
            <div class="overview-item">
              <dt>代表取締役</dt>
              <dd>井上 博善</dd>
            </div>
            <div class="overview-item">
              <dt>従業員</dt>
              <dd>10名</dd>
            </div>
            <div class="overview-item">
              <dt>取引先銀行</dt>
              <dd>三菱UFJ銀行　みずほ銀行　世田谷信用金庫</dd>
            </div>
            <div class="overview-item">
              <dt>許認可</dt>
              <dd>
                一般建設業　神奈川県知事許可<br>
                一般建築業（般-6）第12310号
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
    <style>
      .company {
        padding: var(--spacing-xl) 0;
        background-color: var(--color-bg-dark);
      }

      .company-intro {
        margin-bottom: var(--spacing-lg);
        max-width: 800px;
        margin-left: auto;
        margin-right: auto;
        text-align: center;
      }

      .company-intro h3 {
        font-size: 1.5rem;
        margin-bottom: 1.5rem;
        font-weight: 500;
        letter-spacing: 0.1em;
      }

      .company-intro p {
        line-height: 2.2;
        color: var(--color-text-secondary);
        text-align: justify;
      }

      .company-section {
        margin-bottom: var(--spacing-lg);
      }

      .subsection-title {
        font-size: 1.3rem;
        letter-spacing: 0.2em;
        margin-bottom: 2.5rem;
        color: var(--color-text-primary);
        text-align: center;
        position: relative;
        padding-bottom: 1rem;
      }
      
      .subsection-title::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        width: 30px;
        height: 1px;
        background-color: var(--color-accent);
      }

      .history-list {
        border-top: 1px solid var(--color-border);
      }

      .history-item {
        display: flex;
        padding: 1.5rem 0;
        border-bottom: 1px solid var(--color-border);
        align-items: baseline;
      }

      .history-year {
        width: 180px;
        font-weight: 500;
        flex-shrink: 0;
        color: var(--color-text-primary);
      }
      
      .history-content {
        color: var(--color-text-secondary);
      }

      .company-overview {
        display: grid;
        grid-template-columns: 1fr;
        border-top: 1px solid var(--color-border);
      }

      .overview-item {
        display: grid;
        grid-template-columns: 200px 1fr;
        padding: 1.5rem 0;
        border-bottom: 1px solid var(--color-border);
      }

      .overview-item dt {
        font-weight: 500;
        color: var(--color-text-primary);
      }

      .overview-item dd {
        color: var(--color-text-secondary);
      }

      .navi-note {
        margin-top: 2rem;
        padding: 1.2rem 1.5rem;
        background: rgba(216, 141, 45, 0.06);
        border-left: 3px solid var(--color-accent);
        border-radius: 0 8px 8px 0;
      }

      .navi-note p {
        font-size: 0.9rem;
        line-height: 1.9;
        color: var(--color-text-secondary);
        margin: 0;
      }

      .navi-note strong {
        color: var(--color-text-primary);
      }

      @media (max-width: 768px) {
        .history-item {
          flex-direction: column;
          gap: 0.5rem;
          padding: 1rem 0;
        }
        
        .overview-item {
          grid-template-columns: 1fr;
          gap: 0.5rem;
          padding: 1rem 0;
        }

        .overview-item dt {
          color: var(--color-accent);
          font-size: 0.9rem;
          border-left: 3px solid var(--color-accent);
          padding-left: 0.5rem;
        }
        
        .subsection-title {
            font-size: 1.2rem;
        }
      }
    </style>
  `;
}
