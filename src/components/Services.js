export const Services = () => {
  return `
    <section id="services" class="section services">
      <div class="container">
        <h2 class="section-title">事業案内</h2>
        
        <div class="services-grid">
          
          <!-- Reform & Rebuilding -->
          <div class="service-card fade-up">
            <div class="service-image-wrapper">
              <img src="/設楽邸/設楽様邸リビング.jpg" alt="建て替え・リフォーム" class="brighten-img-extra" />
            </div>
            <div class="service-content">
              <h3 class="service-title">建て替え・リフォーム</h3>
              <ul class="service-items">
                <li>住宅建て替え</li>
                <li>フルリノベーション</li>
                <li>水回りリフォーム</li>
                <li>外装・外構リフォーム</li>
              </ul>
              <p class="service-desc">
                長年住み慣れた愛着のある住まいを、ライフスタイルの変化に合わせて快適な空間へ。<br>
                一級建築施工管理技士の確かな目利きと、熟練職人の技術で、新築同様の美しさと機能性を取り戻します。<br>
                部分的なリフォームから、骨組みだけを残して作り変える大規模なリノベーションまで、お客様のご要望に幅広くお応えします。
              </p>
            </div>
          </div>

          <!-- Light Gauge Steel -->
          <div class="service-card fade-up delay-200">
            <div class="service-image-wrapper">
              <img src="/軽量鉄骨/軽量鉄骨.jpg" alt="軽量鉄骨建築" class="brighten-img" />
            </div>
            <div class="service-content">
              <h3 class="service-title">軽量鉄骨建築</h3>
              <ul class="service-items">
                <li>倉庫</li>
                <li>工場</li>
                <li>ガレージ</li>
                <li>事務所・店舗</li>
              </ul>
              <p class="service-desc">
                短工期・低コスト・高耐久を実現する軽量鉄骨建築は、ビジネスの拠点づくりや趣味の空間に最適です。<br>
                倉庫、工場、ガレージ、店舗併用住宅など、多種多様なニーズに対応。<br>
                自社一貫体制による柔軟な設計と施工管理で、土地の形状や用途に合わせた無駄のない最適なプランをご提案いたします。
              </p>
            </div>
          </div>

        </div>
        
        <div class="services-cta fade-in" style="text-align: center; margin-top: 3rem;">
          <a href="/#contact" class="btn-primary">無料相談を申し込む</a>
        </div>
      </div>
    </section>
    <style>
      .services {
        padding: var(--spacing-xl) 0;
        background-color: var(--color-bg-secondary);
      }

      .services-grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 3rem;
      }

      .service-card {
        background-color: var(--color-bg-white);
        display: flex;
        flex-direction: column;
        height: 100%;
        border: 1px solid rgba(0,0,0,0.03); /* Very subtle border */
        border-radius: 16px; /* Increased radius */
        box-shadow: 
          0 4px 20px -5px rgba(0, 0, 0, 0.05),
          0 10px 15px -10px rgba(0, 0, 0, 0.02); /* Multi-layered soft shadow */
        transition: transform 0.5s cubic-bezier(0.2, 0.8, 0.2, 1), box-shadow 0.5s ease;
        overflow: hidden; /* For rounded corners on images */
      }

      .service-image-wrapper {
        width: 100%;
        height: 260px; /* Slightly taller */
        overflow: hidden;
      }

      .service-image-wrapper img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 0.8s cubic-bezier(0.2, 0.8, 0.2, 1), filter 0.3s ease;
      }

      .brighten-img {
        filter: brightness(1.08) contrast(1.05);
      }

      .brighten-img-extra {
        filter: brightness(1.15) contrast(1.05);
      }

      .service-card:hover {
        transform: translateY(-8px);
        box-shadow: 
           0 20px 40px -10px rgba(0, 0, 0, 0.08),
           0 12px 20px -12px rgba(0, 0, 0, 0.06); /* Premium float effect */
      }

      .service-card:hover .service-image-wrapper img {
        transform: scale(1.08);
      }

      .service-content {
        padding: 2.5rem;
        display: flex;
        flex-direction: column;
        flex-grow: 1;
      }

      .service-title {
        font-size: 1.4rem;
        margin-bottom: 1rem;
        font-weight: 700;
        letter-spacing: 0.05em;
        text-align: left; /* Modern clean left align */
        border-bottom: none; /* Remove border */
        padding-bottom: 0;
      }

      .service-items {
        padding: 0;
        margin-bottom: 2rem;
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;
        justify-content: flex-start; /* Left align to match title */
      }

      .service-items li {
        font-size: 0.85rem;
        color: var(--color-accent); /* Use accent color for tags */
        background-color: rgba(243, 156, 18, 0.1); /* Soft orange accent bg */
        padding: 0.3rem 1rem;
        border-radius: 50px; /* Pill shape */
        font-weight: 500;
      }

      .service-desc {
        font-size: 0.95rem;
        color: var(--color-text-secondary);
        line-height: 1.8;
        text-align: left; /* Left align for readability */
        margin-top: auto;
      }
      
      .btn-primary {
        display: inline-block;
        padding: 1rem 4rem;
        background-color: var(--color-text-primary);
        color: #fff;
        font-size: 1rem;
        letter-spacing: 0.1em;
        transition: all 0.3s ease;
      }
      
      .btn-primary:hover {
        background-color: var(--color-accent);
      }

      @media (max-width: 900px) {
        .services-grid {
          grid-template-columns: 1fr;
          gap: 2.5rem; /* Tighter gap for mobile */
        }
        
        .btn-primary {
          width: 100%; /* Full width button on mobile */
          padding: 1rem;
          text-align: center;
        }
        
        .service-content {
          padding: 1.5rem; /* Reduce padding on mobile cards */
        }
      }
    </style>
  `;
}
