// Dữ liệu lịch sử chi tiết cho từng tỉnh/thành.
// Mỗi mục gồm: summary (giới thiệu), timeline (mốc lịch sử),
// figures (nhân vật tiêu biểu), sites (di tích tiêu biểu).
const historyData = {
  "Lai Châu": {
    summary:
      "Lai Châu là vùng đất biên cương cực Tây Bắc, nơi sinh sống lâu đời của các dân tộc Thái, Mông, Dao, Hà Nhì... Trong lịch sử, đây là phên giậu trọng yếu trấn giữ biên giới phía Tây Bắc của Tổ quốc.",
    timeline: [
      { year: "Thế kỷ XIX", event: "Là khu vực thuộc các châu mường người Thái trấn giữ vùng thượng nguồn sông Đà." },
      { year: "1909", event: "Pháp thành lập đạo Lai Châu, đặt nền cai trị vùng Tây Bắc." },
      { year: "2004", event: "Tỉnh Lai Châu mới được tái lập sau khi tách ra từ tỉnh Lai Châu cũ." }
    ],
    figures: ["Các thủ lĩnh người Thái vùng Mường Lay, Mường Tè"],
    sites: ["Dinh thự Đèo Văn Long", "Di tích bản Mường cổ", "Cao nguyên Sìn Hồ"]
  },
  "Điện Biên": {
    summary:
      "Điện Biên gắn liền với Chiến thắng Điện Biên Phủ năm 1954 'lừng lẫy năm châu, chấn động địa cầu' — trận quyết chiến chiến lược kết thúc chín năm kháng chiến chống Pháp.",
    timeline: [
      { year: "1777", event: "Hoàng Công Chất xây thành Bản Phủ, giữ vùng Mường Thanh." },
      { year: "13/3 – 7/5/1954", event: "Chiến dịch Điện Biên Phủ toàn thắng, tướng De Castries đầu hàng." },
      { year: "7/5/1954", event: "Lá cờ Quyết chiến Quyết thắng tung bay trên nóc hầm chỉ huy địch." }
    ],
    figures: ["Đại tướng Võ Nguyên Giáp", "Anh hùng Phan Đình Giót", "Hoàng Công Chất"],
    sites: ["Đồi A1", "Hầm De Castries", "Tượng đài Chiến thắng Điện Biên Phủ", "Thành Bản Phủ"]
  },
  "Sơn La": {
    summary:
      "Sơn La nổi tiếng với Nhà tù Sơn La — nơi thực dân Pháp giam cầm nhiều chiến sĩ cách mạng, đồng thời là cái nôi văn hóa của người Thái Tây Bắc.",
    timeline: [
      { year: "1908", event: "Pháp xây Nhà tù Sơn La để giam giữ tù chính trị." },
      { year: "1939 – 1944", event: "Chi bộ nhà tù Sơn La hoạt động, tờ báo 'Suối Reo' ra đời." },
      { year: "1959", event: "Bác Hồ về thăm đồng bào các dân tộc Tây Bắc tại Sơn La." }
    ],
    figures: ["Tô Hiệu", "Lê Duẩn", "Trường Chinh (từng bị giam)"],
    sites: ["Nhà tù Sơn La", "Cây đào Tô Hiệu", "Văn bia Quế Lâm Ngự Chế"]
  },
  "Lào Cai": {
    summary:
      "Lào Cai là vùng đất cửa ngõ biên giới phía Bắc, hợp nhất từ Lào Cai và Yên Bái. Đây là địa bàn của nhiều cuộc đấu tranh giữ đất biên cương và phong trào cách mạng vùng Tây Bắc.",
    timeline: [
      { year: "1907", event: "Pháp lập tỉnh Lào Cai, mở tuyến đường sắt Hải Phòng – Vân Nam." },
      { year: "1930", event: "Phong trào công nhân đường sắt và mỏ phát triển mạnh." },
      { year: "2/1979", event: "Quân dân Lào Cai chiến đấu bảo vệ biên giới phía Bắc." }
    ],
    figures: ["Các chiến sĩ bảo vệ biên giới 1979"],
    sites: ["Đền Thượng Lào Cai", "Cửa khẩu quốc tế Lào Cai", "Khu di tích Sa Pa"]
  },
  "Tuyên Quang": {
    summary:
      "Tuyên Quang được mệnh danh là 'Thủ đô Khu giải phóng', 'Thủ đô kháng chiến'. Tại Tân Trào, Quốc dân Đại hội đã họp, phát động Tổng khởi nghĩa Tháng Tám 1945.",
    timeline: [
      { year: "1592", event: "Vùng đất chứng kiến các cuộc chiến thời Lê – Mạc." },
      { year: "8/1945", event: "Quốc dân Đại hội Tân Trào họp, cử ra Ủy ban Dân tộc Giải phóng." },
      { year: "1947 – 1954", event: "Trở thành an toàn khu (ATK), trung tâm chỉ đạo kháng chiến chống Pháp." }
    ],
    figures: ["Chủ tịch Hồ Chí Minh", "Các đại biểu Quốc dân Đại hội"],
    sites: ["Lán Nà Nưa", "Cây đa Tân Trào", "Đình Tân Trào", "Đình Hồng Thái"]
  },
  "Cao Bằng": {
    summary:
      "Cao Bằng là nơi Bác Hồ trở về nước năm 1941 sau 30 năm bôn ba, trực tiếp lãnh đạo cách mạng. Pác Bó được coi là cội nguồn cách mạng Việt Nam.",
    timeline: [
      { year: "28/1/1941", event: "Lãnh tụ Nguyễn Ái Quốc về nước qua cột mốc 108, dừng chân tại Pác Bó." },
      { year: "5/1941", event: "Hội nghị Trung ương 8 họp tại Pác Bó, thành lập Mặt trận Việt Minh." },
      { year: "22/12/1944", event: "Đội Việt Nam Tuyên truyền Giải phóng quân thành lập tại rừng Trần Hưng Đạo." }
    ],
    figures: ["Chủ tịch Hồ Chí Minh", "Đại tướng Võ Nguyên Giáp", "Nùng Trí Cao"],
    sites: ["Hang Pác Bó", "Suối Lê-nin, núi Các Mác", "Rừng Trần Hưng Đạo", "Thác Bản Giốc"]
  },
  "Lạng Sơn": {
    summary:
      "Lạng Sơn là 'phên giậu' phía Bắc, gắn với ải Chi Lăng — nơi diễn ra những chiến thắng vang dội chống quân xâm lược phương Bắc suốt nhiều thế kỷ.",
    timeline: [
      { year: "1077", event: "Phòng tuyến chống Tống trên vùng biên ải." },
      { year: "10/10/1427", event: "Chiến thắng Chi Lăng – Xương Giang, chém Liễu Thăng, kết thúc khởi nghĩa Lam Sơn." },
      { year: "1979", event: "Quân dân Lạng Sơn kiên cường bảo vệ biên giới phía Bắc." }
    ],
    figures: ["Lê Lợi", "Nguyễn Trãi", "Lý Thường Kiệt"],
    sites: ["Ải Chi Lăng", "Thành nhà Mạc", "Động Tam Thanh, Nhị Thanh", "Nàng Tô Thị"]
  },
  "Thái Nguyên": {
    summary:
      "Thái Nguyên là trung tâm của An toàn khu Việt Bắc — 'Thủ đô gió ngàn', nơi đặt các cơ quan đầu não kháng chiến chống Pháp 1946–1954.",
    timeline: [
      { year: "1917", event: "Khởi nghĩa Thái Nguyên do Đội Cấn và Lương Ngọc Quyến lãnh đạo." },
      { year: "1947", event: "Trung ương Đảng, Chính phủ chuyển lên ATK Định Hóa." },
      { year: "6/12/1953", event: "Bộ Chính trị họp tại Định Hóa quyết định mở Chiến dịch Điện Biên Phủ." }
    ],
    figures: ["Đội Cấn", "Lương Ngọc Quyến", "Chủ tịch Hồ Chí Minh"],
    sites: ["ATK Định Hóa", "Đồi Tỉn Keo", "Khu di tích lịch sử ATK", "Hồ Núi Cốc"]
  },
  "Phú Thọ": {
    summary:
      "Phú Thọ là vùng Đất Tổ Hùng Vương — cội nguồn dân tộc Việt Nam, nơi có Đền Hùng và tín ngưỡng thờ cúng Hùng Vương được UNESCO ghi danh.",
    timeline: [
      { year: "Thời Hùng Vương", event: "Kinh đô Văn Lang của các Vua Hùng đặt tại vùng Phong Châu." },
      { year: "10/3 âm lịch", event: "Giỗ Tổ Hùng Vương trở thành Quốc giỗ của dân tộc." },
      { year: "2012", event: "Tín ngưỡng thờ cúng Hùng Vương được UNESCO công nhận." }
    ],
    figures: ["Các Vua Hùng", "Lạc Long Quân – Âu Cơ"],
    sites: ["Khu di tích Đền Hùng", "Đền Thượng, Đền Trung, Đền Hạ", "Bảo tàng Hùng Vương"]
  },
  "Bắc Ninh": {
    summary:
      "Bắc Ninh là đất Kinh Bắc cổ kính — quê hương của vương triều Lý, của dân ca Quan họ và là một trong những cái nôi của Phật giáo và văn hiến Việt Nam.",
    timeline: [
      { year: "1009", event: "Lý Công Uẩn (người làng Đình Bảng) lên ngôi, lập nên nhà Lý." },
      { year: "Thế kỷ II – III", event: "Luy Lâu trở thành trung tâm Phật giáo và chính trị cổ." },
      { year: "2009", event: "Dân ca Quan họ Bắc Ninh được UNESCO ghi danh." }
    ],
    figures: ["Lý Công Uẩn", "Lý Thường Kiệt", "Nguyễn Văn Cừ", "Ngô Gia Tự"],
    sites: ["Đền Đô (Lý Bát Đế)", "Chùa Dâu, chùa Phật Tích", "Thành cổ Luy Lâu", "Làng Quan họ"]
  },
  "Quảng Ninh": {
    summary:
      "Quảng Ninh có Vịnh Hạ Long kỳ quan thế giới và là 'cái nôi' của giai cấp công nhân mỏ Việt Nam, gắn với truyền thống 'Kỷ luật và Đồng tâm'.",
    timeline: [
      { year: "1288", event: "Chiến thắng Bạch Đằng của Trần Hưng Đạo diễn ra ở vùng cửa sông gần đó." },
      { year: "1936", event: "Cuộc tổng bãi công của hơn 3 vạn thợ mỏ vùng than." },
      { year: "1994", event: "Vịnh Hạ Long được UNESCO công nhận Di sản thiên nhiên thế giới." }
    ],
    figures: ["Trần Hưng Đạo", "Các thế hệ công nhân vùng mỏ"],
    sites: ["Vịnh Hạ Long", "Bãi cọc Bạch Đằng", "Yên Tử", "Khu di tích Nhà Trần"]
  },
  "Hà Nội": {
    summary:
      "Hà Nội — Thăng Long ngàn năm văn hiến, kinh đô của nhiều triều đại và Thủ đô của nước Việt Nam. Đây là trung tâm chính trị, văn hóa lớn nhất của đất nước.",
    timeline: [
      { year: "1010", event: "Lý Thái Tổ dời đô từ Hoa Lư về Thăng Long." },
      { year: "1070", event: "Xây dựng Văn Miếu, trường đại học đầu tiên của Việt Nam." },
      { year: "2/9/1945", event: "Bác Hồ đọc Tuyên ngôn Độc lập tại Quảng trường Ba Đình." },
      { year: "10/10/1954", event: "Giải phóng Thủ đô, tiếp quản Hà Nội." }
    ],
    figures: ["Lý Thái Tổ", "Chủ tịch Hồ Chí Minh", "Vua Lê Thái Tổ"],
    sites: ["Hoàng thành Thăng Long", "Văn Miếu – Quốc Tử Giám", "Hồ Gươm – Tháp Rùa", "Lăng Bác, Quảng trường Ba Đình"]
  },
  "Hưng Yên": {
    summary:
      "Hưng Yên xưa có Phố Hiến — thương cảng sầm uất 'Thứ nhất Kinh Kỳ, thứ nhì Phố Hiến', là quê hương của nhiều danh nhân và truyền thống hiếu học.",
    timeline: [
      { year: "Thế kỷ XVI – XVII", event: "Phố Hiến trở thành trung tâm thương mại quốc tế lớn ở Đàng Ngoài." },
      { year: "1831", event: "Vua Minh Mạng lập tỉnh Hưng Yên." },
      { year: "Cận đại", event: "Quê hương của nhiều nhà cách mạng và chí sĩ yêu nước." }
    ],
    figures: ["Triệu Việt Vương", "Phạm Ngũ Lão", "Hải Thượng Lãn Ông Lê Hữu Trác", "Nguyễn Thiện Thuật"],
    sites: ["Phố Hiến", "Đền Chử Đồng Tử", "Văn miếu Xích Đằng", "Chùa Chuông"]
  },
  "Hải Phòng": {
    summary:
      "Hải Phòng — 'thành phố Hoa phượng đỏ', cảng biển lớn nhất miền Bắc, vùng đất ba lần chứng kiến chiến thắng Bạch Đằng giang lịch sử và truyền thống chống ngoại xâm của nữ tướng Lê Chân.",
    timeline: [
      { year: "938", event: "Ngô Quyền đánh tan quân Nam Hán trên sông Bạch Đằng." },
      { year: "1288", event: "Trần Hưng Đạo tái lập chiến thắng Bạch Đằng trên vùng cửa biển." },
      { year: "20/11/1946", event: "Quân dân Hải Phòng nổ súng chống Pháp, mở đầu kháng chiến ở thành phố." }
    ],
    figures: ["Ngô Quyền", "Trần Hưng Đạo", "Nữ tướng Lê Chân", "Trạng Trình Nguyễn Bỉnh Khiêm"],
    sites: ["Khu di tích Bạch Đằng giang", "Đền Nghè (thờ Lê Chân)", "Đảo Cát Bà", "Bến Bính"]
  },
  "Ninh Bình": {
    summary:
      "Ninh Bình là vùng đất Cố đô Hoa Lư — kinh đô của ba triều Đinh, Tiền Lê và buổi đầu nhà Lý, nơi Đinh Bộ Lĩnh dẹp loạn 12 sứ quân, lập nên nước Đại Cồ Việt.",
    timeline: [
      { year: "968", event: "Đinh Bộ Lĩnh lên ngôi Hoàng đế, đặt tên nước Đại Cồ Việt, đóng đô ở Hoa Lư." },
      { year: "981", event: "Lê Hoàn lãnh đạo kháng chiến chống Tống thắng lợi." },
      { year: "2014", event: "Quần thể Tràng An được UNESCO ghi danh Di sản thế giới." }
    ],
    figures: ["Đinh Tiên Hoàng", "Lê Đại Hành", "Thái hậu Dương Vân Nga"],
    sites: ["Cố đô Hoa Lư", "Đền Vua Đinh, Vua Lê", "Tràng An – Tam Cốc", "Chùa Bái Đính"]
  },
  "Thanh Hóa": {
    summary:
      "Thanh Hóa là đất 'địa linh nhân kiệt', nơi phát tích nhiều vương triều (Tiền Lê, Hậu Lê, Nguyễn, Trịnh) và là cái nôi của khởi nghĩa Lam Sơn do Lê Lợi lãnh đạo.",
    timeline: [
      { year: "1418 – 1427", event: "Khởi nghĩa Lam Sơn do Lê Lợi phát động, đánh đuổi quân Minh." },
      { year: "1397", event: "Hồ Quý Ly cho xây Thành nhà Hồ bằng đá." },
      { year: "2011", event: "Thành nhà Hồ được UNESCO công nhận Di sản thế giới." }
    ],
    figures: ["Lê Lợi (Lê Thái Tổ)", "Bà Triệu", "Hồ Quý Ly", "Chúa Trịnh, chúa Nguyễn"],
    sites: ["Khu di tích Lam Kinh", "Thành nhà Hồ", "Đền Bà Triệu", "Suối cá Cẩm Lương"]
  },
  "Nghệ An": {
    summary:
      "Nghệ An là quê hương Chủ tịch Hồ Chí Minh, vùng đất giàu truyền thống yêu nước và hiếu học, trung tâm của cao trào Xô Viết Nghệ Tĩnh 1930–1931.",
    timeline: [
      { year: "19/5/1890", event: "Chủ tịch Hồ Chí Minh sinh tại làng Sen, Kim Liên, Nam Đàn." },
      { year: "1930 – 1931", event: "Cao trào Xô Viết Nghệ Tĩnh — đỉnh cao đấu tranh cách mạng đầu tiên." },
      { year: "Thế kỷ XV", event: "Vùng đất gắn với nhiều danh sĩ, khoa bảng nổi tiếng." }
    ],
    figures: ["Chủ tịch Hồ Chí Minh", "Phan Bội Châu", "Mai Thúc Loan (Mai Hắc Đế)"],
    sites: ["Khu di tích Kim Liên (quê Bác)", "Đền thờ Mai Hắc Đế", "Bảo tàng Xô Viết Nghệ Tĩnh"]
  },
  "Hà Tĩnh": {
    summary:
      "Hà Tĩnh là 'đất học', quê hương của Đại thi hào Nguyễn Du và nhiều danh nhân, đồng thời là một trong hai trung tâm của phong trào Xô Viết Nghệ Tĩnh.",
    timeline: [
      { year: "1765", event: "Đại thi hào Nguyễn Du — tác giả Truyện Kiều — sinh ra ở Nghi Xuân." },
      { year: "1930 – 1931", event: "Nhiều xã thành lập chính quyền Xô Viết trong cao trào cách mạng." },
      { year: "Kháng chiến chống Mỹ", event: "Ngã ba Đồng Lộc — túi bom ác liệt, nơi 10 nữ TNXP hy sinh." }
    ],
    figures: ["Đại thi hào Nguyễn Du", "Nguyễn Công Trứ", "Trần Phú", "10 cô gái Đồng Lộc"],
    sites: ["Khu lưu niệm Nguyễn Du", "Ngã ba Đồng Lộc", "Khu mộ Trần Phú"]
  },
  "Quảng Trị": {
    summary:
      "Quảng Trị là vùng đất 'tuyến lửa', nơi có vĩ tuyến 17 chia cắt hai miền và Thành cổ Quảng Trị — biểu tượng cho sự khốc liệt và bất khuất trong kháng chiến chống Mỹ.",
    timeline: [
      { year: "1954", event: "Sông Bến Hải – cầu Hiền Lương trở thành giới tuyến quân sự tạm thời." },
      { year: "1972", event: "81 ngày đêm bảo vệ Thành cổ Quảng Trị — trận chiến đẫm máu nhất." },
      { year: "1975", event: "Quảng Trị là bàn đạp cho cuộc tổng tiến công giải phóng miền Nam." }
    ],
    figures: ["Các chiến sĩ bảo vệ Thành cổ", "Tổng Bí thư Lê Duẩn (quê Triệu Phong)"],
    sites: ["Thành cổ Quảng Trị", "Cầu Hiền Lương – sông Bến Hải", "Địa đạo Vịnh Mốc", "Nghĩa trang Trường Sơn"]
  },
  "Huế": {
    summary:
      "Huế là Cố đô của triều Nguyễn — triều đại phong kiến cuối cùng của Việt Nam, trung tâm văn hóa với Quần thể di tích Cố đô và Nhã nhạc cung đình được UNESCO ghi danh.",
    timeline: [
      { year: "1802", event: "Nguyễn Ánh lên ngôi (vua Gia Long), chọn Huế làm kinh đô." },
      { year: "1945", event: "Vua Bảo Đại thoái vị, chấm dứt chế độ quân chủ ở Việt Nam." },
      { year: "1993", event: "Quần thể di tích Cố đô Huế được UNESCO công nhận." }
    ],
    figures: ["Vua Gia Long", "Vua Minh Mạng", "Vua Bảo Đại"],
    sites: ["Kinh thành Huế – Ngọ Môn", "Đại Nội", "Lăng Tự Đức, Khải Định, Minh Mạng", "Chùa Thiên Mụ"]
  },
  "Đà Nẵng": {
    summary:
      "Đà Nẵng là nơi thực dân Pháp nổ phát súng đầu tiên xâm lược Việt Nam năm 1858, đồng thời gắn với phố cổ Hội An — thương cảng quốc tế sầm uất bậc nhất xưa.",
    timeline: [
      { year: "1/9/1858", event: "Liên quân Pháp – Tây Ban Nha nổ súng tấn công Đà Nẵng, mở màn xâm lược." },
      { year: "Thế kỷ XVI – XVIII", event: "Hội An (vùng đất cũ) là thương cảng quốc tế phồn thịnh." },
      { year: "29/3/1975", event: "Đà Nẵng được giải phóng trong cuộc Tổng tiến công." }
    ],
    figures: ["Nguyễn Tri Phương (chỉ huy chống Pháp)", "Thái Phiên, Trần Cao Vân"],
    sites: ["Phố cổ Hội An", "Thánh địa Mỹ Sơn", "Ngũ Hành Sơn", "Thành Điện Hải"]
  },
  "Quảng Ngãi": {
    summary:
      "Quảng Ngãi là quê hương của khởi nghĩa Ba Tơ, của nhiều chí sĩ yêu nước, và là nơi xảy ra vụ thảm sát Sơn Mỹ (Mỹ Lai) đau thương trong chiến tranh.",
    timeline: [
      { year: "11/3/1945", event: "Khởi nghĩa Ba Tơ thắng lợi, lập đội du kích Ba Tơ." },
      { year: "16/3/1968", event: "Vụ thảm sát Sơn Mỹ — quân Mỹ sát hại 504 thường dân." },
      { year: "Thời cổ", event: "Vùng đất từng thuộc nền văn hóa Sa Huỳnh nổi tiếng." }
    ],
    figures: ["Trương Định", "Phạm Văn Đồng", "Lê Trung Đình"],
    sites: ["Khu chứng tích Sơn Mỹ", "Di tích khởi nghĩa Ba Tơ", "Văn hóa Sa Huỳnh", "Núi Thiên Ấn"]
  },
  "Gia Lai": {
    summary:
      "Gia Lai là vùng đất cao nguyên gắn với không gian văn hóa cồng chiêng Tây Nguyên và những chiến công vang dội như chiến thắng Plei Me, Đường 7 trong kháng chiến.",
    timeline: [
      { year: "1965", event: "Chiến thắng Plei Me – Ia Drang, trận đụng độ lớn đầu tiên với quân Mỹ." },
      { year: "3/1975", event: "Truy kích địch trên Đường số 7 (nay là QL25) trong chiến dịch Tây Nguyên." },
      { year: "2005", event: "Không gian văn hóa Cồng chiêng Tây Nguyên được UNESCO ghi danh." }
    ],
    figures: ["Anh hùng Núp (Đinh Núp)", "Các chiến sĩ Tây Nguyên"],
    sites: ["Biển Hồ (T'Nưng)", "Nhà tù Pleiku", "Làng kháng chiến Stơr", "Khu di tích Tây Sơn Thượng đạo"]
  },
  "Đắk Lắk": {
    summary:
      "Đắk Lắk với thủ phủ Buôn Ma Thuột là nơi mở màn cuộc Tổng tiến công và nổi dậy mùa Xuân 1975, đồng thời là trung tâm văn hóa của đồng bào Ê Đê, M'Nông.",
    timeline: [
      { year: "10/3/1975", event: "Quân Giải phóng tấn công Buôn Ma Thuột, mở màn Chiến dịch Tây Nguyên." },
      { year: "1904", event: "Pháp lập tỉnh Đắk Lắk, đặt nền cai trị cao nguyên." },
      { year: "Truyền thống", event: "Vùng đất của sử thi, cồng chiêng và voi rừng Bản Đôn." }
    ],
    figures: ["N'Trang Lơng (thủ lĩnh M'Nông chống Pháp)", "Các chiến sĩ Chiến dịch Tây Nguyên"],
    sites: ["Tượng đài Chiến thắng Buôn Ma Thuột", "Nhà đày Buôn Ma Thuột", "Bản Đôn", "Thác Dray Nur"]
  },
  "Khánh Hòa": {
    summary:
      "Khánh Hòa với thành phố biển Nha Trang là vùng đất giàu di sản văn hóa Chăm và là tỉnh quản lý quần đảo Trường Sa — phần lãnh thổ thiêng liêng của Tổ quốc.",
    timeline: [
      { year: "Thế kỷ VIII – IX", event: "Tháp Po Nagar được người Chăm xây dựng để thờ Nữ thần Mẹ xứ sở." },
      { year: "1653", event: "Vùng đất sáp nhập vào lãnh thổ Đại Việt thời chúa Nguyễn." },
      { year: "1975", event: "Hải quân giải phóng các đảo thuộc quần đảo Trường Sa." }
    ],
    figures: ["Bác sĩ Alexandre Yersin", "Các chiến sĩ Trường Sa"],
    sites: ["Tháp Bà Po Nagar", "Quần đảo Trường Sa", "Viện Hải dương học", "Thành cổ Diên Khánh"]
  },
  "Lâm Đồng": {
    summary:
      "Lâm Đồng với thành phố Đà Lạt do người Pháp quy hoạch từ đầu thế kỷ XX, là vùng đất cao nguyên gắn với văn hóa các dân tộc K'Ho, Mạ và phong trào cách mạng Nam Tây Nguyên.",
    timeline: [
      { year: "1893", event: "Bác sĩ Yersin khám phá cao nguyên Lâm Viên (Langbiang)." },
      { year: "1907", event: "Người Pháp bắt đầu xây dựng Đà Lạt thành nơi nghỉ dưỡng." },
      { year: "3/4/1975", event: "Đà Lạt – Lâm Đồng được giải phóng." }
    ],
    figures: ["Bác sĩ Alexandre Yersin", "Các thủ lĩnh người Thượng"],
    sites: ["Ga Đà Lạt cổ", "Dinh Bảo Đại", "Thác Pongour, Datanla", "Hồ Xuân Hương"]
  },
  "Đồng Nai": {
    summary:
      "Đồng Nai với trung tâm Biên Hòa là vùng đất 'mở cõi' phương Nam hơn 300 năm, nơi có Văn miếu Trấn Biên — văn miếu đầu tiên ở Nam Bộ.",
    timeline: [
      { year: "1698", event: "Lễ Thành hầu Nguyễn Hữu Cảnh kinh lược, lập phủ Gia Định, mở đất Biên Hòa." },
      { year: "1715", event: "Xây dựng Văn miếu Trấn Biên — văn miếu đầu tiên ở phương Nam." },
      { year: "Kháng chiến", event: "Chiến khu Đ trở thành căn cứ cách mạng nổi tiếng miền Đông Nam Bộ." }
    ],
    figures: ["Nguyễn Hữu Cảnh", "Trịnh Hoài Đức", "Các chiến sĩ Chiến khu Đ"],
    sites: ["Văn miếu Trấn Biên", "Chiến khu Đ", "Đền thờ Nguyễn Hữu Cảnh", "Di chỉ khảo cổ Đồng Nai"]
  },
  "Tây Ninh": {
    summary:
      "Tây Ninh là 'thủ đô' của đạo Cao Đài với Tòa Thánh Tây Ninh, vùng đất biên giới có núi Bà Đen và căn cứ Trung ương Cục miền Nam thời chống Mỹ.",
    timeline: [
      { year: "1926", event: "Đạo Cao Đài chính thức khai đạo tại Tây Ninh." },
      { year: "1961 – 1975", event: "Trung ương Cục miền Nam đặt căn cứ tại Tây Ninh, chỉ đạo cách mạng miền Nam." },
      { year: "1979", event: "Quân dân Tây Ninh chiến đấu bảo vệ biên giới Tây Nam." }
    ],
    figures: ["Các vị chức sắc Cao Đài", "Lãnh đạo Trung ương Cục miền Nam"],
    sites: ["Tòa Thánh Tây Ninh", "Núi Bà Đen", "Căn cứ Trung ương Cục miền Nam", "Hồ Dầu Tiếng"]
  },
  "TP. Hồ Chí Minh": {
    summary:
      "TP. Hồ Chí Minh — Sài Gòn – Gia Định xưa, 'Hòn ngọc Viễn Đông', nơi Bác Hồ ra đi tìm đường cứu nước và là điểm kết thúc thắng lợi của cuộc kháng chiến chống Mỹ ngày 30/4/1975.",
    timeline: [
      { year: "1698", event: "Nguyễn Hữu Cảnh lập phủ Gia Định, khai sinh vùng đất Sài Gòn." },
      { year: "5/6/1911", event: "Người thanh niên Nguyễn Tất Thành rời bến Nhà Rồng tìm đường cứu nước." },
      { year: "30/4/1975", event: "Xe tăng Quân Giải phóng tiến vào Dinh Độc Lập, giải phóng miền Nam." }
    ],
    figures: ["Chủ tịch Hồ Chí Minh", "Nguyễn Hữu Cảnh", "Các chiến sĩ Biệt động Sài Gòn"],
    sites: ["Bến Nhà Rồng", "Dinh Độc Lập", "Địa đạo Củ Chi", "Bưu điện & Nhà thờ Đức Bà"]
  },
  "Đồng Tháp": {
    summary:
      "Đồng Tháp là vùng đất sen hồng giữa Đồng Tháp Mười, nơi yên nghỉ của cụ Phó bảng Nguyễn Sinh Sắc (thân sinh Bác Hồ) và là căn cứ kháng chiến của vùng Tây Nam Bộ.",
    timeline: [
      { year: "Thế kỷ I – VII", event: "Vùng Gò Tháp thuộc nền văn hóa Óc Eo – vương quốc Phù Nam." },
      { year: "1929", event: "Cụ Nguyễn Sinh Sắc qua đời và an táng tại Cao Lãnh." },
      { year: "Kháng chiến", event: "Đồng Tháp Mười là căn cứ địa cách mạng quan trọng ở miền Tây." }
    ],
    figures: ["Cụ Phó bảng Nguyễn Sinh Sắc", "Thiên Hộ Dương, Đốc Binh Kiều"],
    sites: ["Khu di tích Nguyễn Sinh Sắc", "Khu di tích Gò Tháp", "Vườn quốc gia Tràm Chim"]
  },
  "Vĩnh Long": {
    summary:
      "Vĩnh Long là đất học của miền Tây, quê hương của nhiều nhà cách mạng và trí thức lớn, gắn với Văn Thánh Miếu và Công thần Miếu thờ các bậc khai mở đất phương Nam.",
    timeline: [
      { year: "1732", event: "Vùng đất được lập thành châu Định Viễn thời chúa Nguyễn." },
      { year: "1866", event: "Phan Thanh Giản tuẫn tiết khi không giữ được ba tỉnh miền Tây." },
      { year: "Hiện đại", event: "Quê hương của Chủ tịch Hội đồng Bộ trưởng Phạm Hùng và nhiều lãnh đạo." }
    ],
    figures: ["Phan Thanh Giản", "Phạm Hùng", "Võ Văn Kiệt"],
    sites: ["Văn Thánh Miếu Vĩnh Long", "Khu lưu niệm Phạm Hùng", "Chùa Tiên Châu", "Cù lao An Bình"]
  },
  "Cần Thơ": {
    summary:
      "Cần Thơ — 'Tây Đô', thủ phủ miền Tây Nam Bộ, vùng đất gạo trắng nước trong với chợ nổi Cái Răng và bến Ninh Kiều nổi tiếng.",
    timeline: [
      { year: "1739", event: "Vùng đất Trấn Giang (Cần Thơ) được khai mở dưới thời chúa Nguyễn." },
      { year: "1900", event: "Pháp lập tỉnh Cần Thơ, gọi là 'Tây Đô' của miền Tây." },
      { year: "30/4/1975", event: "Cần Thơ được giải phóng cùng toàn miền Nam." }
    ],
    figures: ["Thủ khoa Bùi Hữu Nghĩa", "Phan Văn Trị", "Châu Văn Liêm"],
    sites: ["Bến Ninh Kiều", "Chợ nổi Cái Răng", "Đình Bình Thủy", "Mộ Thủ khoa Bùi Hữu Nghĩa"]
  },
  "An Giang": {
    summary:
      "An Giang là vùng đất biên giới Tây Nam, nơi có nền văn hóa Óc Eo cổ xưa, vùng Bảy Núi linh thiêng và là quê hương của Chủ tịch Tôn Đức Thắng.",
    timeline: [
      { year: "Thế kỷ I – VII", event: "Óc Eo là đô thị – thương cảng của vương quốc Phù Nam." },
      { year: "1818 – 1824", event: "Đào kênh Vĩnh Tế nối Châu Đốc – Hà Tiên, công trình thủy lợi lớn." },
      { year: "20/8/1888", event: "Chủ tịch Tôn Đức Thắng sinh tại Cù lao Ông Hổ, Long Xuyên." }
    ],
    figures: ["Chủ tịch Tôn Đức Thắng", "Thoại Ngọc Hầu Nguyễn Văn Thoại"],
    sites: ["Khu di tích Óc Eo – Ba Thê", "Miếu Bà Chúa Xứ núi Sam", "Lăng Thoại Ngọc Hầu", "Khu lưu niệm Tôn Đức Thắng"]
  },
  "Cà Mau": {
    summary:
      "Cà Mau là vùng đất cực Nam Tổ quốc — nơi 'Đất biết nở, rừng biết đi', có Mũi Cà Mau thiêng liêng và rừng đước U Minh gắn với nhiều chiến công kháng chiến.",
    timeline: [
      { year: "Thế kỷ XVII", event: "Mạc Cửu và lưu dân người Việt khai mở vùng đất cực Nam." },
      { year: "Kháng chiến chống Pháp – Mỹ", event: "Rừng U Minh trở thành căn cứ địa cách mạng vững chắc." },
      { year: "1959", event: "Bến Vàm Lũng tiếp nhận những chuyến tàu Đường Hồ Chí Minh trên biển." }
    ],
    figures: ["Phan Ngọc Hiển", "Bác Ba Phi (nhân vật dân gian)"],
    sites: ["Mũi Cà Mau (Đất Mũi)", "Rừng U Minh Hạ", "Bến Vàm Lũng", "Hòn Đá Bạc"]
  }
};
