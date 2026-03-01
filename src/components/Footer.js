export const Footer = () => {
  return `
    <footer class="footer">
      <div class="container">
        <div class="footer-main fade-in">
          <div class="footer-brand">
            <a href="/" class="footer-logo-link">
              <img src="/logo.avif" alt="柿本ホーム産業" class="footer-logo-img" />
            </a>
            <p class="footer-tagline">住まいと快適のプロフェッショナル</p>
            <p class="footer-description">
              1965年の創業以来、横浜を中心に<br>
              お客様の理想の住まいづくりを<br>
              サポートしてまいりました。
            </p>
            <div class="footer-award">
              <img src="https://www.homepro.jp/popup/image/award/cs_small2024.gif" alt="ホームプロ 顧客満足優良会社 2024" width="160" height="58" loading="lazy">
            </div>
            <div class="social-links">
              <a href="#" aria-label="Instagram">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a href="https://www.facebook.com/profile.php?id=100063448640002" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
            </div>
          </div>

          <div class="footer-nav-wrapper">
            <div class="footer-col">
              <h4>事業内容</h4>
              <ul>
                <li><a href="#services">リフォーム</a></li>
                <li><a href="#services">外構エクステリア</a></li>
                <li><a href="#services">新築・建替え</a></li>
                <li><a href="/gallery.html">施工事例</a></li>
              </ul>
            </div>

            <div class="footer-col">
              <h4>会社案内</h4>
              <ul>
                <li><a href="#philosophy">企業理念</a></li>
                <li><a href="#company">会社概要</a></li>
                <li><a href="#reviews">お客様の声</a></li>
                <li><a href="#news">お知らせ</a></li>
              </ul>
            </div>

            <div class="footer-col contact-col">
              <h4>お問い合わせ</h4>
              <ul>
                <li>〒225-0025</li>
                <li>神奈川県横浜市青葉区鉄町1463</li>
                <li class="tel-link"><a href="tel:0120-654-711"><span class="footer-tel-free">通話無料</span> 0120-654-711</a></li>
                <li class="mail-link"><a href="mailto:info@kakimotohome.com">info@kakimotohome.com</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div class="footer-bottom">
          <div class="footer-bottom-content">
            <p class="copyright">&copy; 2024 柿本ホーム産業株式会社 All Rights Reserved.</p>
            <div class="footer-legal">
              <a href="#">プライバシーポリシー</a>
              <a href="#">免責事項</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
    <style>
      .footer {
        background-color: var(--color-bg-secondary);
        padding: 6rem 0 2rem;
        border-top: 1px solid rgba(0,0,0,0.05);
        color: var(--color-text-primary);
      }

      .footer-main {
        display: flex;
        justify-content: space-between;
        gap: 4rem;
        margin-bottom: 5rem;
      }

      .footer-brand {
        flex: 0 0 300px;
      }

      .footer-award {
        margin: 1.5rem 0 2rem;
        display: flex;
        justify-content: flex-start; /* Default for desktop */
      }

      .footer-award img {
        height: 58px;
        width: auto;
        border-radius: 4px;
      }

      .footer-logo-link {
        display: block;
        margin-bottom: 1.5rem;
        text-decoration: none;
      }

      .footer-logo-img {
        height: 80px; /* Slightly larger in footer */
        width: auto;
        display: block;
      }

      .footer-tagline {
        font-size: 0.85rem;
        color: var(--color-accent);
        margin-bottom: 1.5rem;
        font-weight: 500;
        letter-spacing: 0.1em;
      }

      .footer-description {
        font-size: 0.9rem;
        line-height: 2;
        color: var(--color-text-secondary);
        margin-bottom: 2rem;
      }


      .footer-nav-wrapper {
        display: flex;
        gap: 5rem;
        flex-wrap: wrap;
      }

      .footer-col h4 {
        font-size: 1rem;
        letter-spacing: 0.15em;
        margin-bottom: 2rem;
        color: var(--color-text-primary);
        font-weight: 600;
        position: relative;
        padding-bottom: 0.5rem;
      }
      
      .footer-col h4::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 30px;
          height: 1px;
          background-color: var(--color-accent);
      }

      .footer-col ul {
        list-style: none;
      }

      .footer-col ul li {
        margin-bottom: 1rem;
      }

      .footer-col a,
      .footer-col li {
        color: var(--color-text-secondary);
        font-size: 0.95rem;
        transition: all 0.3s ease;
        line-height: 1.5;
        letter-spacing: 0.05em;
        text-decoration: none;
      }

      .footer-col a:hover {
        color: var(--color-accent);
        padding-left: 5px;
      }
      
      .contact-col li {
          margin-bottom: 0.5rem;
      }
      
      .tel-link a {
          font-family: var(--font-primary);
          font-size: 1.4rem;
          font-weight: 700;
          color: var(--color-text-primary);
          display: flex;
          align-items: center;
          gap: 0.4rem;
          transition: color 0.3s ease;
      }

      .tel-link a:hover {
          color: var(--color-accent);
          padding-left: 0;
      }

      .footer-tel-free {
          font-size: 0.6rem;
          font-weight: 700;
          color: #fff;
          background: var(--color-accent);
          padding: 0.1rem 0.35rem;
          border-radius: 3px;
          letter-spacing: 0.05em;
      }

      .social-links {
        display: flex;
        gap: 1rem;
      }

      .social-links a {
        width: 40px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 1px solid var(--color-border);
        border-radius: 50%;
        color: var(--color-text-primary);
        transition: all 0.3s ease;
      }

      .social-links a:hover {
        background-color: var(--color-accent);
        border-color: var(--color-accent);
        color: white;
        transform: translateY(-3px);
      }

      .footer-bottom {
        padding-top: 2rem;
        border-top: 1px solid rgba(0, 0, 0, 0.05);
      }

      .footer-bottom-content {
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
        gap: 1rem;
      }

      .footer-bottom p {
        color: var(--color-text-secondary);
        font-size: 0.8rem;
        letter-spacing: 0.05em;
        opacity: 0.7;
      }

      .footer-legal {
        display: flex;
        gap: 2rem;
      }

      .footer-legal a {
        color: var(--color-text-secondary);
        font-size: 0.8rem;
        transition: color 0.3s ease;
        text-decoration: none;
        opacity: 0.7;
      }

      .footer-legal a:hover {
        color: var(--color-text-primary);
        opacity: 1;
      }

      @media (max-width: 1024px) {
        .footer-main {
          flex-direction: column;
          gap: 3rem;
        }
        
        .footer-nav-wrapper {
            gap: 3rem;
            justify-content: space-between;
        }
      }

      @media (max-width: 768px) {
        .footer {
            padding: 4rem 0 2rem;
        }

        .footer-nav-wrapper {
          flex-direction: column;
          gap: 2.5rem;
        }
        
        .footer-brand {
            flex: auto;
            text-align: center;
        }
        
        .footer-logo-text {
            margin-bottom: 0.5rem;
        }

        .footer-logo-img {
            margin: 0 auto;
        }

        .footer-award {
            justify-content: center;
        }
        
        .social-links {
            justify-content: center;
            margin-top: 2rem;
        }
        
        .footer-col h4::after {
            left: 50%;
            transform: translateX(-50%);
        }
        
        .footer-col {
            text-align: center;
        }

        .tel-link a {
            justify-content: center;
            font-size: 1.2rem;
        }

        .footer-bottom-content {
          flex-direction: column;
          gap: 1.5rem;
        }
      }
    </style>
  `;
}
