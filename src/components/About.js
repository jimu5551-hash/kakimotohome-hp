export const About = () => {
  return `
    <section id="philosophy" class="section philosophy">
      <div class="container">
        <!-- Section 1: 50 Years -->
        <div class="strength-row fade-up">
          <div class="strength-visual">
             <div class="image-container">
               <img src="/about-family.jpg" alt="家づくりの相談をする家族" class="brighten-img" />
             </div>
          </div>
          <div class="strength-content">
            <h3 class="strength-title">横浜で50年以上の実績</h3>
            <div class="strength-text">
              <p>
                昭和48年の創業以来、横浜エリアを中心に地域密着で歩んでまいりました。
              </p>
              <p>
                親子二代、三代にわたってご依頼いただくお客様も多く、地域の皆様との信頼関係こそが私たちの最大の財産です。
              </p>
              <p>
                土地の特性や気候風土を知り尽くしているからこそできる、長く安心して住み続けられる住まいづくりをご提案いたします。
              </p>
              <p>
                これからも「街の頼れる工務店」として、お客様の暮らしに寄り添い続けてまいります。
              </p>
            </div>
          </div>
        </div>

        <!-- Section 2: Home Pro Awards -->
        <div class="strength-row reverse fade-up delay-200">
           <div class="strength-visual">
             <div class="image-container">
               <img src="/awards.jpg" alt="ホームプロ表彰盾" />
             </div>
          </div>
          <div class="strength-content">
            <h3 class="strength-title">ホームプロ受賞多数</h3>
            <div class="strength-text">
              <p>
                利用者数No.1のリフォーム会社紹介サイト「ホームプロ」において、数々の賞を受賞しております。
              </p>
              <p>
                これは、施工品質はもちろんのこと、お客様への対応や提案力、アフターフォローに至るまで、総合的に高い評価をいただいた証です。
              </p>
              <p>
                第三者機関による客観的な評価に加え、実際に施工されたお客様からの「ありがとう」の声を励みに、さらなる品質向上に努めてまいります。
              </p>
            </div>
            <div class="strength-link-wrapper">
              <a href="https://www.homepro.jp/kaisha/325246/" target="_blank" rel="noopener noreferrer" class="homepro-link">
                ホームプロでの評価を見る <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <style>
      .philosophy {
        padding: var(--spacing-xl) 0;
        background-color: var(--color-bg-white);
      }

      .strength-row {
        display: flex;
        align-items: center;
        gap: 3rem;
        margin-bottom: 4rem;
      }
      
      .strength-row:last-child {
        margin-bottom: 0;
      }

      .strength-row.reverse {
        flex-direction: row-reverse;
      }

      .strength-visual {
        flex: 1;
      }
      
      .image-container {
        width: 100%;
        height: 400px; /* Established height */
        overflow: hidden;
        border-radius: 2px;
        box-shadow: 0 10px 30px rgba(0,0,0,0.08);
      }
      
      .image-container img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 0.6s ease, filter 0.3s ease;
      }

      .brighten-img {
        filter: brightness(1.08) contrast(1.05);
      }
      
      .strength-row:hover .image-container img {
        transform: scale(1.03);
      }

      .strength-content {
        flex: 1;
        padding-left: 1rem;
      }
      
      .strength-row.reverse .strength-content {
        padding-left: 0;
        padding-right: 1rem;
      }

      .strength-title {
        font-size: 1.8rem;
        font-weight: 500;
        letter-spacing: 0.1em;
        margin-bottom: 2rem;
        padding-bottom: 1rem;
        border-bottom: 3px solid var(--color-accent);
        display: inline-block;
        color: var(--color-text-primary);
      }

      .strength-text p {
        font-size: 1rem;
        line-height: 2;
        color: var(--color-text-secondary);
        margin-bottom: 1.5rem;
        text-align: justify;
      }
      
      .strength-link-wrapper {
        margin-top: 2rem;
      }
      
      .homepro-link {
        display: inline-flex;
        align-items: center;
        gap: 0.6rem;
        padding: 1rem 2rem;
        background-color: var(--color-accent);
        color: white;
        font-weight: 700;
        letter-spacing: 0.05em;
        text-decoration: none;
        border-radius: 4px;
        transition: all 0.3s ease;
        box-shadow: 0 4px 10px rgba(216, 141, 45, 0.3);
      }
      
      .homepro-link:hover {
        background-color: #c27a1f;
        transform: translateY(-2px);
        box-shadow: 0 6px 15px rgba(216, 141, 45, 0.4);
      }

      @media (max-width: 900px) {
        .strength-row {
          flex-direction: column;
          gap: 2rem;
          margin-bottom: 3.5rem;
        }
        
        .strength-row.reverse {
          flex-direction: column;
        }
        
        .image-container {
          height: 250px;
        }
        
        .strength-content, 
        .strength-row.reverse .strength-content {
          padding: 0;
        }
        
        .strength-title {
          width: 100%;
          font-size: 1.4rem;
          margin-bottom: 1.2rem;
          padding-bottom: 0.8rem;
        }

        .strength-text p {
          font-size: 0.95rem;
          margin-bottom: 1rem;
          text-align: left;
        }

        .homepro-link {
          width: 100%;
          justify-content: center;
          padding: 0.9rem 1.5rem;
          font-size: 0.95rem;
          box-sizing: border-box;
        }
      }
    </style>
  `;
}
