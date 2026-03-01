export const News = () => {
  return `
    <section id="news" class="section news">
      <div class="container">
        <h2 class="section-title fade-up">新着施工例</h2>
        
        <div class="news-container fade-up delay-100">
          <div class="news-list">
            
            <a href="/gallery.html#reform" class="news-item">
              <div class="news-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
              </div>
              <div class="news-date">2025/01/20</div>
              <div class="news-title">【リフォーム】システムキッチン改修工事の施工事例を追加しました</div>
            </a>

            <a href="/gallery.html#reform" class="news-item">
              <div class="news-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
              </div>
              <div class="news-date">2025/01/15</div>
              <div class="news-title">【リフォーム】バスルーム改修工事の施工事例を追加しました</div>
            </a>

            <a href="/gallery.html#reform" class="news-item">
              <div class="news-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
              </div>
              <div class="news-date">2024/12/28</div>
              <div class="news-title">【エクステリア】外構フェンス工事の施工事例を追加しました</div>
            </a>

            <a href="/gallery.html#steel" class="news-item">
              <div class="news-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
              </div>
              <div class="news-date">2024/12/10</div>
              <div class="news-title">【軽量鉄骨】事業用倉庫の施工事例を追加しました</div>
            </a>
            
            <a href="/gallery.html#steel" class="news-item">
              <div class="news-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
              </div>
              <div class="news-date">2024/11/30</div>
              <div class="news-title">【軽量鉄骨】ガレージ建築の施工事例を追加しました</div>
            </a>

          </div>
        </div>
      </div>
    </section>
    <style>
      .news {
        padding: var(--spacing-lg) 0;
        background-color: var(--color-bg-dark);
      }

      .news-container {
        max-width: 1000px;
        margin: 0 auto;
        background: var(--color-bg-white);
        border: none;
        border-radius: 12px;
        padding: 3rem;
        box-shadow: 0 4px 20px rgba(0,0,0,0.03);
      }

      .news-item {
        display: flex;
        align-items: center;
        padding: 1.5rem 0;
        border-bottom: 1px dotted var(--color-border);
        transition: all 0.3s ease;
        text-decoration: none;
        color: var(--color-text-primary);
      }

      .news-item:last-child {
        border-bottom: none;
      }

      .news-item:hover {
        background-color: var(--color-bg-secondary);
        padding-left: 1rem;
        transform: translateX(5px);
        border-radius: 4px;
      }

      .news-icon {
        color: var(--color-accent); /* Updated to brand accent */
        margin-right: 1.5rem;
        display: flex;
        align-items: center;
      }

      .news-date {
        font-family: var(--font-primary);
        color: var(--color-text-secondary);
        margin-right: 2rem;
        font-weight: 500;
        min-width: 100px;
        font-size: 0.9rem;
      }

      .news-title {
        color: var(--color-text-primary); /* Modern dark text */
        font-weight: 500;
        flex-grow: 1;
        transition: color 0.3s ease;
      }

      .news-item:hover .news-title {
        color: var(--color-accent); /* Highlight on hover */
        text-decoration: none;
      }

      @media (max-width: 768px) {
        .news-item {
          flex-wrap: wrap;
        }
        
        .news-title {
          width: 100%;
          margin-top: 0.5rem;
          padding-left: 2rem; /* Indent to align with text */
        }
      }
    </style>
  `;
}
