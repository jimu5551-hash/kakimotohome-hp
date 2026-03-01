export const StickyFooter = () => {
  return `
    <!-- Desktop Floating Phone Button -->
    <a href="tel:0120-654-711" class="floating-phone-btn" aria-label="電話で問い合わせ">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="floating-phone-svg"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
      <span class="floating-phone-text">お気軽にお電話ください</span>
      <span class="floating-phone-number">0120-654-711</span>
    </a>

    <!-- Mobile Sticky Footer -->
    <div class="sticky-footer">
      <div class="sticky-footer-btns">
        <a href="tel:0120-654-711" class="sticky-btn sticky-btn-tel">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="sticky-icon sticky-phone-icon"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
          <span class="sticky-text">電話で相談<span class="sticky-free">無料</span></span>
        </a>
        <a href="/#contact" class="sticky-btn sticky-btn-mail">
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="sticky-icon"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
          <span class="sticky-text">メールで相談</span>
        </a>
      </div>
    </div>
    <style>
      /* Floating Phone Button - Desktop */
      .floating-phone-btn {
        position: fixed;
        bottom: 2rem;
        right: 2rem;
        z-index: 998;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 0.3rem;
        padding: 1.2rem 1.8rem;
        background: linear-gradient(135deg, #d88d2d 0%, #c27a1f 100%);
        color: white;
        text-decoration: none;
        border-radius: 16px;
        box-shadow: 0 6px 25px rgba(216, 141, 45, 0.4);
        transition: all 0.3s ease;
        font-weight: 700;
        font-size: 1rem;
        animation: floatingPulse 3s ease-in-out infinite;
      }
      
      .floating-phone-btn:hover {
        transform: translateY(-3px) scale(1.03);
        box-shadow: 0 10px 35px rgba(216, 141, 45, 0.5);
        animation: none;
      }

      .floating-phone-btn:hover .floating-phone-svg {
        animation: floatPhoneRing 0.6s ease;
      }

      @keyframes floatPhoneRing {
        0%, 100% { transform: rotate(0deg); }
        20% { transform: rotate(-15deg); }
        40% { transform: rotate(15deg); }
        60% { transform: rotate(-10deg); }
        80% { transform: rotate(10deg); }
      }

      @keyframes floatingPulse {
        0%, 100% { box-shadow: 0 6px 25px rgba(216, 141, 45, 0.4); }
        50% { box-shadow: 0 6px 35px rgba(216, 141, 45, 0.6); }
      }
      
      .floating-phone-text {
        display: block;
        font-size: 0.7rem;
        font-weight: 500;
        opacity: 0.9;
      }

      .floating-phone-number {
        display: block;
        font-size: 1.1rem;
        font-weight: 800;
        letter-spacing: 0.05em;
      }

      /* Mobile Sticky Footer */
      .sticky-footer {
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
        z-index: 999;
        background-color: rgba(255, 255, 255, 0.98);
        box-shadow: 0 -2px 20px rgba(0,0,0,0.1);
        display: none;
        padding: 10px 12px;
        padding-bottom: calc(10px + env(safe-area-inset-bottom, 0px));
        box-sizing: border-box;
        backdrop-filter: blur(10px);
      }

      .sticky-footer-btns {
        display: flex;
        gap: 10px;
        justify-content: space-between;
      }

      .sticky-btn {
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 16px 0;
        border-radius: 10px;
        text-decoration: none;
        font-family: var(--font-primary);
        font-weight: 700;
        transition: all 0.3s;
        gap: 8px;
        font-size: 1rem;
        letter-spacing: 0.05em;
      }

      .sticky-btn:active {
        transform: scale(0.97);
      }

      .sticky-btn-tel {
        background: linear-gradient(135deg, #d88d2d 0%, #c27a1f 100%);
        color: #fff;
        flex: 1.15;
        box-shadow: 0 2px 8px rgba(216, 141, 45, 0.3);
      }

      .sticky-free {
        display: inline-block;
        background: rgba(255,255,255,0.25);
        padding: 0.05rem 0.35rem;
        border-radius: 3px;
        font-size: 0.7rem;
        margin-left: 0.3rem;
        font-weight: 700;
      }

      .sticky-btn-mail {
        background-color: var(--color-text-primary);
        color: #fff;
      }

      .sticky-icon {
        width: 22px;
        height: 22px;
      }

      .sticky-text {
        font-size: 1rem;
      }

      /* Hide floating button on mobile, show sticky footer */
      @media (max-width: 768px) {
        .floating-phone-btn {
          display: none;
        }
        
        .sticky-footer {
          display: block;
        }
        
        body {
          padding-bottom: 80px; 
        }
      }
    </style>
  `;
};
