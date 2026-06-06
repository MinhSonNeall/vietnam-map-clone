/*
 * DỮ LIỆU MỐC LỊCH SỬ — THỜI DỰNG NƯỚC
 * ------------------------------------------------------------------
 * Mỗi mốc là 1 object đẩy vào window.TIMELINE. Các mốc tự được sắp xếp
 * theo trường "y" (năm dạng số; năm trước Công nguyên ghi số ÂM).
 * Cấu trúc 1 mốc:
 * {
 *   y: -2879,                 // năm để sắp xếp (TCN = số âm)
 *   year: "~2879 TCN",        // chữ hiển thị
 *   era: "dung-nuoc",         // khoá thời kỳ (xem eras trong timeline.js)
 *   title: "Tên sự kiện",
 *   desc: "Mô tả ngắn"        // (sau này có thể thêm ảnh, nhiều đoạn...)
 * }
 */
window.TIMELINE = window.TIMELINE || [];
window.TIMELINE.push(
  { y: -2879, year: "~2879 TCN", era: "dung-nuoc", title: "Nhà nước Văn Lang", desc: "Các Vua Hùng dựng nước Văn Lang – nhà nước đầu tiên của người Việt, kinh đô đặt ở vùng Phong Châu." },
  { y: -700, year: "~700 TCN", era: "dung-nuoc", title: "Văn hóa Đông Sơn", desc: "Nền văn hóa Đông Sơn phát triển rực rỡ với đỉnh cao là trống đồng – biểu tượng của văn minh Việt cổ." },
  { y: -257, year: "257 TCN", era: "dung-nuoc", title: "Nước Âu Lạc", desc: "An Dương Vương Thục Phán lập nước Âu Lạc, xây thành Cổ Loa kiên cố." }
);
