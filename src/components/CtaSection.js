export const CtaSection = () => {
  return `
      <section class="cta-section fade-up">
        <div class="container cta-container">
          <div class="cta-content">
            <h2 class="cta-title">理想の住まいづくり、<br>まずはご相談ください。</h2>
            <p class="cta-desc">
              新築・リフォーム・外構工事など、<br>
              お住まいに関することなら何でもお気軽にお問い合わせください。
            </p>
          </div>
          <div class="cta-actions">
            <a href="tel:0120-654-711" class="cta-btn cta-btn-tel">
              <div class="cta-tel-content">
                <span class="cta-tel-sub">お見積り・ご相談 <span class="cta-tel-free">通話無料</span></span>
                <span class="cta-tel-number">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="cta-icon cta-phone-icon"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                  0120-654-711
                </span>
                <span class="cta-tel-hours">受付時間 9:00〜18:00（年中無休）</span>
              </div>
            </a>
            <a href="/#contact" class="cta-btn cta-btn-mail">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="cta-icon"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
              お問い合わせフォーム
            </a>
          </div>
        </div>
      </section>
      <style>
        .cta-section {
          padding: var(--spacing-xl) 0;
          background: linear-gradient(180deg, #fff 0%, var(--color-bg-secondary) 100%);
        }

        .cta-container {
          display: flex;
          align-items: center;
          gap: 4rem;
          background: #fff;
          border-radius: 16px;
          padding: 3.5rem;
          box-shadow: 0 8px 40px rgba(0,0,0,0.06);
        }

        .cta-content {
          flex: 1;
        }
  
        .cta-title {
          font-family: var(--font-heading);
          font-size: 2rem;
          color: var(--color-text-primary);
          margin-bottom: 2rem;
          line-height: 1.6;
          font-weight: 700;
        }
  
        .cta-desc {
          color: var(--color-text-secondary);
          line-height: 2.0;
          font-size: 1.1rem;
          margin-bottom: 1rem;
        }
  
        .cta-actions {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          min-width: 300px;
        }
  
        .cta-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1.2rem 2.5rem;
          text-decoration: none;
          font-family: var(--font-primary);
          font-weight: 700;
          font-size: 1.1rem;
          border-radius: 8px;
          transition: all 0.3s ease;
          gap: 0.8rem;
          letter-spacing: 0.08em;
        }
  
        .cta-btn-tel {
          background: linear-gradient(135deg, #d88d2d 0%, #c27a1f 100%);
          border: 2px solid #d88d2d;
          color: #fff;
          font-size: 1.1rem;
          padding: 1.5rem 2.5rem;
          flex-direction: column;
          position: relative;
          overflow: hidden;
          border-radius: 10px;
        }

        .cta-btn-tel::before {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: radial-gradient(circle, rgba(255,255,255,0.15) 0%, transparent 60%);
          opacity: 0;
          transition: opacity 0.4s ease;
        }

        .cta-btn-tel:hover::before {
          opacity: 1;
        }
  
        .cta-btn-tel:hover {
          background: linear-gradient(135deg, #c27a1f 0%, #a8691a 100%);
          border-color: #c27a1f;
          color: #fff;
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(216, 141, 45, 0.35);
        }

        .cta-tel-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.3rem;
        }

        .cta-tel-sub {
          font-size: 0.85rem;
          font-weight: 500;
          opacity: 0.95;
          letter-spacing: 0.1em;
        }

        .cta-tel-free {
          display: inline-block;
          background: rgba(255,255,255,0.25);
          padding: 0.1rem 0.5rem;
          border-radius: 3px;
          font-size: 0.75rem;
          font-weight: 700;
          margin-left: 0.3rem;
        }

        .cta-tel-number {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 1.8rem;
          font-weight: 800;
          letter-spacing: 0.08em;
        }

        .cta-phone-icon {
          width: 28px;
          height: 28px;
        }

        .cta-btn-tel:hover .cta-phone-icon {
          animation: ctaPhoneRing 0.6s ease;
        }

        @keyframes ctaPhoneRing {
          0%, 100% { transform: rotate(0deg); }
          20% { transform: rotate(-15deg); }
          40% { transform: rotate(15deg); }
          60% { transform: rotate(-10deg); }
          80% { transform: rotate(10deg); }
        }

        .cta-tel-hours {
          font-size: 0.75rem;
          opacity: 0.85;
          font-weight: 400;
          letter-spacing: 0.05em;
        }
  
        .cta-btn-mail {
          background-color: #fff;
          color: var(--color-text-primary);
          border: 2px solid var(--color-text-primary);
          border-radius: 10px;
        }
  
        .cta-btn-mail:hover {
          background-color: var(--color-text-primary);
          color: #fff;
          transform: translateY(-2px);
        }
  
        .cta-icon {
          width: 24px;
          height: 24px;
        }
  
        @media (max-width: 768px) {
          .cta-container {
            flex-direction: column;
            text-align: center;
            gap: 2.5rem;
            padding: 2.5rem 1.5rem;
            border-radius: 12px;
          }
  
          .cta-actions {
            width: 100%;
            min-width: unset;
          }

          .cta-title {
            font-size: 1.5rem;
            margin-bottom: 1.5rem;
          }

          .cta-desc {
            font-size: 1rem;
          }

          .cta-tel-number {
            font-size: 1.5rem;
          }

          .cta-btn {
            padding: 1rem 1.5rem;
          }

          .cta-btn-tel {
            padding: 1.2rem 1.5rem;
          }
        }
      </style>
    `;
}
