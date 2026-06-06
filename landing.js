// Danh sách ảnh banner (trong img/landing-page). Sửa/thêm ảnh tại đây.
const slides = [
  { src: "./img/landing-page/history-of-Vietnam-banner.jpg", caption: "Dòng chảy lịch sử Việt Nam" },
  { src: "./img/landing-page/bach-dang.jpg", caption: "Chiến thắng Bạch Đằng" },
  { src: "./img/landing-page/hoang-thanh-thang-long-1.webp", caption: "Hoàng thành Thăng Long" },
  { src: "./img/landing-page/dang-ngoai-dang-trong.webp", caption: "Thời kỳ Đàng Trong – Đàng Ngoài" },
  { src: "./img/landing-page/kinh-thanh-hue.jpg", caption: "Kinh thành Huế" },
  { src: "./img/landing-page/hoan-kiem-lake-1946.jpg", caption: "Hồ Hoàn Kiếm, Hà Nội (1946)" },
  { src: "./img/landing-page/bao-tang-quan-su.jpg", caption: "Bảo tàng Lịch sử Quân sự Việt Nam" }
];

const carousel = document.querySelector("#carousel");
const track = document.querySelector("#carouselTrack");
const dotsWrap = document.querySelector("#carouselDots");
const prevBtn = document.querySelector("#carouselPrev");
const nextBtn = document.querySelector("#carouselNext");

let index = 0;
let timer = null;

// Render các slide + dots
track.innerHTML = slides
  .map(
    (slide) => `
      <div class="carousel-slide">
        <img src="${slide.src}" alt="${slide.caption}" loading="lazy" />
        <div class="carousel-caption">${slide.caption}</div>
      </div>`
  )
  .join("");

dotsWrap.innerHTML = slides
  .map((_, i) => `<button class="carousel-dot" type="button" aria-label="Tới ảnh ${i + 1}" data-i="${i}"></button>`)
  .join("");

const dots = Array.from(dotsWrap.querySelectorAll(".carousel-dot"));

function update() {
  track.style.transform = `translateX(-${index * 100}%)`;
  dots.forEach((dot, i) => dot.classList.toggle("active", i === index));
}

function goTo(i) {
  index = (i + slides.length) % slides.length;
  update();
}

function next() {
  goTo(index + 1);
}

function prev() {
  goTo(index - 1);
}

function startAuto() {
  stopAuto();
  timer = setInterval(next, 5000);
}

function stopAuto() {
  if (timer) clearInterval(timer);
  timer = null;
}

nextBtn.addEventListener("click", () => {
  next();
  startAuto();
});
prevBtn.addEventListener("click", () => {
  prev();
  startAuto();
});
dots.forEach((dot) => {
  dot.addEventListener("click", () => {
    goTo(Number(dot.dataset.i));
    startAuto();
  });
});

// Tạm dừng khi rê chuột, chạy lại khi rời
carousel.addEventListener("mouseenter", stopAuto);
carousel.addEventListener("mouseleave", startAuto);

// Điều khiển bằng phím mũi tên
document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowLeft") {
    prev();
    startAuto();
  } else if (event.key === "ArrowRight") {
    next();
    startAuto();
  }
});

update();
startAuto();
