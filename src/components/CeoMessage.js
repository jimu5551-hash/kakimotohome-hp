export const CeoMessage = () => {
  return `
    <section id="ceo-message" class="ceo-section">
      <div class="container">
        <div class="ceo-content-wrapper">
          <div class="ceo-image-container fade-right">
            <img src="/ceo.jpg" alt="代表取締役 井上 博善" class="ceo-image" />
          </div>
          <div class="ceo-text-content fade-left">
            <h2 class="section-title text-left">代表挨拶</h2>
            <h3 class="ceo-heading">「家」は家族の幸せを育む場所。<br>その想いを大切に、誠実な施工をお届けします。</h3>
            <p class="ceo-description">
              創業以来、私たちは地域に根ざした工務店として、お客様一人ひとりの暮らしに寄り添ったリフォームをご提案してまいりました。<br><br>
              「満足のいく仕上がり」「プロとしての的確なアドバイス」といった温かいお言葉をいただけることが、私たちにとって何よりの喜びであり、誇りです。<br><br>
              熟練の職人による確かな技術と、きめ細やかな対応で、お客様の「理想の住まい」をカタチにします。小さな修理から大規模なリノベーションまで、どんなことでもお気軽にご相談ください。
            </p>
            <div class="ceo-signature">
              <p class="ceo-position">代表取締役</p>
              <img src="/signature_new.png" alt="井上 博善" class="ceo-signature-img" />
            </div>
          </div>
        </div>
      </div>
    </section>
    <style>
      .ceo-section {
        padding: var(--spacing-xl) 0;
        background-color: var(--color-bg-white);
      }

      .ceo-content-wrapper {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 5rem;
        align-items: center;
      }

      .ceo-image-container {
        position: relative;
        width: 100%;
        height: 500px;
        background-color: #f0f0f0;
        overflow: hidden;
      }

      .ceo-image {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: top center; /* Ensure top of head isn't cut off */
      }

      .ceo-image-placeholder {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #e0e0e0;
        color: #999;
        font-size: 1.2rem;
        letter-spacing: 0.1em;
      }

      .ceo-text-content {
        padding-left: 0;
      }
      
      .text-left {
        text-align: left;
      }
      
      .text-left::after {
        left: 0;
        transform: none;
      }

      .ceo-heading {
        font-size: 1.6rem;
        font-weight: 500;
        line-height: 1.8;
        margin-bottom: 2.5rem;
        color: var(--color-text-primary);
        letter-spacing: 0.1em;
      }

      .ceo-description {
        font-size: 1rem;
        line-height: 2.2;
        color: var(--color-text-secondary);
        margin-bottom: 3rem;
        text-align: justify;
      }

      .ceo-signature {
        text-align: right;
        margin-top: 2rem;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
      }

      .ceo-position {
        font-size: 0.9rem;
        color: var(--color-text-secondary);
        margin-bottom: 0.5rem;
      }

      .ceo-signature-img {
        max-width: 200px;
        height: auto;
        margin-top: 0.5rem;
        display: block;
        mix-blend-mode: multiply; /* Blends the white/light parts with background */
        filter: grayscale(100%) contrast(2.5) brightness(1.5); /* Higher contrast to remove faint shadows */
      }

      @media (max-width: 900px) {
        .ceo-content-wrapper {
          grid-template-columns: 1fr;
          gap: 2rem;
        }

        .ceo-image-container {
          height: 280px;
          order: 1;
        }
        
        .ceo-text-content {
          order: 2;
          padding: 0;
        }
        
        .ceo-heading {
          font-size: 1.2rem;
          margin-bottom: 1.5rem;
          line-height: 1.6;
        }
        
        .ceo-description {
          font-size: 0.95rem;
          margin-bottom: 2rem;
          line-height: 2;
        }

        .ceo-signature-img {
          max-width: 150px;
        }
      }
    </style>
  `;
};
