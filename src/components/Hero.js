export const Hero = () => {
  return `
    <section class="hero">
      <div class="hero-bg"></div>
      <div class="hero-overlay"></div>
        <div class="hero-text-wrapper fade-up delay-200">
          <h1 class="hero-title">
            理想の暮らしを、<br>カタチに。
          </h1>
          <p class="hero-subtitle">
            横浜で創業50年。地域密着の家づくり。<br>
            お客様の理想に誠心誠意お応えします。
          </p>
          <div class="hero-cta-wrapper">
             <div class="cta-actions">
                <a href="#contact" class="btn-hero btn-hero-mail">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="hero-icon"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                  お問い合わせ
                </a>
             </div>
          </div>
        </div>
        
        <div class="scroll-down">
          <!-- Text removed as per user request to avoid Katakana/English -->
          <div class="arrow"></div>
        </div>
    </section>
  `;
}

export const initHeroAnimation = () => {
  setTimeout(() => {
    const targets = document.querySelectorAll('.hero-title, .hero-subtitle');
    targets.forEach((target, sectionIndex) => {
      if (target.querySelector('.char-span')) return;

      let globalDelay = sectionIndex * 800;

      // Collect text nodes
      const textNodes = [];
      const walk = (el) => {
        el.childNodes.forEach(node => {
          if (node.nodeType === 3) {
            if (node.textContent.trim().length > 0) textNodes.push(node);
          } else {
            walk(node);
          }
        });
      }
      walk(target);

      textNodes.forEach(node => {
        const text = node.textContent;
        const frag = document.createDocumentFragment();
        text.split('').forEach(char => {
          if (char === ' ' || char === '\n') {
            frag.appendChild(document.createTextNode(char));
          } else {
            const span = document.createElement('span');
            span.textContent = char;
            span.className = 'char-span';
            span.style.animationDelay = `${globalDelay}ms`;
            span.style.color = '#ffffff';
            frag.appendChild(span);
            globalDelay += 40;
          }
        });
        node.parentNode.replaceChild(frag, node);
      });
    });
  }, 100);
};
