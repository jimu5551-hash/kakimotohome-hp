export const Reviews = () => {
  const reviews = [
    {
      title: "『満足のいく仕上がり』が良かった",
      age: "50代",
      gender: "男性",
      location: "東京都町田市",
      category: "外構・エクステリア",
      content: "見積もりのための立ち会いから、領収書の手渡まで、きめ細かく来訪いただき、当方予算に対するご提案いただいた内容が、塀の現状と当方要望（大谷石の腐食状況と大谷石の質感を極力生かしたい）をご勘案いただいたご提案であり、完成時の職人様のプライドと腕の良さを彷彿させる仕上がりには圧巻でした。"
    },
    {
      title: "『プロとしての的確なアドバイス』が良かった",
      age: "60代",
      gender: "男性",
      location: "神奈川県横浜市",
      category: "浴室・バス",
      content: "無理なスケジュールのお願いをしたにも関わらず、［水漏れでお困りでしょう］と素早く対応して下さりました。こまめな連絡も下さり、本当に助かりました。対処の早さと原因究明のプロ意識には驚きました。"
    },
    {
      title: "『満足のいく仕上がり』が良かった",
      age: "70代",
      gender: "女性",
      location: "東京都町田市",
      category: "勝手口ドア交換",
      content: "棟梁の熟練した技術と真摯な仕事振り、加えて熱心な営業（コーディネーター）の方のお蔭で、施工は大満足の仕上がりでした。機会があれば、また、同社にお願いしたいと思います。"
    },
    {
      title: "『納得の価格』が良かった",
      age: "80代",
      gender: "女性",
      location: "神奈川県横浜市",
      category: "廊下張り替え",
      content: "築43年家屋の廊下の張り替え工事でしたが、見事な仕上がりで大変満足しております。大工さんはとても腕の良い方で古い家のやりにくい個所が沢山あったのですが綺麗に均一にして見違える仕上がりで心から感謝しております。"
    },
    {
      title: "『満足のいく仕上がり』が良かった",
      age: "60代",
      gender: "男性",
      location: "神奈川県横浜市",
      category: "屋根・廊下",
      content: "工期は少しかかりましたが、丁寧な作業で大変満足の仕上がりです。またご相談することがありましたら、その際はよろしくお願い致します。"
    },
    {
      title: "『満足のいく仕上がり』が良かった",
      age: "50代",
      gender: "男性",
      location: "神奈川県川崎市",
      category: "外構・エクステリア",
      content: "細かい指示なくとも安心して任せられる業者さんです。外構工事でも養生から隣家への配慮も行き届き仕上がりも丁寧です。次回も機会があればお願いしたいと思います。"
    }
  ];

  return `
    <section id="reviews" class="reviews-section">
      <div class="container">
        <h2 class="section-title">お客様の声</h2>
        
        <div class="reviews-grid">
          ${reviews.map((review, index) => `
            <div class="review-card fade-up" style="animation-delay: ${index * 0.1}s">
              <div class="review-header">
                <div class="review-meta">
                  <span class="review-badge">${review.category}</span>
                  <span class="review-demographics">${review.location} ${review.age}/${review.gender}</span>
                </div>
                <h3 class="review-title">${review.title}</h3>
              </div>
              <p class="review-content">${review.content}</p>
              <div class="review-stars">★★★★★</div>
            </div>
          `).join('')}
        </div>
        
        <div class="reviews-footer fade-up">
          <p>ホームプロでの評価平均 4.8/5.0 (2024年現在)</p>
          <a href="https://www.homepro.jp/kaisha/325246/" target="_blank" rel="noopener noreferrer" style="display:inline-block;"><img src="https://www.homepro.jp/popup/image/award/cs_large2024.gif" alt="ホームプロ 顧客満足優良会社 2024" style="display:block; margin:0 auto; max-width:100%; height:auto;" /></a>
        </div>
      </div>
    </section>
    <style>
      .reviews-section {
        padding: var(--spacing-lg) 0;
        background-color: var(--color-bg-dark);
      }

      .reviews-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
        gap: 2rem;
        margin-top: 3rem;
      }

      .review-card {
        background-color: var(--color-bg-white);
        padding: 2.5rem;
        border: 1px solid rgba(0,0,0,0.03);
        border-radius: 16px;
        box-shadow: 
          0 4px 20px -5px rgba(0, 0, 0, 0.05),
          0 10px 15px -10px rgba(0, 0, 0, 0.02);
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        transition: transform 0.5s cubic-bezier(0.2, 0.8, 0.2, 1), box-shadow 0.5s ease;
      }

      .review-card:hover {
        transform: translateY(-8px);
        box-shadow: 
           0 20px 40px -10px rgba(0, 0, 0, 0.08),
           0 12px 20px -12px rgba(0, 0, 0, 0.06);
        border-color: rgba(243, 156, 18, 0.2);
      }

      .review-header {
        margin-bottom: 1.5rem;
      }

      .review-meta {
        display: flex;
        justify-content: space-between;
        align-items: flex-start; /* Align top in case of wrapping */
        margin-bottom: 1rem;
        font-size: 0.85rem;
        color: var(--color-text-secondary);
        gap: 0.5rem; /* Add gap */
      }
      
      @media (max-width: 480px) {
        .review-meta {
            flex-direction: column;
            align-items: flex-start;
            gap: 0.5rem;
        }
      }

      .review-badge {
        background-color: var(--color-bg-secondary);
        padding: 0.2rem 0.8rem;
        border-radius: 2px;
        font-size: 0.8rem;
      }

      .review-title {
        font-size: 1.1rem;
        font-weight: 500;
        line-height: 1.6;
        color: var(--color-text-primary);
      }

      .review-content {
        font-size: 0.95rem;
        line-height: 1.8;
        color: var(--color-text-secondary);
        margin-bottom: 1.5rem;
        flex-grow: 1;
        text-align: justify;
      }

      .review-stars {
        color: var(--color-accent);
        font-size: 1rem;
        letter-spacing: 0.2em;
      }

      .reviews-footer {
        text-align: center;
        margin-top: 3rem;
      }

      .reviews-footer p {
        margin-bottom: 1.5rem;
        font-size: 0.9rem;
        color: var(--color-text-secondary);
      }
      
      .btn-outline {
        display: inline-block;
        padding: 0.8rem 2rem;
        border: 1px solid var(--color-text-primary);
        color: var(--color-text-primary);
        font-size: 0.9rem;
        transition: all 0.3s ease;
      }
      
      .btn-outline:hover {
        background-color: var(--color-text-primary);
        color: #fff;
      }
      @media (max-width: 768px) {
        .reviews-grid {
          grid-template-columns: 1fr;
          gap: 1.5rem;
          margin-top: 2rem;
        }
        
        .review-card {
          padding: 1.5rem;
        }
        
        .review-title {
          font-size: 1rem;
        }

        .reviews-footer {
          margin-top: 2rem;
        }

        .reviews-footer img {
          max-width: 280px;
        }

        .review-quote {
          font-size: 0.9rem;
        }
      }
    </style>
  `;
};
