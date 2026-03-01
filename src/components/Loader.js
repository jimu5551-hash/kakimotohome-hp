export const Loader = () => {
  return `
    <div id="loader" class="loader">
      <div class="loader-content">
        <div class="loader-bars">
          <div class="bar"></div>
          <div class="bar"></div>
          <div class="bar"></div>
          <div class="bar"></div>
          <div class="bar"></div>
        </div>
          <div class="loader-text">柿本ホーム産業株式会社</div>
      </div>
    </div>
    <style>
      .loader {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh;
        background-color: var(--color-bg-dark);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 9999;
        transition: opacity 0.8s ease, visibility 0.8s ease;
      }

      .loader.fade-out {
        opacity: 0;
        visibility: hidden;
      }

      .loader-content {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 3rem;
        animation: loaderFadeIn 0.6s ease;
      }

      @keyframes loaderFadeIn {
        from {
          opacity: 0;
          transform: translateY(20px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }

      .loader-bars {
        display: flex;
        gap: 0.5rem;
        align-items: flex-end;
        height: 60px;
      }

      .bar {
        width: 4px;
        background: linear-gradient(to top, var(--color-accent), var(--color-accent-hover));
        border-radius: 2px;
        animation: barPulse 1.2s ease-in-out infinite;
      }

      .bar:nth-child(1) {
        animation-delay: 0s;
      }

      .bar:nth-child(2) {
        animation-delay: 0.1s;
      }

      .bar:nth-child(3) {
        animation-delay: 0.2s;
      }

      .bar:nth-child(4) {
        animation-delay: 0.3s;
      }

      .bar:nth-child(5) {
        animation-delay: 0.4s;
      }

      @keyframes barPulse {
        0%, 100% {
          height: 20px;
          opacity: 0.3;
        }
        50% {
          height: 60px;
          opacity: 1;
        }
      }

      .loader-text {
        font-family: var(--font-serif);
        font-size: 0.75rem;
        color: var(--color-text-secondary);
        letter-spacing: 0.3em;
        font-weight: 500;
        text-transform: uppercase;
        animation: textFade 2s ease-in-out infinite;
      }

      @keyframes textFade {
        0%, 100% {
          opacity: 0.4;
        }
        50% {
          opacity: 1;
        }
      }

      @media (max-width: 768px) {
        .loader-bars {
          height: 50px;
        }

        .bar {
          width: 3px;
        }

        @keyframes barPulse {
          0%, 100% {
            height: 15px;
            opacity: 0.3;
          }
          50% {
            height: 50px;
            opacity: 1;
          }
        }

        .loader-text {
          font-size: 0.7rem;
        }
      }
    </style>
  `;
}
