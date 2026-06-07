// Các thời kỳ lịch sử (tô màu + chia khoảng). Thứ tự = thứ tự thời gian.
const eras = {
  "dung-nuoc": { label: "Thời dựng nước", short: "Dựng nước", color: "#d98324" },
  "bac-thuoc": { label: "Thời Bắc thuộc", short: "Bắc thuộc", color: "#9c6b3f" },
  // --- Các triều đại thời phong kiến (gộp dưới nhóm "Phong kiến") ---
  "ngo-dinh-le": { label: "Ngô – Đinh – Tiền Lê", short: "Ngô–Đinh–Lê", color: "#cb6d2e" },
  "ly": { label: "Nhà Lý", short: "Nhà Lý", color: "#c0392b" },
  "tran": { label: "Nhà Trần", short: "Nhà Trần", color: "#7a0d12" },
  "ho-minh": { label: "Nhà Hồ – thuộc Minh", short: "Hồ – Minh", color: "#8e5a2b" },
  "le-so": { label: "Nhà Lê sơ", short: "Lê sơ", color: "#b8860b" },
  "mac-trinh-nguyen": { label: "Mạc – Trịnh – Nguyễn (phân tranh)", short: "Mạc–Trịnh–Nguyễn", color: "#a93226" },
  "tay-son": { label: "Nhà Tây Sơn", short: "Tây Sơn", color: "#e67e22" },
  "nguyen": { label: "Nhà Nguyễn", short: "Nhà Nguyễn", color: "#6e2c00" },
  // --- Hết nhóm phong kiến ---
  "phap-thuoc": { label: "Thời Pháp thuộc", short: "Pháp thuộc", color: "#4a5a6a" },
  "hien-dai": { label: "Thời hiện đại", short: "Hiện đại", color: "#d32f2f" }
};

// Nhóm "Phong kiến" gồm các triều đại (hiển thị 2 tầng: dải lớn trùm + triều đại con).
const GROUP = {
  key: "phong-kien",
  short: "Phong kiến",
  color: "#7a0d12",
  eras: ["ngo-dinh-le", "ly", "tran", "ho-minh", "le-so", "mac-trinh-nguyen", "tay-son", "nguyen"]
};

// Mốc lấy từ data/, sắp theo năm (trường "y").
const milestones = (window.TIMELINE || []).slice().sort((a, b) => a.y - b.y);

// Gom mốc theo thời kỳ (theo thứ tự eras).
const eraOrder = Object.keys(eras).filter((k) => milestones.some((m) => m.era === k));
const eraGroups = {};
eraOrder.forEach((k) => {
  eraGroups[k] = milestones.filter((m) => m.era === k);
});

const bar = document.querySelector("#tlBar");
const content = document.querySelector("#tlContent");
const slides = document.querySelector("#tlSlides");
const counter = document.querySelector("#tlCounter");
const prevBtn = document.querySelector("#tlPrev");
const nextBtn = document.querySelector("#tlNext");

const total = milestones.length;
const ACTIVE_GROW = Math.round(total * 1.6);
const baseGrow = (k) => eraGroups[k].length;

let activeEra = null;
let activeIndex = -1;
let hoverEra = null;
let dragging = false;
let groupHover = false;
let hideTimer = null;

// ===== Thanh line 2 tầng: dải "Phong kiến" trùm lên các triều đại con =====
function segHtml(k) {
  const g = eraGroups[k];
  const n = g.length;
  const points = g
    .map((m, i) => {
      const gi = milestones.indexOf(m);
      const left = n === 1 ? 50 : 8 + (i / (n - 1)) * 84;
      return `<button class="tl-pt" data-i="${gi}" type="button" style="left:${left}%" title="${m.year} — ${m.title}"><span class="tl-pt-year">${m.year}</span><span class="tl-pt-dot"></span></button>`;
    })
    .join("");
  return `<div class="tl-seg" data-era="${k}" style="flex-grow:${n};--c:${eras[k].color}"><span class="tl-seg-name"><span class="tl-seg-dot"></span>${eras[k].short}</span><div class="tl-seg-track">${points}</div></div>`;
}

// Vị trí dải phong kiến trong eraOrder (các triều đại nằm liền nhau)
const dynPresent = GROUP.eras.filter((k) => eraOrder.indexOf(k) >= 0);
const dynIdxs = eraOrder.map((k, i) => (dynPresent.indexOf(k) >= 0 ? i : -1)).filter((i) => i >= 0);
const firstDyn = dynIdxs[0];
const lastDyn = dynIdxs[dynIdxs.length - 1];
const groupGrow = dynPresent.reduce((s, k) => s + baseGrow(k), 0);
const groupHtml = `
  <div class="tl-group" data-group="${GROUP.key}" style="flex-grow:${groupGrow};--c:${GROUP.color}">
    <span class="tl-group-label"><span class="tl-seg-dot"></span>${GROUP.short}</span>
    <div class="tl-group-bar"></div>
    <div class="tl-group-inner">${dynPresent.map(segHtml).join("")}</div>
  </div>`;

bar.innerHTML =
  eraOrder.slice(0, firstDyn).map(segHtml).join("") +
  groupHtml +
  eraOrder.slice(lastDyn + 1).map(segHtml).join("");

const segs = [...bar.querySelectorAll(".tl-seg")];
const groupEl = bar.querySelector(".tl-group");

// Chú giải (hiện trên màn hình nhỏ thay bong bóng nổi). Chạm để chọn thời kỳ/triều đại.
const legend = document.createElement("div");
legend.className = "tl-legend";
legend.innerHTML = eraOrder
  .map(
    (k) =>
      `<button class="tl-legend-item" type="button" data-era="${k}" style="--c:${eras[k].color}"><span class="tl-legend-dot"></span>${eras[k].short}</button>`
  )
  .join("");
bar.parentElement.insertBefore(legend, bar);
const legendItems = [...legend.querySelectorAll(".tl-legend-item")];
legendItems.forEach((item) => {
  item.addEventListener("click", () => {
    selectMilestone(milestones.findIndex((m) => m.era === item.dataset.era));
  });
});

// ===== Nội dung trượt (tất cả các mốc) =====
slides.innerHTML = milestones
  .map((m, index) => {
    const color = (eras[m.era] || {}).color || "#b01622";
    const eraLabel = (eras[m.era] || {}).label || "";
    const detail = m.detail || (window.TIMELINE_DETAIL || {})[m.y] || "";
    const imgFile = (window.TIMELINE_IMG || {})[index + 1];
    const img = imgFile
      ? `<img class="tl-photo" loading="lazy" src="../img/thoi-ky/${imgFile}" alt="${m.title.replace(/"/g, "")}" />`
      : "";
    return `
      <section class="tl-slide">
        <div class="tl-slide-card" style="border-top-color:${color}">
          <span class="tl-era" style="background:${color}">${eraLabel}</span>
          <div class="tl-bigyear" style="color:${color}">${m.year}</div>
          <h2>${m.title}</h2>
          ${img}
          ${detail ? `<div class="tl-detail">${detail}</div>` : (m.desc ? `<p class="tl-lead">${m.desc}</p>` : "")}
        </div>
      </section>`;
  })
  .join("");

// Khoảng được "mở" = đang hover (preview) hoặc đang chọn (pinned)
function applyExpansion() {
  const expanded = hoverEra || activeEra;
  segs.forEach((s) => {
    const isExp = s.dataset.era === expanded;
    s.classList.toggle("expanded", isExp);
    s.classList.toggle("active", s.dataset.era === activeEra);
    s.style.flexGrow = isExp ? ACTIVE_GROW : baseGrow(s.dataset.era);
  });
  if (groupEl) {
    const dynActive = GROUP.eras.indexOf(activeEra) >= 0;
    const open = groupHover || GROUP.eras.indexOf(hoverEra) >= 0 || dynActive;
    groupEl.classList.toggle("open", open);
    groupEl.classList.toggle("active", dynActive);
    groupEl.style.flexGrow = open ? ACTIVE_GROW : groupGrow;
  }
  legendItems.forEach((it) => it.classList.toggle("active", it.dataset.era === activeEra));
}

function deselect() {
  activeEra = null;
  activeIndex = -1;
  hoverEra = null;
  segs.forEach((s) => {
    s.classList.remove("active", "expanded");
    s.style.flexGrow = baseGrow(s.dataset.era);
  });
  groupHover = false;
  if (groupEl) {
    groupEl.style.flexGrow = groupGrow;
    groupEl.classList.remove("active", "expanded", "open");
  }
  bar.querySelectorAll(".tl-pt.active").forEach((p) => p.classList.remove("active"));
  legendItems.forEach((it) => it.classList.remove("active"));
  hideContent();
}

// Hiện/ẩn khối nội dung có hiệu ứng mờ (mượt hơn bật/tắt đột ngột)
function showContent() {
  if (hideTimer) {
    clearTimeout(hideTimer);
    hideTimer = null;
  }
  content.hidden = false;
  void content.offsetWidth; // ép reflow để transition chạy từ trạng thái ẩn
  content.classList.add("show");
}

function hideContent() {
  content.classList.remove("show");
  if (hideTimer) clearTimeout(hideTimer);
  hideTimer = setTimeout(() => {
    content.hidden = true;
    hideTimer = null;
  }, 320);
}

// Hover để PREVIEW các mốc trong khoảng (không thay đổi lựa chọn)
segs.forEach((seg) => {
  seg.addEventListener("mouseenter", () => {
    if (dragging) return;
    hoverEra = seg.dataset.era;
    applyExpansion();
  });
  seg.addEventListener("mouseleave", () => {
    if (dragging) return;
    hoverEra = null;
    applyExpansion();
  });
});

// Rê chuột vào thẻ dài "Phong kiến" -> bung ra các triều đại con; rời ra -> thu lại.
if (groupEl) {
  groupEl.addEventListener("mouseenter", () => {
    if (dragging) return;
    groupHover = true;
    applyExpansion();
  });
  groupEl.addEventListener("mouseleave", () => {
    if (dragging) return;
    groupHover = false;
    hoverEra = null;
    applyExpansion();
  });
}

function activeSeg() {
  return segs.find((s) => s.dataset.era === activeEra);
}

// Tìm mốc gần nhất theo vị trí chuột trên khoảng đang mở (để kéo)
function indexFromX(clientX) {
  const seg = activeSeg();
  if (!seg) return activeIndex;
  const g = eraGroups[activeEra];
  const n = g.length;
  if (n < 2) return milestones.indexOf(g[0]);
  const rect = seg.getBoundingClientRect();
  let ratio = (clientX - rect.left) / rect.width;
  ratio = Math.min(1, Math.max(0, ratio));
  let local = (ratio - 0.08) / 0.84;
  local = Math.min(1, Math.max(0, local));
  return milestones.indexOf(g[Math.round(local * (n - 1))]);
}

function selectMilestone(i) {
  activeIndex = Math.max(0, Math.min(milestones.length - 1, i));
  activeEra = milestones[activeIndex].era;
  applyExpansion();

  bar.querySelectorAll(".tl-pt").forEach((p) => {
    p.classList.toggle("active", Number(p.dataset.i) === activeIndex);
  });

  showContent();
  slides.style.transition = "transform 0.45s ease";
  slides.style.transform = `translateX(${-activeIndex * 100}%)`;
  counter.textContent = `${activeIndex + 1} / ${milestones.length}`;
}

// ===== Bấm + kéo trên line =====
bar.addEventListener("pointerdown", (event) => {
  const seg = event.target.closest(".tl-seg");
  if (!seg) {
    // Chạm/bấm vào thẻ dài "Phong kiến" -> bung ra các triều đại con (cho cả thiết bị cảm ứng)
    if (event.target.closest(".tl-group")) {
      groupHover = true;
      applyExpansion();
    }
    return;
  }
  const era = seg.dataset.era;
  const ptBtn = event.target.closest(".tl-pt");

  dragging = true;
  bar.setPointerCapture(event.pointerId);

  if (ptBtn) {
    selectMilestone(Number(ptBtn.dataset.i));
  } else if (era !== activeEra) {
    selectMilestone(milestones.findIndex((m) => m.era === era));
  } else {
    selectMilestone(indexFromX(event.clientX));
  }
});

bar.addEventListener("pointermove", (event) => {
  if (!dragging || !activeEra) return;
  selectMilestone(indexFromX(event.clientX));
});

bar.addEventListener("pointerup", () => {
  dragging = false;
});
bar.addEventListener("pointercancel", () => {
  dragging = false;
});

prevBtn.addEventListener("click", () => selectMilestone((activeIndex < 0 ? 0 : activeIndex) - 1));
nextBtn.addEventListener("click", () => selectMilestone((activeIndex < 0 ? -1 : activeIndex) + 1));

document.addEventListener("keydown", (event) => {
  if (content.hidden) return;
  if (event.key === "ArrowLeft") selectMilestone(activeIndex - 1);
  else if (event.key === "ArrowRight") selectMilestone(activeIndex + 1);
});

// Bấm ra ngoài line & nội dung -> bỏ chọn (về mặc định)
document.addEventListener("click", (event) => {
  if (event.target.closest(".tl-line") || event.target.closest(".tl-content")) return;
  if (activeEra !== null || !content.hidden) deselect();
});
