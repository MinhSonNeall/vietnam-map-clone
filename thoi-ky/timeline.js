// Các thời kỳ lịch sử (tô màu + chia khoảng). Thứ tự = thứ tự thời gian.
const eras = {
  "dung-nuoc": { label: "Thời dựng nước", short: "Dựng nước", color: "#d98324" },
  "bac-thuoc": { label: "Thời Bắc thuộc", short: "Bắc thuộc", color: "#9c6b3f" },
  "doc-lap": { label: "Độc lập tự chủ", short: "Độc lập tự chủ", color: "#b01622" },
  "phong-kien": { label: "Các triều đại phong kiến", short: "Phong kiến", color: "#7a0d12" },
  "phap-thuoc": { label: "Thời Pháp thuộc", short: "Pháp thuộc", color: "#4a5a6a" },
  "hien-dai": { label: "Thời hiện đại", short: "Hiện đại", color: "#d32f2f" }
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

// ===== Thanh line: mỗi khoảng có bong bóng chú thích (mũi nhọn chĩa xuống) + các point trên line =====
bar.innerHTML = eraOrder
  .map((k) => {
    const g = eraGroups[k];
    const n = g.length;
    const points = g
      .map((m, i) => {
        const gi = milestones.indexOf(m);
        const left = n === 1 ? 50 : 8 + (i / (n - 1)) * 84;
        return `
          <button class="tl-pt" data-i="${gi}" type="button" style="left:${left}%" title="${m.year} — ${m.title}">
            <span class="tl-pt-year">${m.year}</span>
            <span class="tl-pt-dot"></span>
          </button>`;
      })
      .join("");
    return `
      <div class="tl-seg" data-era="${k}" style="flex-grow:${n};--c:${eras[k].color}">
        <span class="tl-seg-name"><span class="tl-seg-dot"></span>${eras[k].short}</span>
        <div class="tl-seg-track">${points}</div>
      </div>`;
  })
  .join("");
const segs = [...bar.querySelectorAll(".tl-seg")];

// Chú giải thời kỳ — hiển thị trên màn hình nhỏ (thay cho bong bóng nổi dễ bị đè).
// Chạm vào một mục để chọn thời kỳ tương ứng.
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
  .map((m) => {
    const color = (eras[m.era] || {}).color || "#b01622";
    const eraLabel = (eras[m.era] || {}).label || "";
    return `
      <section class="tl-slide">
        <div class="tl-slide-card" style="border-top-color:${color}">
          <span class="tl-era" style="background:${color}">${eraLabel}</span>
          <div class="tl-bigyear" style="color:${color}">${m.year}</div>
          <h2>${m.title}</h2>
          <p>${m.desc}</p>
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
  bar.querySelectorAll(".tl-pt.active").forEach((p) => p.classList.remove("active"));
  legendItems.forEach((it) => it.classList.remove("active"));
  content.hidden = true;
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

  content.hidden = false;
  slides.style.transition = "transform 0.45s ease";
  slides.style.transform = `translateX(${-activeIndex * 100}%)`;
  counter.textContent = `${activeIndex + 1} / ${milestones.length}`;
}

// ===== Bấm + kéo trên line =====
bar.addEventListener("pointerdown", (event) => {
  const seg = event.target.closest(".tl-seg");
  if (!seg) return;
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
