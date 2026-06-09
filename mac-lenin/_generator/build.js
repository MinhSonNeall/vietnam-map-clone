/* Sinh trang nhất + các bài viết tĩnh cho chuyên đề Mác – Lênin.
   Chạy:  node mac-lenin/_generator/build.js
   Nội dung lấy từ data.js. Mỗi bài là HTML tĩnh (nội dung inline) -> không lỗi font. */

const fs = require("fs");
const path = require("path");

const SITE = "https://fptlichsuviet.io.vn";
const data = require("./data.js");

const ROOT = path.resolve(__dirname, ".."); // .../mac-lenin
const BAI_DIR = path.join(ROOT, "bai");

// Escape cho thuộc tính/text trong thẻ meta (không dùng cho thân bài có HTML).
const esc = (s) =>
  String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

// Bỏ thẻ HTML để dùng cho description/meta.
const strip = (s) => esc(String(s).replace(/<[^>]+>/g, ""));

// Khối <head> dùng chung. rootRel = đường dẫn tương đối tới thư mục mac-lenin/.
function head({ title, desc, canonical, ogImage, ogAlt, rootRel }) {
  return `<!doctype html>
<html lang="vi">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>${esc(title)}</title>
    <meta name="description" content="${strip(desc)}" />
    <meta name="author" content="Việt Nam Sử Ký — MLN111 Group 4" />
    <meta name="robots" content="index, follow" />
    <meta name="theme-color" content="#7a0d12" />
    <link rel="canonical" href="${canonical}" />

    <meta property="og:type" content="article" />
    <meta property="og:site_name" content="Việt Nam Sử Ký" />
    <meta property="og:locale" content="vi_VN" />
    <meta property="og:url" content="${canonical}" />
    <meta property="og:title" content="${esc(title)}" />
    <meta property="og:description" content="${strip(desc)}" />
    <meta property="og:image" content="${ogImage}" />
    <meta property="og:image:alt" content="${esc(ogAlt)}" />

    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${esc(title)}" />
    <meta name="twitter:description" content="${strip(desc)}" />
    <meta name="twitter:image" content="${ogImage}" />

    <link rel="icon" href="${rootRel}../favicon.svg" type="image/svg+xml" />
    <link rel="stylesheet" href="${rootRel}assets/bao.css" />
  </head>`;
}

// ===== TRANG NHẤT =====
function buildIndex() {
  const rootRel = "./"; // đang ở trong mac-lenin/
  const img = (p) => `${rootRel}../${p}`;
  const link = (slug) => `${rootRel}bai/${slug}/`;

  const feature = data.find((a) => a.placement === "feature") || data[0];
  const sides = data.filter((a) => a.placement === "side");
  const grid = data.filter((a) => a.placement === "grid");

  const sideHtml = sides
    .map(
      (a) => `
          <article class="side-item">
            <span class="kicker">${esc(a.era)} · ${esc(a.year)}</span>
            <h3 class="side-title"><a href="${link(a.slug)}">${esc(a.title)}</a></h3>
            <p class="side-sapo">${esc(a.sapo)}</p>
          </article>`
    )
    .join("");

  const gridHtml = grid
    .map(
      (a) => `
        <article class="news-item">
          <a href="${link(a.slug)}"><img class="news-img" src="${img(a.image)}" alt="${esc(a.imageAlt)}" loading="lazy" /></a>
          <span class="kicker">${esc(a.era)} · ${esc(a.year)}</span>
          <h3 class="news-title"><a href="${link(a.slug)}">${esc(a.title)}</a></h3>
          <p class="news-sapo">${esc(a.sapo)}</p>
          <a class="readmore" href="${link(a.slug)}">Đọc bài →</a>
        </article>`
    )
    .join("");

  const html = `${head({
    title: "Lịch sử & Triết học Mác – Lênin — Việt Nam Sử Ký",
    desc:
      "Chuyên đề báo chí: soi chiếu các dấu mốc lịch sử Việt Nam qua những nguyên lý của triết học Mác – Lênin — hình thái kinh tế xã hội, lực lượng sản xuất, đấu tranh giai cấp, vai trò quần chúng nhân dân.",
    canonical: `${SITE}/mac-lenin/`,
    ogImage: `${SITE}/${feature.image}`,
    ogAlt: feature.imageAlt,
    rootRel
  })}
  <body>
    <div class="paper">
      <div class="masthead-top">
        <span>Số chuyên đề · MLN111</span>
        <a href="${rootRel}../index.html">← Về trang chủ Việt Nam Sử Ký</a>
      </div>
      <header class="masthead">
        <p class="masthead-brand">Việt Nam Sử Ký · Chuyên đề</p>
        <h1 class="masthead-title">Lịch sử &amp; Triết học Mác – Lênin</h1>
        <p class="masthead-sub">
          Mỗi dấu mốc của dân tộc là một minh chứng sống động cho những quy luật vận động của xã hội
          mà triết học Mác – Lênin đã khái quát.
        </p>
      </header>

      <div class="lead-grid">
        <article class="feature">
          <a href="${link(feature.slug)}"><img class="feature-img" src="${img(feature.image)}" alt="${esc(feature.imageAlt)}" /></a>
          <span class="kicker">Bài chính · ${esc(feature.era)} · ${esc(feature.year)}</span>
          <h2 class="feature-title"><a href="${link(feature.slug)}">${esc(feature.title)}</a></h2>
          <p class="feature-sapo">${esc(feature.sapo)}</p>
          <a class="readmore" href="${link(feature.slug)}">Đọc bài chính →</a>
        </article>
        <aside class="sidebar">${sideHtml}
        </aside>
      </div>

      <div class="section-bar"><span>Các nguyên lý qua dòng lịch sử</span></div>

      <div class="news-grid">${gridHtml}
      </div>

      <footer class="paper-footer">© Việt Nam Sử Ký — MLN111 / Group 4 · Chuyên đề Lịch sử &amp; Triết học Mác – Lênin</footer>
    </div>
  </body>
</html>
`;
  fs.writeFileSync(path.join(ROOT, "index.html"), html, "utf8");
  console.log("✓ index.html");
}

// ===== TRANG BÀI VIẾT =====
function buildArticle(a, idx) {
  const rootRel = "../../"; // từ mac-lenin/bai/<slug>/ về mac-lenin/
  const img = (p) => `${rootRel}../${p}`;
  const link = (slug) => `${rootRel}bai/${slug}/`;

  const prev = data[idx - 1];
  const next = data[idx + 1];

  // Thân bài: chèn pullquote sau mục đầu tiên để chảy đẹp trong bố cục 2 cột.
  const sections = a.body
    .map((sec, i) => {
      const paras = sec.paras.map((p) => `<p>${p}</p>`).join("\n        ");
      let block = `<h2>${esc(sec.h2)}</h2>\n        ${paras}`;
      if (i === 0 && a.pullquote) {
        block += `\n        <blockquote class="pullquote">${esc(a.pullquote.text)}<cite>— ${esc(
          a.pullquote.cite
        )}</cite></blockquote>`;
      }
      return block;
    })
    .join("\n        ");

  const navPrev = prev
    ? `<a href="${link(prev.slug)}">‹ ${esc(prev.title)}</a>`
    : `<span></span>`;
  const navNext = next
    ? `<a href="${link(next.slug)}">${esc(next.title)} ›</a>`
    : `<span></span>`;

  const html = `${head({
    title: `${a.title} — Việt Nam Sử Ký`,
    desc: a.sapo,
    canonical: `${SITE}/mac-lenin/bai/${a.slug}/`,
    ogImage: `${SITE}/${a.image}`,
    ogAlt: a.imageAlt,
    rootRel
  })}
  <body>
    <div class="paper">
      <div class="masthead-top">
        <a href="${rootRel}index.html">← Trang nhất chuyên đề</a>
        <a href="${rootRel}../index.html">Việt Nam Sử Ký</a>
      </div>
      <header class="masthead">
        <p class="masthead-brand">Việt Nam Sử Ký · Chuyên đề Mác – Lênin</p>
      </header>

      <article class="article">
        <header class="article-header">
          <span class="kicker">${esc(a.era)} · ${esc(a.year)}</span>
          <h1 class="article-title">${esc(a.title)}</h1>
          <p class="article-sapo">${esc(a.sapo)}</p>
          <p class="article-meta">Việt Nam Sử Ký — MLN111 / Group 4</p>
        </header>

        <img class="article-hero" src="${img(a.image)}" alt="${esc(a.imageAlt)}" />
        <p class="article-hero-cap">${esc(a.caption)}</p>

        <div class="principle-box">
          <span class="kicker">Nguyên lý Mác – Lênin</span>
          <p>${esc(a.principle)}</p>
        </div>

        <div class="article-body">
        ${sections}
        </div>

        <nav class="article-nav">
          ${navPrev}
          <a class="nav-home" href="${rootRel}index.html">↑ Trang nhất chuyên đề</a>
          ${navNext}
        </nav>
      </article>

      <footer class="paper-footer">© Việt Nam Sử Ký — MLN111 / Group 4 · Chuyên đề Lịch sử &amp; Triết học Mác – Lênin</footer>
    </div>
  </body>
</html>
`;
  const dir = path.join(BAI_DIR, a.slug);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, "index.html"), html, "utf8");
  console.log(`✓ bai/${a.slug}/index.html`);
}

// ===== Chạy =====
buildIndex();
data.forEach(buildArticle);
console.log(`\nHoàn tất: 1 trang nhất + ${data.length} bài viết.`);
