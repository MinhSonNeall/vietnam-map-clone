/*
 * loader.js — vòng tròn tải trang + lazy-load ảnh mượt (fade-in + spinner).
 * Dùng chung cho cả 3 trang (landing / map / thoi-ky). Không phụ thuộc thư viện.
 * Đặt thẻ <script src=".../loader.js"></script> ở CUỐI <body>.
 */
(function () {
  "use strict";

  /* ---------- 1) Overlay "đang tải" toàn trang ---------- */
  var overlay = document.getElementById("page-loader");
  if (!overlay) {
    // Phòng khi HTML chưa có sẵn overlay -> tự tạo.
    overlay = document.createElement("div");
    overlay.id = "page-loader";
    overlay.innerHTML = '<div class="pl-spinner" role="status" aria-label="Đang tải"></div>';
    (document.body || document.documentElement).appendChild(overlay);
  }

  var hidden = false;
  function hideOverlay() {
    if (hidden) return;
    hidden = true;
    overlay.classList.add("is-hidden");
    setTimeout(function () {
      if (overlay.parentNode) overlay.parentNode.removeChild(overlay);
    }, 600);
  }

  // Ẩn khi toàn bộ tài nguyên (ảnh, CSS...) đã tải xong.
  if (document.readyState === "complete") hideOverlay();
  else window.addEventListener("load", hideOverlay);
  // Phòng khi một ảnh ngoài mạng tải lỗi/quá lâu: vẫn ẩn sau 4 giây.
  setTimeout(hideOverlay, 4000);

  /* ---------- 2) Ảnh: lazy + hiện dần (fade) + spinner chờ ---------- */
  function enhance(img) {
    if (img.getAttribute("data-lazy") === "1") return;
    img.setAttribute("data-lazy", "1");

    if (!img.hasAttribute("loading")) img.setAttribute("loading", "lazy");
    img.setAttribute("decoding", "async");
    img.classList.add("img-lazy");

    var host = img.parentElement;
    var spinner = null;
    if (host) {
      host.classList.add("img-host");
      spinner = document.createElement("span");
      spinner.className = "img-spinner";
      host.appendChild(spinner);
    }

    function finish() {
      img.classList.add("is-loaded");
      if (spinner && spinner.parentNode) spinner.parentNode.removeChild(spinner);
    }

    // Ảnh đã xong trước khi gắn handler (cache sẵn, hoặc đã lỗi) -> kết thúc ngay.
    if (img.complete) {
      finish();
      return;
    }
    img.addEventListener("load", finish, { once: true });
    img.addEventListener("error", finish, { once: true }); // lỗi vẫn gỡ spinner, lộ alt/placeholder
  }

  function scan(root) {
    var imgs = (root || document).querySelectorAll("img:not([data-lazy])");
    for (var i = 0; i < imgs.length; i++) enhance(imgs[i]);
  }

  scan(document);

  /* ---------- 3) Bắt ảnh được thêm động về sau (carousel, gallery bản đồ...) ---------- */
  if ("MutationObserver" in window && document.body) {
    new MutationObserver(function (mutations) {
      for (var i = 0; i < mutations.length; i++) {
        var added = mutations[i].addedNodes;
        for (var j = 0; j < added.length; j++) {
          var node = added[j];
          if (node.nodeType !== 1) continue;
          if (node.tagName === "IMG") enhance(node);
          else if (node.querySelectorAll) scan(node);
        }
      }
    }).observe(document.body, { childList: true, subtree: true });
  }
})();
