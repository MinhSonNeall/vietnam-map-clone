# Hướng dẫn bổ sung nội dung — Trang "Dòng thời gian" (thời kỳ)

> File này liệt kê **chính xác những thông tin cần bổ sung** cho trang `thoi-ky/`.
> Đọc Mục 1–2 để biết cách thêm, Mục 3–4 là checklist, Mục 5 là chi tiết từng thời kỳ
> (kèm bảng mốc gợi ý + khung code dán sẵn).

---

## 1. Cấu trúc một mốc & nơi thêm

Mỗi mốc lịch sử là **một object** được `push` vào `window.TIMELINE`, đặt trong file tương ứng với thời kỳ:

```
thoi-ky/data/dung-nuoc.js     ← Thời dựng nước
thoi-ky/data/bac-thuoc.js     ← Thời Bắc thuộc
thoi-ky/data/doc-lap.js       ← Độc lập tự chủ
thoi-ky/data/phong-kien.js    ← Các triều đại phong kiến
thoi-ky/data/phap-thuoc.js    ← Thời Pháp thuộc
thoi-ky/data/hien-dai.js      ← Thời hiện đại
```

Cấu trúc một mốc:

```js
{
  y: 938,              // SỐ năm — dùng để SẮP XẾP. Trước Công nguyên (TCN) = số ÂM.
  year: "938",         // CHỮ hiển thị trên thẻ (có thể ghi "1075 – 1077", "~2879 TCN", "2/9/1945"...)
  era: "doc-lap",      // KHOÁ thời kỳ (xem bảng Mục 2) — phải khớp đúng, nếu sai mốc sẽ không hiện
  title: "Tên sự kiện ngắn gọn",
  desc: "Mô tả nội dung. Hiện đang quá ngắn — cần viết chi tiết hơn (xem Mục 4)."
}
```

**Lưu ý:**
- Không cần tự sắp xếp — hệ thống tự sort theo `y` từ nhỏ → lớn.
- `y` chỉ cần đủ để xếp đúng thứ tự; với mốc có khoảng (1075–1077) thì lấy 1 năm đại diện (vd `y: 1077`).
- `era` **bắt buộc** đúng 1 trong 6 khoá ở Mục 2.

---

## 2. Sáu thời kỳ (khoá `era`) & màu

| Khoá `era` | Tên hiển thị | Màu | Khoảng thời gian |
|---|---|---|---|
| `dung-nuoc` | Thời dựng nước | `#d98324` | ~2879 TCN – 257 TCN |
| `bac-thuoc` | Thời Bắc thuộc | `#9c6b3f` | 179 TCN – 905 |
| `doc-lap` | Độc lập tự chủ | `#b01622` | 938 – 1407 |
| `phong-kien` | Các triều đại phong kiến | `#7a0d12` | 1418 – 1858 |
| `phap-thuoc` | Thời Pháp thuộc | `#4a5a6a` | 1858 – 1945 |
| `hien-dai` | Thời hiện đại | `#d32f2f` | 1945 – nay |

---

## 3. Hiện trạng & mức độ ưu tiên

| Thời kỳ | Số mốc hiện có | Đánh giá | Ưu tiên bổ sung |
|---|---|---|---|
| Dựng nước | **3** | Quá sơ sài | 🔴 Cao nhất |
| Bắc thuộc | 8 | Tạm ổn, hụt giai đoạn 906–938 | 🟠 Vừa |
| Độc lập tự chủ | 14 | Đầy đủ nhất | 🟢 Thấp (chỉ tinh chỉnh) |
| Phong kiến | 9 | Thiếu Nam tiến, Lê trung hưng | 🟠 Vừa |
| Pháp thuộc | 9 | Thiếu nhiều phong trào | 🟠 Vừa |
| Hiện đại | 10 | Thiếu mốc 1946–1979 | 🟠 Vừa |
| **Tổng** | **53** | | |

> Mục tiêu gợi ý: mỗi thời kỳ **8–14 mốc**, mỗi `desc` **3–5 câu**.

---

## 4. Việc cần làm (checklist tổng)

- [ ] **Mở rộng `desc` cho TẤT CẢ 53 mốc hiện có** — hiện mỗi mốc chỉ có 1 câu, cần 3–5 câu.
- [ ] **Thêm mốc còn thiếu** theo gợi ý ở Mục 5 (đặc biệt thời Dựng nước).
- [ ] Rà lại `year` hiển thị cho thống nhất (vd luôn ghi "TCN" cho trước CN).
- [ ] (Tùy chọn) Nâng cấp để mỗi mốc có **ảnh / nhiều đoạn / nhân vật** — xem Mục 6.

### Quy chuẩn viết `desc` (3 phần)

Một `desc` tốt nên có: **(1) bối cảnh/diễn biến → (2) kết quả → (3) ý nghĩa**.

**Ví dụ — mốc Bạch Đằng 938:**

> ❌ Hiện tại (1 câu):
> "Ngô Quyền đánh tan quân Nam Hán trên sông Bạch Đằng, kết thúc hơn 1000 năm Bắc thuộc."

> ✅ Nên viết (chi tiết):
> "Năm 938, Ngô Quyền cho cắm cọc gỗ bịt sắt xuống lòng sông Bạch Đằng, lợi dụng thủy triều lên xuống để nhử và tiêu diệt đoàn thuyền chiến của quân Nam Hán, giết chủ tướng Lưu Hoằng Tháo. Chiến thắng đã chấm dứt hơn một nghìn năm Bắc thuộc, mở ra kỷ nguyên độc lập, tự chủ lâu dài của dân tộc. Đây được xem là một trong những trận thủy chiến kinh điển bậc nhất trong lịch sử quân sự Việt Nam."

---

## 5. Chi tiết bổ sung theo từng thời kỳ

Mỗi phần dưới đây gồm: **mốc đang có** → **mốc gợi ý thêm** (bảng ý chính cần viết) → **khung code dán sẵn** (chỉ cần điền `desc`).

---

### 5.1. 🔴 Thời dựng nước — `dung-nuoc.js` (đang có 3 → nên ≥ 7)

**Đang có:** Văn Lang (~2879 TCN) · Văn hóa Đông Sơn (~700 TCN) · Âu Lạc (257 TCN)

**Mốc gợi ý thêm:**

| `y` | `year` | Tiêu đề | Ý chính cần viết trong `desc` |
|---|---|---|---|
| -2890 | Truyền thuyết | Con Rồng cháu Tiên | Lạc Long Quân – Âu Cơ, bọc trăm trứng; cội nguồn "đồng bào"; 50 con xuống biển, 50 con lên núi |
| -2000 | ~2000 TCN | Văn hóa Phùng Nguyên | Sơ kỳ thời đại đồ đồng, tiền Đông Sơn (Phú Thọ); kỹ thuật luyện kim, gốm; nền tảng văn minh sông Hồng |
| -1500 | Thời Hùng Vương | Tổ chức nước Văn Lang | 15 bộ; Lạc hầu – Lạc tướng; nghề trồng lúa nước; tín ngưỡng, phong tục Việt cổ |
| -1000 | Truyền thuyết | Truyền thuyết tiêu biểu | Thánh Gióng (chống ngoại xâm), Sơn Tinh–Thủy Tinh (trị thủy), Bánh chưng bánh giầy (nông nghiệp, đạo hiếu) |
| -255 | ~255 TCN | Thành Cổ Loa & nỏ thần | Kinh đô Âu Lạc, thành ốc 9 vòng; kỹ thuật quân sự; truyền thuyết Mỵ Châu – Trọng Thủy (bài học cảnh giác) |

```js
window.TIMELINE.push(
  { y: -2890, year: "Truyền thuyết", era: "dung-nuoc", title: "Con Rồng cháu Tiên", desc: "" },
  { y: -2000, year: "~2000 TCN",   era: "dung-nuoc", title: "Văn hóa Phùng Nguyên", desc: "" },
  { y: -1500, year: "Thời Hùng Vương", era: "dung-nuoc", title: "Tổ chức nước Văn Lang", desc: "" },
  { y: -1000, year: "Truyền thuyết", era: "dung-nuoc", title: "Truyền thuyết tiêu biểu", desc: "" },
  { y: -255,  year: "~255 TCN",    era: "dung-nuoc", title: "Thành Cổ Loa & nỏ thần", desc: "" }
);
```

---

### 5.2. 🟠 Thời Bắc thuộc — `bac-thuoc.js` (đang có 8 → nên ≥ 10)

**Đang có:** Bắc thuộc lần I (179 TCN) · Nhà Hán (111 TCN) · Hai Bà Trưng (40–43) · Bà Triệu (248) · Vạn Xuân/Lý Bí (544) · Mai Thúc Loan (722) · Phùng Hưng (791) · Khúc Thừa Dụ (905)

**Mốc gợi ý thêm (lấp giai đoạn 906–938):**

| `y` | `year` | Tiêu đề | Ý chính cần viết trong `desc` |
|---|---|---|---|
| 907 | 907 | Khúc Hạo cải cách | Con Khúc Thừa Dụ; cải cách hành chính "khoan – giản – an – lạc"; củng cố quyền tự chủ |
| 931 | 931 | Dương Đình Nghệ đánh quân Nam Hán | Đánh đuổi quân Nam Hán, tự xưng Tiết độ sứ, giữ vững nền tự chủ; tiền đề cho Bạch Đằng 938 |

> (Tùy chọn) Có thể tách mốc **Lý Bí khởi nghĩa (542)** riêng khỏi mốc lập nước Vạn Xuân (544).

```js
window.TIMELINE.push(
  { y: 907, year: "907", era: "bac-thuoc", title: "Khúc Hạo cải cách", desc: "" },
  { y: 931, year: "931", era: "bac-thuoc", title: "Dương Đình Nghệ đánh quân Nam Hán", desc: "" }
);
```

---

### 5.3. 🟢 Độc lập tự chủ — `doc-lap.js` (đang có 14 — đầy đủ, chỉ tinh chỉnh)

**Đang có:** Bạch Đằng 938 · Ngô Quyền xưng vương 939 · Đại Cồ Việt 968 · chống Tống I 981 · Nhà Lý 1009 · Dời đô Thăng Long 1010 · Văn Miếu–QTG 1070–76 · chống Tống II 1075–77 · Nhà Trần 1226 · 3 lần thắng Nguyên–Mông (1258, 1285, 1288) · Nhà Hồ 1400 · Nhà Minh đô hộ 1407

**Mốc gợi ý thêm (tùy chọn, để dày dặn hơn):**

| `y` | `year` | Tiêu đề | Ý chính cần viết trong `desc` |
|---|---|---|---|
| 1042 | 1042 | Bộ luật Hình thư | Bộ luật thành văn đầu tiên của nước ta (nhà Lý); đặt nền pháp chế |
| 1054 | 1054 | Quốc hiệu Đại Việt | Vua Lý Thánh Tông đặt quốc hiệu Đại Việt — dùng suốt nhiều thế kỷ |

```js
window.TIMELINE.push(
  { y: 1042, year: "1042", era: "doc-lap", title: "Bộ luật Hình thư", desc: "" },
  { y: 1054, year: "1054", era: "doc-lap", title: "Quốc hiệu Đại Việt", desc: "" }
);
```

---

### 5.4. 🟠 Các triều đại phong kiến — `phong-kien.js` (đang có 9 → nên ≥ 12)

**Đang có:** Lam Sơn 1418 · Hậu Lê 1428 · Hồng Đức 1471 · Nhà Mạc 1527 · Trịnh–Nguyễn phân tranh 1558 · Tây Sơn 1771 · Rạch Gầm–Xoài Mút 1785 · Quang Trung phá Thanh 1789 · Nhà Nguyễn 1802

**Mốc gợi ý thêm (thiếu Nam tiến, Lê trung hưng, cải cách triều Nguyễn):**

| `y` | `year` | Tiêu đề | Ý chính cần viết trong `desc` |
|---|---|---|---|
| 1592 | 1592 | Lê trung hưng | Trịnh Tùng đánh chiếm Thăng Long, nhà Mạc rút lên Cao Bằng; họ Trịnh nắm thực quyền (vua Lê – chúa Trịnh) |
| 1698 | 1698 | Nam tiến – lập phủ Gia Định | Nguyễn Hữu Cảnh kinh lược phương Nam, khai phá vùng đất Nam Bộ; mở rộng lãnh thổ về phía Nam |
| 1804 | 1804 | Quốc hiệu Việt Nam | Vua Gia Long đặt quốc hiệu "Việt Nam"; thống nhất giang sơn sau nội chiến |
| 1831 | 1831 – 1832 | Cải cách Minh Mạng | Chia cả nước thành các tỉnh; bộ máy hành chính tập quyền; hoàn thiện triều Nguyễn |

```js
window.TIMELINE.push(
  { y: 1592, year: "1592",        era: "phong-kien", title: "Lê trung hưng", desc: "" },
  { y: 1698, year: "1698",        era: "phong-kien", title: "Nam tiến – lập phủ Gia Định", desc: "" },
  { y: 1804, year: "1804",        era: "phong-kien", title: "Quốc hiệu Việt Nam", desc: "" },
  { y: 1831, year: "1831 – 1832", era: "phong-kien", title: "Cải cách Minh Mạng", desc: "" }
);
```

---

### 5.5. 🟠 Thời Pháp thuộc — `phap-thuoc.js` (đang có 9 → nên ≥ 13)

**Đang có:** Pháp nổ súng 1858 · Nhâm Tuất 1862 · Patenôtre 1884 · Cần Vương 1885 · Đông Du 1905 · Bác Hồ ra đi 1911 · Đảng CSVN 1930 · Xô Viết Nghệ Tĩnh 1930–31 · Việt Minh 1941

**Mốc gợi ý thêm:**

| `y` | `year` | Tiêu đề | Ý chính cần viết trong `desc` |
|---|---|---|---|
| 1867 | 1867 | Mất 6 tỉnh Nam Kỳ | Pháp chiếm nốt 3 tỉnh miền Tây; toàn bộ Nam Kỳ thành thuộc địa |
| 1882 | 1873 & 1882 | Pháp đánh Bắc Kỳ | Hà Nội thất thủ; Nguyễn Tri Phương, Hoàng Diệu tuẫn tiết giữ thành |
| 1887 | 1887 | Liên bang Đông Dương | Pháp lập Liên bang Đông Dương; hoàn tất bộ máy cai trị thuộc địa |
| 1907 | 1906 – 1908 | Duy Tân & Đông Kinh Nghĩa Thục | Phan Châu Trinh chủ trương canh tân; phong trào chống thuế Trung Kỳ |
| 1944 | 22/12/1944 | Việt Nam Tuyên truyền Giải phóng quân | Tiền thân Quân đội Nhân dân Việt Nam; do Võ Nguyên Giáp chỉ huy |
| 1945 | 3/1945 | Nhật đảo chính Pháp & nạn đói Ất Dậu | Nhật hất cẳng Pháp (9/3/1945); nạn đói khiến ~2 triệu người chết; thời cơ cách mạng chín muồi |

```js
window.TIMELINE.push(
  { y: 1867, year: "1867",       era: "phap-thuoc", title: "Mất 6 tỉnh Nam Kỳ", desc: "" },
  { y: 1882, year: "1873 & 1882", era: "phap-thuoc", title: "Pháp đánh Bắc Kỳ", desc: "" },
  { y: 1887, year: "1887",       era: "phap-thuoc", title: "Liên bang Đông Dương", desc: "" },
  { y: 1907, year: "1906 – 1908", era: "phap-thuoc", title: "Duy Tân & Đông Kinh Nghĩa Thục", desc: "" },
  { y: 1944, year: "22/12/1944", era: "phap-thuoc", title: "Việt Nam Tuyên truyền Giải phóng quân", desc: "" },
  { y: 1945, year: "3/1945",     era: "phap-thuoc", title: "Nhật đảo chính Pháp & nạn đói Ất Dậu", desc: "" }
);
```

---

### 5.6. 🟠 Thời hiện đại — `hien-dai.js` (đang có 10 → nên ≥ 15)

**Đang có:** CMT8 1945 · Toàn quốc kháng chiến 1946 · Điện Biên Phủ 1954 · Mậu Thân 1968 · ĐBP trên không 1972 · Hiệp định Paris 1973 · Thống nhất 1975 · Đổi Mới 1986 · ASEAN/Mỹ 1995 · WTO 2007

**Mốc gợi ý thêm (thiếu giai đoạn 1946–1979):**

| `y` | `year` | Tiêu đề | Ý chính cần viết trong `desc` |
|---|---|---|---|
| 1946 | 1946 | Tổng tuyển cử & Hiến pháp đầu tiên | 6/1/1946 bầu Quốc hội khóa I; 9/11/1946 ban hành Hiến pháp đầu tiên |
| 1950 | 1950 | Chiến dịch Biên giới | Khai thông biên giới Việt – Trung; phá thế bao vây, mở rộng vùng tự do |
| 1954 | 7/1954 | Hiệp định Genève | Lập lại hòa bình ở Đông Dương; đất nước tạm chia cắt ở vĩ tuyến 17 |
| 1960 | 1959 – 1960 | Đồng Khởi & Mặt trận DTGPMN | Phong trào Đồng Khởi (Bến Tre); thành lập Mặt trận Dân tộc Giải phóng miền Nam (20/12/1960) |
| 1976 | 1976 | Nước CHXHCN Việt Nam | Thống nhất về mặt nhà nước; Quốc hội thống nhất; đổi tên nước |
| 1979 | 1979 | Bảo vệ biên giới | Chiến tranh bảo vệ biên giới Tây Nam và phía Bắc |

> (Tùy chọn) Có thể **tách** mốc Tuyên ngôn Độc lập 2/9/1945 riêng khỏi mốc Cách mạng Tháng Tám, và thêm các mốc hội nhập gần đây (CPTPP 2019, EVFTA…).

```js
window.TIMELINE.push(
  { y: 1946, year: "1946",        era: "hien-dai", title: "Tổng tuyển cử & Hiến pháp đầu tiên", desc: "" },
  { y: 1950, year: "1950",        era: "hien-dai", title: "Chiến dịch Biên giới", desc: "" },
  { y: 1954, year: "7/1954",      era: "hien-dai", title: "Hiệp định Genève", desc: "" },
  { y: 1960, year: "1959 – 1960", era: "hien-dai", title: "Đồng Khởi & Mặt trận DTGPMN", desc: "" },
  { y: 1976, year: "1976",        era: "hien-dai", title: "Nước CHXHCN Việt Nam", desc: "" },
  { y: 1979, year: "1979",        era: "hien-dai", title: "Bảo vệ biên giới", desc: "" }
);
```

---

## 6. (Tùy chọn) Nâng cấp nội dung phong phú hơn

Hiện thẻ nội dung chỉ hiển thị: **thời kỳ · năm · tiêu đề · 1 đoạn `desc`**.
Nếu muốn mỗi mốc giàu hơn (giống trang bản đồ), có thể bổ sung thêm các trường sau —
**cần mình cập nhật lại bộ render trong `timeline.js`** (báo mình một tiếng là làm được ngay):

```js
{
  y: 938, year: "938", era: "doc-lap",
  title: "Chiến thắng Bạch Đằng",
  desc: "Đoạn tóm tắt chính...",
  // --- các trường mở rộng (tùy chọn) ---
  image: "../img/thoi-ky/bach-dang.jpg",   // ảnh minh họa
  detail: [                                 // nhiều đoạn nội dung dài
    "Đoạn 1...",
    "Đoạn 2..."
  ],
  figures: ["Ngô Quyền", "Lưu Hoằng Tháo"], // nhân vật liên quan
  place: "Sông Bạch Đằng (Quảng Ninh – Hải Phòng)"
}
```

> Nếu chọn thêm ảnh: tạo thư mục `thoi-ky/img/` (hoặc dùng chung `img/`) rồi trỏ đường dẫn vào trường `image`.

---

## 7. Gợi ý nguồn tham khảo

- SGK Lịch sử (THCS/THPT) — bám sát chương trình, dễ trích.
- *Đại Việt sử ký toàn thư* — sử liệu gốc cho giai đoạn phong kiến.
- Cổng thông tin điện tử Chính phủ / Bảo tàng Lịch sử Quốc gia — mốc & số liệu hiện đại.
- Bách khoa toàn thư mở (đối chiếu nhanh, nên kiểm chứng lại năm/số liệu).

---

**Tóm tắt việc cần làm:** mở rộng `desc` cho 53 mốc cũ (3–5 câu/mốc) + thêm ~25 mốc gợi ý ở Mục 5
(ưu tiên thời **Dựng nước**). Điền xong, lưu file và mở lại `thoi-ky/index.html` — mốc tự hiện đúng thứ tự.
