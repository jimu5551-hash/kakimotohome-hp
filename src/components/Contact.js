export const Contact = () => {
  return `
    <section id="contact" class="section contact">
      <div class="container">
        <h2 class="section-title fade-up">お問い合わせ</h2>
        
        <div class="contact-layout">
          <div class="contact-form-wrapper fade-up">
            <div class="contact-badge">無料相談・お見積り</div>
            <p class="contact-desc">
              住まいに関するご相談、お見積もりなど、<br>
              お気軽にお問い合わせください。
            </p>
            
            <form action="https://formsubmit.co/info@kakimotohome.com" method="POST" class="contact-form">
              <!-- FormSubmit Configuration -->
              <input type="hidden" name="_next" value="https://kakimotohome-hp.vercel.app/">
              <input type="hidden" name="_subject" value="【柿本ホーム産業】ウェブサイトからのお問い合わせ">
              <input type="hidden" name="_captcha" value="false">
              <input type="hidden" name="_language" value="ja">
              <input type="hidden" name="_template" value="table">
              <input type="hidden" name="_cc" value="jimu@kakimotohome.com">

              <div class="form-group">
                <label for="inquiry-type">お問い合わせ内容</label>
                <div class="select-wrapper">
                  <select id="inquiry-type" name="お問い合わせ種別" required>
                    <option value="" disabled selected>選択してください</option>
                    <option value="renovation">リフォーム</option>
                    <option value="new-construction">新築</option>
                    <option value="light-steel">軽量鉄骨</option>
                    <option value="other">その他</option>
                  </select>
                </div>
              </div>

              <div class="form-group">
                <label for="name">お名前</label>
                <input type="text" id="name" name="お名前" required placeholder="例：柿本 太郎">
              </div>

              <div class="form-group">
                <label for="furigana">ふりがな</label>
                <input type="text" id="furigana" name="ふりがな" required placeholder="例：かきもと たろう">
              </div>

              <div class="form-group-row">
                <div class="form-group zip-group">
                  <label for="postal-code">郵便番号</label>
                  <input type="text" id="postal-code" name="郵便番号" placeholder="例：225-0025">
                </div>
                <div class="form-group address-group">
                  <label for="address">ご住所</label>
                  <input type="text" id="address" name="ご住所" placeholder="例：神奈川県横浜市青葉区鉄町1463">
                </div>
              </div>
              
              <div class="form-group">
                <label for="email">メールアドレス</label>
                <input type="email" id="email" name="返信先メールアドレス" required placeholder="例：info@kakimotohome.com">
                <div class="email-domains">
                  <button type="button" class="domain-btn" data-domain="@gmail.com">@gmail.com</button>
                  <button type="button" class="domain-btn" data-domain="@yahoo.co.jp">@yahoo.co.jp</button>
                  <button type="button" class="domain-btn" data-domain="@icloud.com">@icloud.com</button>
                </div>
              </div>
              
              <div class="form-group">
                <label for="phone">電話番号</label>
                <input type="tel" id="phone" name="電話番号" placeholder="例：0120-654-711">
              </div>

              <div class="form-group">
                <label>ご希望連絡方法</label>
                <div class="radio-group">
                  <label class="radio-label">
                    <input type="radio" name="希望連絡方法" value="email" checked> メール
                  </label>
                  <label class="radio-label">
                    <input type="radio" name="希望連絡方法" value="phone"> 電話
                  </label>
                </div>
              </div>

              <div class="form-group">
                <label>これまでに弊社をご利用いただいたことはございますか？</label>
                <div class="radio-group">
                  <label class="radio-label">
                    <input type="radio" name="弊社利用経験" value="yes"> ある
                  </label>
                  <label class="radio-label">
                    <input type="radio" name="弊社利用経験" value="no" checked> ない
                  </label>
                </div>
              </div>
              
              <div class="form-group">
                <label for="message">お問い合わせ内容（詳細）</label>
                <textarea id="message" name="ご相談内容" rows="5" required placeholder="ご相談内容をご記入ください"></textarea>
              </div>
              
              <button type="submit" class="submit-btn">送信する</button>
            </form>
          </div>

          <div class="contact-map-wrapper fade-up delay-200">
            <div class="map-container">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3246.687697839634!2d139.5078!3d35.5615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6018f7f000000001%3A0x0!2z44CSMjI1LTAwMjUg56We5aWI5bed55yM5qiq5rWc5biC6Z2S6JGJ5Yy66YmE55S6MTQ2Mw!5e0!3m2!1sja!2sjp!4v1620000000000!5m2!1sja!2sjp" 
                width="100%" 
                height="100%" 
                style="border:0;" 
                allowfullscreen="" 
                loading="lazy">
              </iframe>
            </div>
            <div class="map-info">
              <p><strong>柿本ホーム産業</strong></p>
              <p>〒225-0025 神奈川県横浜市青葉区鉄町1463</p>
            </div>
            <div class="navi-note">
              <p>※カーナビをご利用の方は、<br>
              「<strong>鉄町1465-1（旧住所）</strong>」 と入力してください。<br>
              現住所「鉄町1463」では正しく案内されない場合がございます。</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <style>
      .contact {
        padding: var(--spacing-xl) 0;
        background-color: var(--color-bg-secondary);
        position: relative;
        overflow: hidden;
      }

      /* Decorative background element */
      .contact::before {
        content: '';
        position: absolute;
        top: -10%;
        right: -5%;
        width: 600px;
        height: 600px;
        background: radial-gradient(circle, rgba(142, 53, 74, 0.03) 0%, transparent 70%);
        z-index: 0;
        pointer-events: none;
      }

      .contact-layout {
        display: flex;
        flex-direction: column;
        gap: 5rem;
      }

      .contact-form-wrapper {
        background-color: var(--color-bg-white);
        padding: 4rem;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
        border: none;
        position: relative;
        z-index: 1;
        display: flex;
        flex-direction: column;
        max-width: 800px;
        width: 100%;
        margin: 0 auto;
      }

      .contact-desc {
        margin-bottom: 2.5rem;
        color: var(--color-text-secondary);
        line-height: 2;
        text-align: center;
        font-size: 0.95rem;
      }

      .contact-badge {
        background-color: transparent;
        color: var(--color-accent);
        text-align: center;
        display: inline-block;
        padding: 0.5rem 0;
        font-size: 1rem;
        font-weight: 500;
        margin-bottom: 1rem;
        width: 100%;
        letter-spacing: 0.15em;
        border-bottom: 1px solid var(--color-accent);
        width: fit-content;
        margin-left: auto;
        margin-right: auto;
      }

      .form-group {
        margin-bottom: 2.5rem;
      }

      .form-group label {
        display: block;
        margin-bottom: 0.8rem;
        font-size: 0.9rem;
        font-weight: 500;
        color: var(--color-text-primary);
        letter-spacing: 0.05em;
      }

      .form-group input,
      .form-group textarea {
        width: 100%;
        padding: 0.8rem 0;
        background: transparent;
        border: none;
        border-bottom: 1px solid rgba(0,0,0,0.1);
        color: var(--color-text-primary);
        font-family: inherit;
        font-size: 1rem;
        transition: all 0.3s ease;
        border-radius: 0;
      }

      .form-group input:focus,
      .form-group textarea:focus {
        outline: none;
        border-bottom-color: var(--color-accent);
        background-color: rgba(142, 53, 74, 0.01);
      }

      .form-group input::placeholder,
      .form-group textarea::placeholder {
        color: rgba(0,0,0,0.3);
      }

      .submit-btn {
        background-color: var(--color-text-primary);
        color: #fff;
        border: none;
        padding: 1.2rem 3rem;
        font-family: var(--font-sans);
        font-weight: 500;
        letter-spacing: 0.2em;
        cursor: pointer;
        transition: all 0.4s ease;
        margin-top: 2rem;
        width: 100%;
        position: relative;
        overflow: hidden;
      }

      .submit-btn:hover {
        background-color: var(--color-accent);
        transform: translateY(-2px);
        box-shadow: 0 5px 15px rgba(142, 53, 74, 0.2);
      }

      .contact-map-wrapper {
         display: flex;
         flex-direction: column;
         width: 100%;
         max-width: 1000px;
         margin: 0 auto;
      }

      .map-container {
        width: 100%;
        height: 450px; /* Fixed height for landscape map */
        background-color: #eee;
        margin-bottom: 0;
        border: none;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
      }
      
      .map-container iframe {
        width: 100%;
        height: 100%;
        border: 0;
        filter: grayscale(0); /* Colored by default as requested */
        transition: filter 0.3s ease;
      }
      
      .map-container iframe:hover {
          filter: grayscale(0);
      }

      .map-info {
        background-color: var(--color-bg-white);
        padding: 2rem;
        margin-top: -3rem; /* Overlap upwards */
        margin-left: auto;
        margin-right: 2rem; /* Align right side */
        width: fit-content;
        min-width: 300px;
        position: relative;
        z-index: 2;
        box-shadow: 0 5px 20px rgba(0,0,0,0.05);
      }

      .map-info p {
        margin-bottom: 0.5rem;
        color: var(--color-text-secondary);
        font-size: 0.95rem;
        line-height: 1.8;
      }
      
      .map-info strong {
          color: var(--color-text-primary);
          font-weight: 500;
          font-size: 1.1rem;
          display: block;
          margin-bottom: 0.5rem;
      }

      .navi-note {
        margin-top: 1.5rem;
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

      @media (max-width: 900px) {
        .contact-form-wrapper {
          padding: 2rem;
        }
        
        .map-info {
            margin: 1rem 0 0 0;
            width: 100%;
            margin-right: 0;
        }
        
        .form-group-row {
          flex-direction: column;
          gap: 0;
        }
      }

      /* New Styles for Added Fields */
      .form-group-row {
        display: flex;
        gap: 2rem;
        align-items: flex-start;
      }

      .zip-group {
        flex: 0 0 150px; /* Fixed width for zip code */
      }

      .address-group {
        flex: 1;
      }

      .select-wrapper {
        position: relative;
      }

      .select-wrapper::after {
        content: '▼';
        font-size: 0.8rem;
        position: absolute;
        right: 0;
        bottom: 1rem;
        color: var(--color-text-secondary);
        pointer-events: none;
      }

      .form-group select {
        width: 100%;
        padding: 0.8rem 0;
        background: transparent;
        border: none;
        border-bottom: 1px solid rgba(0,0,0,0.1);
        color: var(--color-text-primary);
        font-family: inherit;
        font-size: 1rem;
        transition: all 0.3s ease;
        border-radius: 0;
        appearance: none; /* Remove default arrow */
        cursor: pointer;
      }

      .form-group select:focus {
        outline: none;
        border-bottom-color: var(--color-accent);
        background-color: rgba(142, 53, 74, 0.01);
      }

      .radio-group {
        display: flex;
        gap: 2rem;
        padding-top: 0.5rem;
      }

      .radio-label {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        cursor: pointer;
        font-size: 1rem;
        color: var(--color-text-primary);
      }

      .radio-label input[type="radio"] {
        margin: 0;
        width: 1.2rem;
        height: 1.2rem;
        accent-color: var(--color-accent); /* Modern browser support */
        cursor: pointer;
      }

      .email-domains {
        display: flex;
        gap: 0.5rem;
        margin-top: 0.5rem;
        flex-wrap: wrap;
      }

      .domain-btn {
        background: transparent;
        border: 1px solid var(--color-border);
        border-radius: 4px;
        padding: 0.2rem 0.6rem;
        font-size: 0.8rem;
        color: var(--color-text-secondary);
        cursor: pointer;
        transition: all 0.2s ease;
      }

      .domain-btn:hover {
        background: var(--color-bg-secondary);
        color: var(--color-accent);
        border-color: var(--color-accent);
      }
    </style>
  `;
}
