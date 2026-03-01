#!/usr/bin/env python3
"""Build a standalone preview HTML from Vite SPA components."""
import re, os

BASE = os.path.dirname(os.path.abspath(__file__))
COMP_DIR = os.path.join(BASE, 'src', 'components')
PUBLIC = 'public'

def read(path):
    with open(path, 'r', encoding='utf-8') as f:
        return f.read()

def extract_html(js_content):
    """Extract template literal content from component JS."""
    # Find content between first backtick pair after 'return `'
    m = re.search(r'return\s*`(.*?)`\s*;?\s*\}', js_content, re.DOTALL)
    if m:
        return m.group(1)
    return ''

# Read CSS
css = read(os.path.join(BASE, 'src', 'style.css'))

# Component order matching main.js
components = [
    'Header', 'Hero', 'AwardBanner', 'BeforeAfter', 'About', 'CtaSection',
    'Services', 'Facilities', 'News', 'Reviews', 'CeoMessage', 'Company',
    'Contact', 'Footer', 'StickyFooter'
]

# Build HTML parts
parts = []
for name in components:
    path = os.path.join(COMP_DIR, f'{name}.js')
    if os.path.exists(path):
        js = read(path)
        # For Reviews.js, we need to handle the JS data + template
        if name == 'Reviews':
            # Manually build the reviews HTML since it uses JS array
            reviews_data = [
                {"title":"『満足のいく仕上がり』が良かった","age":"50代","gender":"男性","location":"東京都町田市","category":"外構・エクステリア","content":"見積もりのための立ち会いから、領収書の手渡まで、きめ細かく来訪いただき、当方予算に対するご提案いただいた内容が、塀の現状と当方要望をご勘案いただいたご提案であり、完成時の職人様のプライドと腕の良さを彷彿させる仕上がりには圧巻でした。"},
                {"title":"『プロとしての的確なアドバイス』が良かった","age":"60代","gender":"男性","location":"神奈川県横浜市","category":"浴室・バス","content":"無理なスケジュールのお願いをしたにも関わらず、素早く対応して下さりました。こまめな連絡も下さり、本当に助かりました。対処の早さと原因究明のプロ意識には驚きました。"},
                {"title":"『満足のいく仕上がり』が良かった","age":"70代","gender":"女性","location":"東京都町田市","category":"勝手口ドア交換","content":"棟梁の熟練した技術と真摯な仕事振り、加えて熱心な営業の方のお蔭で、施工は大満足の仕上がりでした。"},
                {"title":"『納得の価格』が良かった","age":"80代","gender":"女性","location":"神奈川県横浜市","category":"廊下張り替え","content":"築43年家屋の廊下の張り替え工事でしたが、見事な仕上がりで大変満足しております。大工さんはとても腕の良い方で綺麗に均一にして見違える仕上がりで心から感謝しております。"},
                {"title":"『満足のいく仕上がり』が良かった","age":"60代","gender":"男性","location":"神奈川県横浜市","category":"屋根・廊下","content":"工期は少しかかりましたが、丁寧な作業で大変満足の仕上がりです。"},
                {"title":"『満足のいく仕上がり』が良かった","age":"50代","gender":"男性","location":"神奈川県川崎市","category":"外構・エクステリア","content":"細かい指示なくとも安心して任せられる業者さんです。外構工事でも養生から隣家への配慮も行き届き仕上がりも丁寧です。"},
            ]
            cards = ''
            for i, r in enumerate(reviews_data):
                cards += f'''<div class="review-card fade-up is-visible">
                  <div class="review-header"><div class="review-meta">
                    <span class="review-badge">{r["category"]}</span>
                    <span>{r["location"]} {r["age"]}/{r["gender"]}</span>
                  </div><h3 class="review-title">{r["title"]}</h3></div>
                  <p class="review-content">{r["content"]}</p>
                  <div class="review-stars">★★★★★</div></div>'''
            # Extract style tag from Reviews.js
            style_match = re.search(r'(<style>.*?</style>)', js, re.DOTALL)
            style_html = style_match.group(1) if style_match else ''
            parts.append(f'''<section id="reviews" class="reviews-section">
              <div class="container"><h2 class="section-title">お客様の声</h2>
              <div class="reviews-grid">{cards}</div>
              <div class="reviews-footer"><p>ホームプロでの評価平均 4.8/5.0 (2024年現在)</p></div>
              </div></section>{style_html}''')
        else:
            html = extract_html(js)
            # Also extract any style tags that might be after the main return
            all_styles = re.findall(r'(<style>.*?</style>)', js, re.DOTALL)
            extra = ''.join(all_styles)
            # Check if styles are already in the extracted html
            if '<style>' in html:
                parts.append(html)
            else:
                parts.append(html + extra)

# Replace image paths: /xxx -> public/xxx
content = '\n'.join(parts)
content = re.sub(r'src="/', 'src="public/', content)
content = re.sub(r"src='/", "src='public/", content)
content = re.sub(r'href="/', 'href="public/', content)
# Don't replace external URLs
content = content.replace('src="public/public/', 'src="public/')
content = content.replace('href="public/public/', 'href="public/')
# Fix external URLs that got wrongly replaced
content = re.sub(r'(src|href)="public/(https?://)', r'\1="\2', content)
# Fix anchor links
content = content.replace('href="public/#', 'href="#')
# Fix tel: links
content = content.replace('href="public/tel:', 'href="tel:')
content = content.replace('href="public/mailto:', 'href="mailto:')
# Fix gallery.html links
content = content.replace('href="public/gallery.html', 'href="gallery.html')

# Also fix CSS background-image urls
css = css.replace("url('/", "url('public/")
css = re.sub(r"url\('public/(https?://)", r"url('\1", css)

# Add is-visible to all animation classes for static preview
content = content.replace('class="fade-up"', 'class="fade-up is-visible"')
content = content.replace('class="fade-in"', 'class="fade-in is-visible"')
content = content.replace('class="fade-left"', 'class="fade-left is-visible"')
content = content.replace('class="fade-right"', 'class="fade-right is-visible"')
content = content.replace('class="zoom-in"', 'class="zoom-in is-visible"')
content = content.replace('class="fade-up ', 'class="fade-up is-visible ')
content = content.replace('class="fade-in ', 'class="fade-in is-visible ')
content = content.replace('class="fade-left ', 'class="fade-left is-visible ')
content = content.replace('class="fade-right ', 'class="fade-right is-visible ')

html_out = f'''<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>柿本ホーム産業 | プレビュー</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500&family=Noto+Sans+JP:wght@300;400;500;600;700&family=Noto+Serif+JP:wght@300;400;500;700&family=Yuji+Syuku&display=swap" rel="stylesheet">
  <style>{css}</style>
  <style>
    /* Hide loader for preview */
    #loader {{ display: none !important; }}
  </style>
</head>
<body>
  <div id="app">
    <main>
      {content}
    </main>
  </div>
  <script>
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(a => {{
      a.addEventListener('click', function(e) {{
        e.preventDefault();
        const t = document.querySelector(this.getAttribute('href'));
        if(t) t.scrollIntoView({{behavior:'smooth'}});
      }});
    }});
    // Mobile menu
    const mt = document.querySelector('.mobile-menu-toggle');
    const nav = document.querySelector('.nav');
    if(mt && nav) {{
      mt.addEventListener('click', () => {{
        nav.classList.toggle('active');
        mt.classList.toggle('active');
      }});
    }}
  </script>
</body>
</html>'''

out_path = os.path.join(BASE, '_preview.html')
with open(out_path, 'w', encoding='utf-8') as f:
    f.write(html_out)
print(f'Preview built: {out_path}')
