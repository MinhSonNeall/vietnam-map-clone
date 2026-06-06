const provinces = [
  { name: "Lai Châu", type: "Tỉnh", region: "Bắc Bộ", center: "Lai Châu", former: ["Không đổi"], area: "9.068 km²", population: "khoảng 0,5 triệu", lat: 22.39, lon: 103.47 },
  { name: "Điện Biên", type: "Tỉnh", region: "Bắc Bộ", center: "Điện Biên Phủ", former: ["Không đổi"], area: "9.540 km²", population: "khoảng 0,7 triệu", lat: 21.39, lon: 103.02 },
  { name: "Sơn La", type: "Tỉnh", region: "Bắc Bộ", center: "Sơn La", former: ["Không đổi"], area: "14.109 km²", population: "khoảng 1,3 triệu", lat: 21.33, lon: 103.91 },
  { name: "Lào Cai", type: "Tỉnh", region: "Bắc Bộ", center: "Lào Cai", former: ["Lào Cai", "Yên Bái"], area: "13.256,92 km²", population: "1.778.785", lat: 22.48, lon: 104.03 },
  { name: "Tuyên Quang", type: "Tỉnh", region: "Bắc Bộ", center: "Tuyên Quang", former: ["Hà Giang", "Tuyên Quang"], area: "13.795,5 km²", population: "1.865.270", lat: 22.12, lon: 105.03 },
  { name: "Cao Bằng", type: "Tỉnh", region: "Bắc Bộ", center: "Cao Bằng", former: ["Không đổi"], area: "6.700 km²", population: "khoảng 0,6 triệu", lat: 22.67, lon: 106.26 },
  { name: "Lạng Sơn", type: "Tỉnh", region: "Bắc Bộ", center: "Lạng Sơn", former: ["Không đổi"], area: "8.310 km²", population: "khoảng 0,8 triệu", lat: 21.85, lon: 106.76 },
  { name: "Thái Nguyên", type: "Tỉnh", region: "Bắc Bộ", center: "Thái Nguyên", former: ["Bắc Kạn", "Thái Nguyên"], area: "8.375,21 km²", population: "1.799.489", lat: 21.68, lon: 105.84 },
  { name: "Phú Thọ", type: "Tỉnh", region: "Bắc Bộ", center: "Việt Trì", former: ["Vĩnh Phúc", "Hòa Bình", "Phú Thọ"], area: "9.361,38 km²", population: "4.022.638", lat: 21.25, lon: 105.22 },
  { name: "Bắc Ninh", type: "Tỉnh", region: "Bắc Bộ", center: "Bắc Ninh", former: ["Bắc Giang", "Bắc Ninh"], area: "4.718,6 km²", population: "3.619.433", lat: 21.20, lon: 106.12 },
  { name: "Quảng Ninh", type: "Tỉnh", region: "Bắc Bộ", center: "Hạ Long", former: ["Không đổi"], area: "6.178 km²", population: "khoảng 1,4 triệu", lat: 21.12, lon: 107.31 },
  { name: "Hà Nội", type: "Thành phố", region: "Bắc Bộ", center: "Hà Nội", former: ["Không đổi"], area: "3.360 km²", population: "khoảng 8,7 triệu", lat: 21.03, lon: 105.85 },
  { name: "Hưng Yên", type: "Tỉnh", region: "Bắc Bộ", center: "Hưng Yên", former: ["Thái Bình", "Hưng Yên"], area: "2.514,81 km²", population: "3.567.943", lat: 20.75, lon: 106.12 },
  { name: "Hải Phòng", type: "Thành phố", region: "Bắc Bộ", center: "Hải Phòng", former: ["Hải Phòng", "Hải Dương"], area: "3.194,72 km²", population: "4.664.124", lat: 20.86, lon: 106.68 },
  { name: "Ninh Bình", type: "Tỉnh", region: "Bắc Bộ", center: "Ninh Bình", former: ["Hà Nam", "Nam Định", "Ninh Bình"], area: "3.942,62 km²", population: "4.412.264", lat: 20.25, lon: 105.97 },
  { name: "Thanh Hóa", type: "Tỉnh", region: "Bắc Trung Bộ", center: "Thanh Hóa", former: ["Không đổi"], area: "11.115 km²", population: "khoảng 3,7 triệu", lat: 19.81, lon: 105.78 },
  { name: "Nghệ An", type: "Tỉnh", region: "Bắc Trung Bộ", center: "Vinh", former: ["Không đổi"], area: "16.493 km²", population: "khoảng 3,5 triệu", lat: 19.23, lon: 104.92 },
  { name: "Hà Tĩnh", type: "Tỉnh", region: "Bắc Trung Bộ", center: "Hà Tĩnh", former: ["Không đổi"], area: "5.990 km²", population: "khoảng 1,3 triệu", lat: 18.35, lon: 105.89 },
  { name: "Quảng Trị", type: "Tỉnh", region: "Bắc Trung Bộ", center: "Đông Hà", former: ["Quảng Bình", "Quảng Trị"], area: "12.700 km²", population: "1.870.845", lat: 17.43, lon: 106.75 },
  { name: "Huế", type: "Thành phố", region: "Bắc Trung Bộ", center: "Huế", former: ["Thừa Thiên Huế"], area: "4.947 km²", population: "khoảng 1,2 triệu", lat: 16.46, lon: 107.59 },
  { name: "Đà Nẵng", type: "Thành phố", region: "Nam Trung Bộ", center: "Đà Nẵng", former: ["Đà Nẵng", "Quảng Nam"], area: "11.859,59 km²", population: "3.065.628", lat: 15.88, lon: 108.22 },
  { name: "Quảng Ngãi", type: "Tỉnh", region: "Nam Trung Bộ", center: "Quảng Ngãi", former: ["Kon Tum", "Quảng Ngãi"], area: "14.832,55 km²", population: "2.161.755", lat: 15.12, lon: 108.79 },
  { name: "Gia Lai", type: "Tỉnh", region: "Tây Nguyên", center: "Pleiku", former: ["Bình Định", "Gia Lai"], area: "21.576,53 km²", population: "3.583.693", lat: 13.98, lon: 108.00 },
  { name: "Đắk Lắk", type: "Tỉnh", region: "Tây Nguyên", center: "Buôn Ma Thuột", former: ["Phú Yên", "Đắk Lắk"], area: "18.096,40 km²", population: "3.346.853", lat: 12.86, lon: 108.15 },
  { name: "Khánh Hòa", type: "Tỉnh", region: "Nam Trung Bộ", center: "Nha Trang", former: ["Ninh Thuận", "Khánh Hòa"], area: "8.555,86 km²", population: "2.243.554", lat: 12.24, lon: 109.19 },
  { name: "Lâm Đồng", type: "Tỉnh", region: "Tây Nguyên", center: "Đà Lạt", former: ["Đắk Nông", "Bình Thuận", "Lâm Đồng"], area: "24.233,07 km²", population: "3.872.999", lat: 11.78, lon: 108.30 },
  { name: "Đồng Nai", type: "Tỉnh", region: "Đông Nam Bộ", center: "Biên Hòa", former: ["Bình Phước", "Đồng Nai"], area: "12.737,18 km²", population: "4.491.408", lat: 11.05, lon: 107.05 },
  { name: "Tây Ninh", type: "Tỉnh", region: "Đông Nam Bộ", center: "Tây Ninh", former: ["Long An", "Tây Ninh"], area: "8.536,44 km²", population: "3.254.170", lat: 10.98, lon: 106.10 },
  { name: "TP. Hồ Chí Minh", type: "Thành phố", region: "Đông Nam Bộ", center: "TP. Hồ Chí Minh", former: ["TP. Hồ Chí Minh", "Bình Dương", "Bà Rịa - Vũng Tàu"], area: "6.772,59 km²", population: "14.002.598", lat: 10.78, lon: 106.70 },
  { name: "Đồng Tháp", type: "Tỉnh", region: "Tây Nam Bộ", center: "Cao Lãnh", former: ["Tiền Giang", "Đồng Tháp"], area: "5.938,64 km²", population: "4.370.046", lat: 10.46, lon: 105.63 },
  { name: "Vĩnh Long", type: "Tỉnh", region: "Tây Nam Bộ", center: "Vĩnh Long", former: ["Bến Tre", "Trà Vinh", "Vĩnh Long"], area: "6.296,20 km²", population: "4.257.581", lat: 10.10, lon: 106.00 },
  { name: "Cần Thơ", type: "Thành phố", region: "Tây Nam Bộ", center: "Cần Thơ", former: ["Cần Thơ", "Sóc Trăng", "Hậu Giang"], area: "6.360,83 km²", population: "4.199.824", lat: 9.95, lon: 105.72 },
  { name: "An Giang", type: "Tỉnh", region: "Tây Nam Bộ", center: "Long Xuyên", former: ["Kiên Giang", "An Giang"], area: "9.888,91 km²", population: "4.952.238", lat: 10.38, lon: 104.95 },
  { name: "Cà Mau", type: "Tỉnh", region: "Tây Nam Bộ", center: "Cà Mau", former: ["Bạc Liêu", "Cà Mau"], area: "7.942,39 km²", population: "2.606.672", lat: 9.18, lon: 105.15 }
];

// Ánh xạ slug (thuộc tính data-p trong SVG) -> tên tỉnh/thành trong dữ liệu.
// Các đảo / quần đảo trỏ về tỉnh/thành đang quản lý.
const slugToName = {
  "lai-chau": "Lai Châu", "dien-bien": "Điện Biên", "son-la": "Sơn La", "lao-cai": "Lào Cai",
  "tuyen-quang": "Tuyên Quang", "cao-bang": "Cao Bằng", "lang-son": "Lạng Sơn", "thai-nguyen": "Thái Nguyên",
  "phu-tho": "Phú Thọ", "bac-ninh": "Bắc Ninh", "quang-ninh": "Quảng Ninh", "ha-noi": "Hà Nội",
  "hung-yen": "Hưng Yên", "hai-phong": "Hải Phòng", "ninh-binh": "Ninh Bình", "thanh-hoa": "Thanh Hóa",
  "nghe-an": "Nghệ An", "ha-tinh": "Hà Tĩnh", "quang-tri": "Quảng Trị", "thua-thien-hue": "Huế",
  "da-nang": "Đà Nẵng", "quang-ngai": "Quảng Ngãi", "gia-lai": "Gia Lai", "dak-lak": "Đắk Lắk",
  "khanh-hoa": "Khánh Hòa", "lam-dong": "Lâm Đồng", "dong-nai": "Đồng Nai", "tay-ninh": "Tây Ninh",
  "ho-chi-minh": "TP. Hồ Chí Minh", "dong-thap": "Đồng Tháp", "vinh-long": "Vĩnh Long", "can-tho": "Cần Thơ",
  "an-giang": "An Giang", "ca-mau": "Cà Mau",
  // đảo / quần đảo -> tỉnh quản lý
  "cat-ba": "Hải Phòng", "con-co": "Quảng Trị", "dao-ly-son": "Quảng Ngãi", "dao-phu-quy": "Lâm Đồng",
  "quan-dao-hoang-sa": "Đà Nẵng", "quan-dao-truong-sa": "Khánh Hòa", "dao-con-son": "TP. Hồ Chí Minh",
  "dao-phu-quoc": "An Giang", "hon-son": "An Giang", "hon-khoai": "Cà Mau"
};

// Nhãn tooltip riêng cho các đảo (kèm tỉnh quản lý).
const islandLabel = {
  "cat-ba": "Cát Bà (Hải Phòng)", "con-co": "Cồn Cỏ (Quảng Trị)", "dao-ly-son": "Đảo Lý Sơn (Quảng Ngãi)",
  "dao-phu-quy": "Đảo Phú Quý (Lâm Đồng)", "quan-dao-hoang-sa": "Quần đảo Hoàng Sa (Đà Nẵng)",
  "quan-dao-truong-sa": "Quần đảo Trường Sa (Khánh Hòa)", "dao-con-son": "Đảo Côn Sơn (TP. Hồ Chí Minh)",
  "dao-phu-quoc": "Đảo Phú Quốc (An Giang)", "hon-son": "Hòn Sơn (An Giang)", "hon-khoai": "Hòn Khoai (Cà Mau)"
};

const provinceByName = {};
provinces.forEach((province) => {
  provinceByName[province.name] = province;
});

const mapViewport = document.querySelector("#mapViewport");
const mapCanvas = document.querySelector("#mapCanvas");
const provinceDetail = document.querySelector("#provinceDetail");
const provinceList = document.querySelector("#provinceList");
const searchInput = document.querySelector("#searchInput");
const regionFilter = document.querySelector("#regionFilter");
const resultCount = document.querySelector("#resultCount");
const tooltip = document.querySelector("#provinceTooltip");
const provinceContent = document.querySelector("#provinceContent");

let activeProvince = provinceByName["Hà Nội"];
let scale = 0.75; // mặc định ở mức zoom nhỏ nhất
let offsetX = 0;
let offsetY = 0;
let dragging = false;
let dragStart = { x: 0, y: 0, offsetX: 0, offsetY: 0 };

function normalize(value) {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/đ/g, "d");
}

function visibleProvinces() {
  const query = normalize(searchInput.value.trim());
  const region = regionFilter.value;

  return provinces.filter((province) => {
    const text = normalize(`${province.name} ${province.center} ${province.former.join(" ")}`);
    const matchesSearch = !query || text.includes(query);
    const matchesRegion = region === "all" || province.region === region;
    return matchesSearch && matchesRegion;
  });
}

function applyTransform() {
  mapCanvas.style.transform = `translate(calc(-50% + ${offsetX}px), calc(-50% + ${offsetY}px)) scale(${scale})`;
}

/* ===== Bản đồ SVG ===== */
function initMap() {
  mapCanvas.innerHTML = window.MAP_SVG || "";

  const groups = [...mapCanvas.querySelectorAll("g.province[data-p]")];

  // Nhóm các vùng theo tên tỉnh để đảo và tỉnh quản lý cùng phản ứng khi hover.
  const groupsByName = {};
  groups.forEach((group) => {
    const name = slugToName[group.getAttribute("data-p")];
    if (!name) return;
    (groupsByName[name] = groupsByName[name] || []).push(group);
  });

  groups.forEach((group) => {
    const slug = group.getAttribute("data-p");
    const name = slugToName[slug];
    const province = name ? provinceByName[name] : null;
    const label = islandLabel[slug] || name || slug;
    const linked = name ? groupsByName[name] : [group];

    group.setAttribute("tabindex", "0");
    group.setAttribute("role", "button");
    group.setAttribute("aria-label", label);

    group.addEventListener("mouseenter", (event) => {
      linked.forEach((g) => g.classList.add("hovered"));
      showTooltip(event, label);
    });
    group.addEventListener("mousemove", moveTooltip);
    group.addEventListener("mouseleave", () => {
      linked.forEach((g) => g.classList.remove("hovered"));
      hideTooltip();
    });
    group.addEventListener("click", () => {
      if (province) selectProvince(province, true);
    });
    group.addEventListener("keydown", (event) => {
      if (event.key !== "Enter" && event.key !== " ") return;
      event.preventDefault();
      if (province) selectProvince(province, true);
    });
  });

  setupPopVectors();
}

// Tính hướng "tách ra" cho mỗi tỉnh: đẩy ra xa tâm đất liền Việt Nam.
function setupPopVectors() {
  const groups = [...mapCanvas.querySelectorAll("g.province[data-p]")];
  const centers = [];
  let sumX = 0;
  let sumY = 0;
  let count = 0;

  groups.forEach((group) => {
    let bbox;
    try {
      bbox = group.getBBox();
    } catch (error) {
      return;
    }
    const cx = bbox.x + bbox.width / 2;
    const cy = bbox.y + bbox.height / 2;
    const isIsland = !!islandLabel[group.getAttribute("data-p")];
    centers.push({ group, cx, cy });
    // Chỉ dùng các tỉnh đất liền để tính tâm (bỏ qua đảo ở xa)
    if (!isIsland) {
      sumX += cx;
      sumY += cy;
      count += 1;
    }
  });

  if (!count) return;
  const mapCx = sumX / count;
  const mapCy = sumY / count;
  const POP = 50; // khoảng cách tách ra (đơn vị toạ độ SVG)

  centers.forEach(({ group, cx, cy }) => {
    let dx = cx - mapCx;
    let dy = cy - mapCy;
    const len = Math.hypot(dx, dy) || 1;
    group.style.setProperty("--pop-x", ((dx / len) * POP).toFixed(1) + "px");
    group.style.setProperty("--pop-y", ((dy / len) * POP).toFixed(1) + "px");
  });
}

function syncMap() {
  const visibleNames = new Set(visibleProvinces().map((province) => province.name));

  mapCanvas.querySelectorAll("g.province[data-p]").forEach((group) => {
    const name = slugToName[group.getAttribute("data-p")];
    const isVisible = name ? visibleNames.has(name) : false;
    group.classList.toggle("filtered-out", !isVisible);
    group.classList.toggle("is-active", !!name && name === activeProvince.name);
  });
}

/* ===== Tooltip tên tỉnh khi hover ===== */
function showTooltip(event, text) {
  if (dragging) return;
  tooltip.textContent = text;
  tooltip.style.display = "block";
  moveTooltip(event);
}

function moveTooltip(event) {
  const offset = 14;
  const x = Math.min(event.clientX + offset, window.innerWidth - tooltip.offsetWidth - offset);
  const y = Math.min(event.clientY + offset, window.innerHeight - tooltip.offsetHeight - offset);
  tooltip.style.left = `${Math.max(offset, x)}px`;
  tooltip.style.top = `${Math.max(offset, y)}px`;
}

function hideTooltip() {
  tooltip.style.display = "none";
}

/* ===== Panel chi tiết + lịch sử ===== */
function renderHistory(name) {
  const data = typeof historyData !== "undefined" ? historyData[name] : null;
  if (!data) {
    return `<p class="history-empty">Chưa có thông tin lịch sử cho ${name}. Bạn có thể bổ sung trong file <code>history.js</code>.</p>`;
  }

  const timeline = (data.timeline || [])
    .map(
      (item) => `
        <li>
          <span class="tl-year">${item.year}</span>
          <span class="tl-event">${item.event}</span>
        </li>`
    )
    .join("");

  const figures = (data.figures || [])
    .map((figure) => `<span class="chip">${figure}</span>`)
    .join("");

  const sites = (data.sites || [])
    .map((site) => `<span class="chip chip-site">${site}</span>`)
    .join("");

  return `
    <div class="history">
      <p class="history-summary">${data.summary || ""}</p>
      ${
        timeline
          ? `<div class="history-block">
               <h3>📜 Mốc lịch sử tiêu biểu</h3>
               <ul class="timeline">${timeline}</ul>
             </div>`
          : ""
      }
      ${
        figures
          ? `<div class="history-block">
               <h3>👤 Nhân vật tiêu biểu</h3>
               <div class="chip-row">${figures}</div>
             </div>`
          : ""
      }
      ${
        sites
          ? `<div class="history-block">
               <h3>🏛️ Di tích & danh thắng</h3>
               <div class="chip-row">${sites}</div>
             </div>`
          : ""
      }
    </div>
  `;
}

/* ===== Nội dung chi tiết (main-content) ===== */
function renderMainContent() {
  const content = (window.PROVINCE_CONTENT || {})[activeProvince.name];

  if (!content) {
    provinceContent.innerHTML = `
      <div class="pc-head">
        <p class="pc-eyebrow">${activeProvince.region}</p>
        <h2>${activeProvince.name}</h2>
      </div>
      <div class="pc-empty">
        <p>📝 Nội dung chi tiết cho <strong>${activeProvince.name}</strong> đang được cập nhật.</p>
        <p>Bạn có thể bổ sung trong thư mục <code>data/</code> (theo vùng) — xem mẫu ở <code>data/bac-bo.js</code>.</p>
      </div>
    `;
    return;
  }

  const gallery = (content.images || [])
    .map(
      (image) => `
        <figure class="pc-photo">
          <img src="${image.src}" alt="${image.caption || activeProvince.name}" loading="lazy" />
          <figcaption>${image.caption || ""}</figcaption>
        </figure>`
    )
    .join("");

  const overview = (content.overview || [])
    .map((paragraph) => `<p>${paragraph}</p>`)
    .join("");

  const sections = (content.sections || [])
    .map(
      (section) => `
        <div class="pc-section">
          <h3>${section.title}</h3>
          ${(section.body || []).map((paragraph) => `<p>${paragraph}</p>`).join("")}
        </div>`
    )
    .join("");

  const influence = (content.influence || [])
    .map((paragraph) => `<p>${paragraph}</p>`)
    .join("");

  provinceContent.innerHTML = `
    <div class="pc-head">
      <p class="pc-eyebrow">${activeProvince.region}</p>
      <h2>${activeProvince.name}</h2>
      ${content.tagline ? `<p class="pc-tagline">${content.tagline}</p>` : ""}
    </div>

    ${gallery ? `<div class="pc-gallery">${gallery}</div>` : ""}

    ${overview ? `<div class="pc-block"><h3>Tổng quan</h3>${overview}</div>` : ""}

    ${sections ? `<div class="pc-block"><h3>Dòng lịch sử</h3><div class="pc-sections">${sections}</div></div>` : ""}

    ${influence ? `<div class="pc-block pc-influence"><h3>Ảnh hưởng &amp; di sản</h3>${influence}</div>` : ""}
  `;

  // Ảnh thiếu -> hiển thị khối placeholder thay cho ảnh vỡ
  provinceContent.querySelectorAll(".pc-photo img").forEach((img) => {
    const markMissing = () => img.closest(".pc-photo").classList.add("missing");
    if (img.complete && img.naturalWidth === 0) markMissing();
    img.addEventListener("error", markMissing);
  });
}

function renderDetail() {
  provinceDetail.innerHTML = `
    <h2>${activeProvince.name}</h2>
    <div class="badge-row">
      <span class="badge">${activeProvince.type}</span>
      <span class="badge">${activeProvince.region}</span>
    </div>
    <div class="detail-grid">
      <div>
        <span>Trung tâm</span>
        <strong>${activeProvince.center}</strong>
      </div>
      <div>
        <span>Diện tích</span>
        <strong>${activeProvince.area}</strong>
      </div>
      <div>
        <span>Dân số</span>
        <strong>${activeProvince.population}</strong>
      </div>
      <div>
        <span>Hình thành từ</span>
        <strong>${activeProvince.former.join(", ")}</strong>
      </div>
    </div>
    ${renderHistory(activeProvince.name)}
  `;
}

function renderList() {
  const filtered = visibleProvinces();
  provinceList.innerHTML = "";
  resultCount.textContent = `${filtered.length} kết quả`;

  filtered.forEach((province) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "province-item";
    if (province.name === activeProvince.name) {
      button.classList.add("active");
    }
    button.innerHTML = `
      <span>
        <strong>${province.name}</strong>
        <span>${province.former.join(", ")}</span>
      </span>
      <em>${province.region}</em>
    `;
    button.addEventListener("click", () => selectProvince(province, true));
    provinceList.appendChild(button);
  });

  syncMap();
}

function selectProvince(province, scrollToContent) {
  activeProvince = province;
  renderDetail();
  renderMainContent();
  renderList();
  hideTooltip();
  if (scrollToContent) {
    provinceContent.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

/* ===== Phóng to / kéo bản đồ ===== */
function setScale(nextScale, anchorX, anchorY) {
  const clamped = Math.min(2.8, Math.max(0.75, nextScale));
  if (clamped === scale) return;

  const rect = mapViewport.getBoundingClientRect();
  const cx = anchorX ?? rect.left + rect.width / 2;
  const cy = anchorY ?? rect.top + rect.height / 2;
  const dx = cx - (rect.left + rect.width / 2);
  const dy = cy - (rect.top + rect.height / 2);
  const ratio = clamped / scale;

  offsetX = dx - (dx - offsetX) * ratio;
  offsetY = dy - (dy - offsetY) * ratio;
  scale = clamped;
  applyTransform();
}

function resetMap() {
  scale = 0.75;
  offsetX = 0;
  offsetY = 0;
  applyTransform();
}

mapViewport.addEventListener("wheel", (event) => {
  event.preventDefault();
  const direction = event.deltaY > 0 ? -0.12 : 0.12;
  setScale(scale + direction, event.clientX, event.clientY);
}, { passive: false });

mapViewport.addEventListener("pointerdown", (event) => {
  // Bấm trúng một tỉnh thì để tỉnh tự xử lý click, không kéo bản đồ.
  if (event.target.closest(".province")) return;
  dragging = true;
  mapViewport.classList.add("dragging");
  hideTooltip();
  dragStart = { x: event.clientX, y: event.clientY, offsetX, offsetY };
  mapViewport.setPointerCapture(event.pointerId);
});

mapViewport.addEventListener("pointermove", (event) => {
  if (!dragging) return;
  offsetX = dragStart.offsetX + event.clientX - dragStart.x;
  offsetY = dragStart.offsetY + event.clientY - dragStart.y;
  applyTransform();
});

mapViewport.addEventListener("pointerup", () => {
  dragging = false;
  mapViewport.classList.remove("dragging");
});

mapViewport.addEventListener("pointerleave", () => {
  dragging = false;
  mapViewport.classList.remove("dragging");
});

document.querySelector("#zoomIn").addEventListener("click", () => setScale(scale + 0.2));
document.querySelector("#zoomOut").addEventListener("click", () => setScale(scale - 0.2));
document.querySelector("#resetMap").addEventListener("click", resetMap);
searchInput.addEventListener("input", renderList);
regionFilter.addEventListener("change", renderList);

initMap();
renderDetail();
renderMainContent();
renderList();
applyTransform();
