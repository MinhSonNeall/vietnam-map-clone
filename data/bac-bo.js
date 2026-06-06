/*
 * NỘI DUNG CHI TIẾT TỈNH/THÀNH — VÙNG BẮC BỘ
 * ------------------------------------------------------------------
 * Mỗi tỉnh là 1 mục trong PROVINCE_CONTENT, KEY = đúng tên tỉnh trong app.js.
 * Cấu trúc 1 tỉnh:
 * {
 *   slug: "ha-noi",                       // dùng cho đường dẫn ảnh img/provinces/<slug>/
 *   tagline: "câu giới thiệu ngắn",
 *   images: [                              // 2-3 ảnh; đặt ảnh vào img/provinces/<slug>/1.jpg...
 *     { src: "../img/provinces/ha-noi/1.jpg", caption: "Chú thích ảnh" },
 *   ],
 *   overview: ["đoạn 1", "đoạn 2"],        // tổng quan
 *   sections: [                            // các phần lịch sử chi tiết
 *     { title: "Tiêu đề phần", body: ["đoạn 1", "đoạn 2"] },
 *   ],
 *   influence: ["đoạn 1", "đoạn 2"]        // ảnh hưởng & di sản
 * }
 */
window.PROVINCE_CONTENT = window.PROVINCE_CONTENT || {};

Object.assign(window.PROVINCE_CONTENT, {
  "Hà Nội": {
    slug: "ha-noi",
    tagline: "Thăng Long – Hà Nội, kinh đô ngàn năm văn hiến",
    images: [
      { src: "../img/provinces/ha-noi/1.jpg", caption: "Hoàng thành Thăng Long" },
      { src: "../img/provinces/ha-noi/2.jpg", caption: "Hồ Gươm – Tháp Rùa" },
      { src: "../img/provinces/ha-noi/3.jpg", caption: "Văn Miếu – Quốc Tử Giám" }
    ],
    overview: [
      "Hà Nội là Thủ đô của Việt Nam, trung tâm chính trị, văn hóa và giáo dục lớn của cả nước, nằm giữa vùng đồng bằng sông Hồng trù phú. Đây là một trong những đô thị có bề dày lịch sử bậc nhất Đông Nam Á.",
      "Tính từ khi vua Lý Thái Tổ dời đô về Thăng Long năm 1010, Hà Nội đã có hơn một nghìn năm liên tục giữ vai trò trung tâm của đất nước, là nơi hội tụ và kết tinh những giá trị tiêu biểu nhất của văn hóa Việt."
    ],
    sections: [
      {
        title: "Từ Đại La đến Thăng Long",
        body: [
          "Năm 1010, Lý Công Uẩn (Lý Thái Tổ) ban Chiếu dời đô, chuyển kinh đô từ Hoa Lư (Ninh Bình) về thành Đại La và đổi tên thành Thăng Long — nghĩa là 'rồng bay lên'. Vùng đất 'ở vào nơi trung tâm trời đất, được thế rồng cuộn hổ ngồi' được chọn làm nơi định đô muôn đời.",
          "Sự kiện này mở ra thời kỳ phát triển rực rỡ của quốc gia Đại Việt độc lập, đặt nền móng cho một trung tâm quyền lực và văn hóa tồn tại suốt nhiều thế kỷ."
        ]
      },
      {
        title: "Kinh đô qua các triều đại Lý – Trần – Lê",
        body: [
          "Dưới các triều Lý, Trần, Lê, Thăng Long là trung tâm của Đại Việt. Năm 1070 Văn Miếu được dựng, năm 1076 lập Quốc Tử Giám — được xem là trường đại học đầu tiên của Việt Nam, nơi đào tạo và vinh danh hiền tài.",
          "Thăng Long cũng là hậu phương và đầu não của nhiều chiến công hiển hách: chống Tống thời Lý, ba lần đánh tan quân Nguyên – Mông thời Trần, và khởi nghĩa Lam Sơn dẫn đến chiến thắng quân Minh, lập nên triều Lê."
        ]
      },
      {
        title: "Thời cận đại và thời thuộc Pháp",
        body: [
          "Năm 1831, vua Minh Mạng cải cách hành chính, lập tỉnh Hà Nội. Cuối thế kỷ 19, thực dân Pháp chiếm Hà Nội và biến nơi đây thành thủ phủ của Liên bang Đông Dương.",
          "Người Pháp quy hoạch khu phố kiểu phương Tây với những đại lộ, biệt thự và công trình như Nhà hát Lớn, cầu Long Biên — tạo nên diện mạo kiến trúc đặc trưng còn lưu giữ đến nay bên cạnh khu phố cổ '36 phố phường'."
        ]
      },
      {
        title: "Thủ đô của nước Việt Nam độc lập",
        body: [
          "Ngày 2/9/1945, tại Quảng trường Ba Đình, Chủ tịch Hồ Chí Minh đọc bản Tuyên ngôn Độc lập, khai sinh nước Việt Nam Dân chủ Cộng hòa. Cuối năm 1946, Hà Nội mở đầu Toàn quốc kháng chiến với tinh thần 'Quyết tử cho Tổ quốc quyết sinh'.",
          "Ngày 10/10/1954, Thủ đô được giải phóng. Tháng 12/1972, quân dân Hà Nội làm nên chiến thắng 'Hà Nội – Điện Biên Phủ trên không', góp phần quyết định buộc Mỹ ký Hiệp định Paris."
        ]
      }
    ],
    influence: [
      "Hà Nội là biểu tượng cho bản sắc và sức sống của văn hóa Việt: từ khu phố cổ, ẩm thực (phở, bún chả, cốm), nghệ thuật dân gian đến nếp sống thanh lịch 'người Tràng An'.",
      "Thành phố sở hữu nhiều di sản được vinh danh: Khu trung tâm Hoàng thành Thăng Long (Di sản Văn hóa Thế giới – UNESCO, 2010) và 82 bia tiến sĩ ở Văn Miếu (Di sản Tư liệu Thế giới). Ngày nay Hà Nội tiếp tục là đầu tàu về chính trị, giáo dục và văn hóa của cả nước."
    ]
  },

  "Lai Châu": {
    slug: "lai-chau",
    tagline: "Vùng biên cương cực Tây Bắc của Tổ quốc",
    images: [
      { src: "../img/provinces/lai-chau/1.jpg", caption: "Cao nguyên Sìn Hồ" },
      { src: "../img/provinces/lai-chau/2.jpg", caption: "Bản làng vùng cao Tây Bắc" },
      { src: "../img/provinces/lai-chau/3.jpg", caption: "Thượng nguồn sông Đà" }
    ],
    overview: [
      "Lai Châu là tỉnh biên giới ở cực Tây Bắc của Tổ quốc, có đường biên giáp tỉnh Vân Nam (Trung Quốc). Địa hình bị chia cắt mạnh bởi những dãy núi cao và thung lũng sâu nơi đầu nguồn sông Đà.",
      "Đây là nơi cư trú lâu đời của hơn 20 dân tộc như Thái, Mông, Dao, Hà Nhì, Lự, Lào... Với vị trí 'phên giậu', Lai Châu giữ vai trò trọng yếu về quốc phòng và là vùng đất giàu bản sắc văn hóa vùng cao."
    ],
    sections: [
      {
        title: "Vùng đất các châu mường",
        body: [
          "Trong lịch sử, Lai Châu là địa bàn các châu mường của người Thái vùng thượng nguồn sông Đà, được cai quản theo chế độ thổ ty, phìa tạo.",
          "Các vùng Mường Lay, Mường Tè từng là trung tâm của những thủ lĩnh người Thái có thế lực lớn ở Tây Bắc."
        ]
      },
      {
        title: "Thời Pháp thuộc",
        body: [
          "Năm 1909, thực dân Pháp lập đạo Lai Châu, cai trị thông qua tầng lớp thổ ty địa phương, tiêu biểu là dòng họ Đèo Văn. Dinh thự Đèo Văn Long ở Mường Lay là dấu tích còn lại của thời kỳ này.",
          "Dưới ách áp bức và sưu cao thuế nặng, đồng bào các dân tộc nhiều lần nổi dậy đấu tranh."
        ]
      },
      {
        title: "Kháng chiến và chiến dịch Tây Bắc",
        body: [
          "Trong kháng chiến chống Pháp, vùng đất Lai Châu là một phần của chiến trường Tây Bắc. Chiến dịch Tây Bắc năm 1952 đã giải phóng phần lớn khu vực, tạo bàn đạp tiến tới Chiến dịch Điện Biên Phủ năm 1954."
        ]
      },
      {
        title: "Sau hòa bình và tái lập tỉnh",
        body: [
          "Sau năm 1954, vùng đất thuộc Khu tự trị Thái – Mèo, sau là Khu tự trị Tây Bắc.",
          "Năm 2004, tỉnh Lai Châu mới được tái lập sau khi chia tách tỉnh Lai Châu cũ (phần còn lại trở thành tỉnh Điện Biên), tỉnh lỵ đặt tại thành phố Lai Châu ngày nay."
        ]
      }
    ],
    influence: [
      "Lai Châu giàu bản sắc văn hóa các dân tộc thiểu số với chợ phiên vùng cao, các lễ hội như Then Kin Pang, Gầu Tào, cùng nghề dệt thổ cẩm và những điệu xòe Thái.",
      "Tỉnh có tiềm năng thủy điện lớn trên sông Đà (Lai Châu, Huội Quảng – Bản Chát) và sức hút du lịch khám phá với cao nguyên Sìn Hồ cùng các đỉnh núi Pu Ta Leng, Bạch Mộc Lương Tử."
    ]
  },

  "Điện Biên": {
    slug: "dien-bien",
    tagline: "Nơi làm nên chiến thắng 'lừng lẫy năm châu, chấn động địa cầu'",
    images: [
      { src: "../img/provinces/dien-bien/1.jpg", caption: "Đồi A1" },
      { src: "../img/provinces/dien-bien/2.jpg", caption: "Hầm De Castries" },
      { src: "../img/provinces/dien-bien/3.jpg", caption: "Tượng đài Chiến thắng Điện Biên Phủ" }
    ],
    overview: [
      "Điện Biên là tỉnh biên giới Tây Bắc, có chung đường biên với cả Lào và Trung Quốc, với cánh đồng Mường Thanh trù phú lớn nhất vùng núi phía Bắc.",
      "Tên tỉnh gắn liền với Chiến thắng Điện Biên Phủ năm 1954 – trận quyết chiến chiến lược kết thúc cuộc kháng chiến chống thực dân Pháp, được cả thế giới biết đến."
    ],
    sections: [
      {
        title: "Thành Bản Phủ và Hoàng Công Chất",
        body: [
          "Giữa thế kỷ 18, thủ lĩnh Hoàng Công Chất cùng nghĩa quân xây thành Bản Phủ, lãnh đạo nhân dân các dân tộc giữ vùng Mường Thanh và đánh đuổi giặc Phẻ ngoại xâm.",
          "Đây là dấu ấn cho thấy vùng đất chiến lược này từ sớm đã là nơi diễn ra các cuộc đấu tranh bảo vệ bờ cõi."
        ]
      },
      {
        title: "Tập đoàn cứ điểm của thực dân Pháp",
        body: [
          "Năm 1953, Pháp xây dựng Điện Biên Phủ thành tập đoàn cứ điểm mạnh nhất Đông Dương với 49 cứ điểm, được coi là 'pháo đài bất khả xâm phạm' nhằm nghiền nát chủ lực của ta."
        ]
      },
      {
        title: "Chiến dịch Điện Biên Phủ 1954",
        body: [
          "Từ 13/3 đến 7/5/1954, dưới sự chỉ huy của Đại tướng Võ Nguyên Giáp, quân ta tiến công với phương châm 'đánh chắc, tiến chắc', kéo pháo vào trận địa và đào hàng trăm km hào vây lấn.",
          "Chiều 7/5/1954, tướng De Castries cùng toàn bộ Bộ chỉ huy địch đầu hàng; lá cờ 'Quyết chiến Quyết thắng' tung bay trên nóc hầm chỉ huy."
        ]
      },
      {
        title: "Ý nghĩa lịch sử",
        body: [
          "Chiến thắng kết thúc chín năm kháng chiến chống Pháp, trực tiếp đưa đến việc ký Hiệp định Genève lập lại hòa bình ở Đông Dương.",
          "Đây là chiến thắng đầu tiên của một dân tộc thuộc địa đánh bại một đế quốc thực dân, cổ vũ mạnh mẽ phong trào giải phóng dân tộc khắp châu Á, châu Phi và Mỹ La-tinh."
        ]
      }
    ],
    influence: [
      "Di tích chiến trường Điện Biên Phủ (đồi A1, hầm De Castries, tượng đài Chiến thắng...) là Di tích quốc gia đặc biệt, biểu tượng cho ý chí và bản lĩnh Việt Nam.",
      "Điện Biên còn là điểm đến giáo dục truyền thống của nhiều thế hệ và là nơi giao thoa văn hóa đặc sắc của đồng bào Thái, Mông vùng Tây Bắc."
    ]
  },

  "Sơn La": {
    slug: "son-la",
    tagline: "Cao nguyên Tây Bắc – nơi có Nhà tù Sơn La lịch sử",
    images: [
      { src: "../img/provinces/son-la/1.jpg", caption: "Di tích Nhà tù Sơn La" },
      { src: "../img/provinces/son-la/2.jpg", caption: "Cao nguyên Mộc Châu" },
      { src: "../img/provinces/son-la/3.jpg", caption: "Thủy điện Sơn La" }
    ],
    overview: [
      "Sơn La là tỉnh miền núi rộng lớn ở Tây Bắc, với những cao nguyên xanh như Mộc Châu, Nà Sản và là địa bàn cư trú chủ yếu của người Thái, Mông.",
      "Vùng đất này vừa giàu truyền thống cách mạng với di tích Nhà tù Sơn La, vừa có vai trò chiến lược về năng lượng khi sở hữu nhà máy thủy điện Sơn La lớn nhất Đông Nam Á."
    ],
    sections: [
      {
        title: "Nhà tù Sơn La",
        body: [
          "Năm 1908, thực dân Pháp xây Nhà tù Sơn La trên đồi Khau Cả để giam cầm tù chính trị, biến nơi rừng thiêng nước độc thành 'địa ngục trần gian' nhằm thủ tiêu ý chí của những người cộng sản.",
          "Từ 1939–1944, chi bộ trong nhà tù được thành lập, hoạt động bí mật và ra tờ báo 'Suối Reo', biến nhà tù thành trường học cách mạng, tôi luyện nhiều cán bộ lãnh đạo."
        ]
      },
      {
        title: "Cây đào Tô Hiệu",
        body: [
          "Người chiến sĩ cộng sản Tô Hiệu bị giam và hy sinh tại đây năm 1944. Cây đào ông trồng trong tù trở thành biểu tượng bất diệt cho tinh thần lạc quan, kiên trung của những người tù cách mạng."
        ]
      },
      {
        title: "Bác Hồ thăm Tây Bắc",
        body: [
          "Năm 1959, Chủ tịch Hồ Chí Minh về thăm và nói chuyện với cán bộ, đồng bào các dân tộc Tây Bắc tại Sơn La, để lại những lời căn dặn và tình cảm sâu đậm với vùng đất này."
        ]
      },
      {
        title: "Vùng đất của thủy điện và cao nguyên",
        body: [
          "Công trình thủy điện Sơn La (khánh thành năm 2012) là nhà máy thủy điện lớn nhất Đông Nam Á, giữ vai trò quan trọng trong an ninh năng lượng quốc gia.",
          "Cao nguyên Mộc Châu với đồng cỏ, đồi chè và hoa mận trắng đã trở thành điểm du lịch nổi tiếng của vùng Tây Bắc."
        ]
      }
    ],
    influence: [
      "Sơn La nổi bật với văn hóa Thái đặc sắc, trong đó Nghệ thuật Xòe Thái được UNESCO ghi danh là Di sản Văn hóa Phi vật thể của nhân loại năm 2021.",
      "Tỉnh là vựa cây ăn quả và nông sản lớn của miền núi phía Bắc, đồng thời giữ vai trò trọng yếu về thủy điện và du lịch sinh thái – văn hóa."
    ]
  },

  "Lào Cai": {
    slug: "lao-cai",
    tagline: "Cửa ngõ biên giới phía Bắc, nơi có 'nóc nhà Đông Dương'",
    images: [
      { src: "../img/provinces/lao-cai/1.jpg", caption: "Đỉnh Fansipan" },
      { src: "../img/provinces/lao-cai/2.jpg", caption: "Ruộng bậc thang Sa Pa" },
      { src: "../img/provinces/lao-cai/3.jpg", caption: "Cửa khẩu quốc tế Lào Cai" }
    ],
    overview: [
      "Lào Cai là tỉnh biên giới phía Bắc giáp tỉnh Vân Nam (Trung Quốc), nơi có thị xã Sa Pa và đỉnh Fansipan cao 3.143m – 'nóc nhà Đông Dương'.",
      "Tỉnh được hợp nhất từ Lào Cai và Yên Bái, là vùng đất giàu tài nguyên, cảnh quan hùng vĩ và đậm đà bản sắc của các dân tộc Mông, Dao, Tày, Giáy, Hà Nhì..."
    ],
    sections: [
      {
        title: "Vùng biên ải và tuyến đường sắt",
        body: [
          "Năm 1907, Pháp lập tỉnh Lào Cai và xây dựng tuyến đường sắt Hải Phòng – Hà Nội – Lào Cai – Vân Nam, biến nơi đây thành đầu mối giao thương quan trọng.",
          "Cũng trong thời kỳ này, người Pháp phát hiện và xây dựng Sa Pa thành khu nghỉ dưỡng trên núi với khí hậu mát mẻ quanh năm."
        ]
      },
      {
        title: "Phong trào cách mạng vùng cao",
        body: [
          "Đầu thế kỷ 20, công nhân mỏ và công nhân đường sắt Lào Cai sớm tham gia các phong trào đấu tranh; vùng đất trở thành một địa bàn cách mạng quan trọng ở Tây Bắc."
        ]
      },
      {
        title: "Bảo vệ biên giới phía Bắc 1979",
        body: [
          "Tháng 2/1979, quân và dân Lào Cai kiên cường chiến đấu bảo vệ biên giới phía Bắc, giữ vững chủ quyền vùng cửa ngõ thiêng liêng của Tổ quốc."
        ]
      },
      {
        title: "Vùng đất giàu tài nguyên",
        body: [
          "Lào Cai giàu khoáng sản, đặc biệt là mỏ apatit lớn nhất nước, và là cửa khẩu quốc tế giao thương sôi động với Trung Quốc.",
          "Phần đất Yên Bái (cũ) nổi tiếng với ruộng bậc thang Mù Cang Chải – Di tích quốc gia đặc biệt và danh thắng nổi tiếng."
        ]
      }
    ],
    influence: [
      "Du lịch Sa Pa – Fansipan với ruộng bậc thang, chợ phiên và 'săn mây' đã trở thành thương hiệu du lịch nổi tiếng trong và ngoài nước.",
      "Lào Cai là cửa ngõ kinh tế quan trọng trên tuyến hành lang kinh tế Côn Minh – Lào Cai – Hà Nội – Hải Phòng, đồng thời lưu giữ kho tàng văn hóa phong phú của nhiều dân tộc."
    ]
  },

  "Tuyên Quang": {
    slug: "tuyen-quang",
    tagline: "Thủ đô Khu giải phóng – Thủ đô kháng chiến",
    images: [
      { src: "../img/provinces/tuyen-quang/1.jpg", caption: "Lán Nà Nưa" },
      { src: "../img/provinces/tuyen-quang/2.jpg", caption: "Cây đa Tân Trào" },
      { src: "../img/provinces/tuyen-quang/3.jpg", caption: "Cao nguyên đá Đồng Văn" }
    ],
    overview: [
      "Tuyên Quang là tỉnh miền núi phía Bắc, được lịch sử khắc ghi là 'Thủ đô Khu giải phóng' và 'Thủ đô kháng chiến'.",
      "Tỉnh được hợp nhất từ Hà Giang và Tuyên Quang, trải dài từ chiến khu Tân Trào lịch sử đến vùng địa đầu Lũng Cú nơi cực Bắc Tổ quốc."
    ],
    sections: [
      {
        title: "Tân Trào – cội nguồn cách mạng",
        body: [
          "Tháng 8/1945, dưới gốc đa Tân Trào, Quốc dân Đại hội họp và cử ra Ủy ban Dân tộc Giải phóng do Hồ Chí Minh đứng đầu, phát động Tổng khởi nghĩa giành chính quyền trong cả nước.",
          "Trước đó, Bác Hồ đã sống và làm việc tại lán Nà Nưa để chỉ đạo chuẩn bị cho Cách mạng Tháng Tám."
        ]
      },
      {
        title: "Thủ đô kháng chiến 1947–1954",
        body: [
          "Trong kháng chiến chống Pháp, Trung ương Đảng, Chính phủ và Chủ tịch Hồ Chí Minh đặt đại bản doanh tại an toàn khu (ATK) Tuyên Quang.",
          "Nhiều quyết sách quan trọng của cuộc kháng chiến đã được đề ra từ vùng rừng núi Tuyên Quang này."
        ]
      },
      {
        title: "Vùng đất địa đầu Tổ quốc",
        body: [
          "Phần đất Hà Giang (cũ) có Cao nguyên đá Đồng Văn – Công viên địa chất toàn cầu UNESCO, với cảnh quan đá tai mèo hùng vĩ và đèo Mã Pí Lèng nổi tiếng.",
          "Cột cờ Lũng Cú trên đỉnh núi Rồng đánh dấu điểm cực Bắc thiêng liêng của đất nước."
        ]
      },
      {
        title: "Truyền thống đấu tranh lâu đời",
        body: [
          "Vùng đất Tuyên Quang từng chứng kiến nhiều cuộc chiến trong lịch sử, và là nơi sinh sống lâu đời, đoàn kết đấu tranh của các dân tộc Tày, Dao, Mông, Nùng..."
        ]
      }
    ],
    influence: [
      "Khu di tích quốc gia đặc biệt Tân Trào là 'địa chỉ đỏ' giáo dục truyền thống cách mạng cho cả nước.",
      "Cao nguyên đá Đồng Văn cùng văn hóa rực rỡ của các dân tộc vùng cao tạo nên sức hút du lịch đặc sắc, là điểm đến hàng đầu của vùng núi phía Bắc."
    ]
  },

  "Cao Bằng": {
    slug: "cao-bang",
    tagline: "Nơi Bác Hồ về nước, cội nguồn cách mạng Việt Nam",
    images: [
      { src: "../img/provinces/cao-bang/1.jpg", caption: "Hang Pác Bó" },
      { src: "../img/provinces/cao-bang/2.jpg", caption: "Suối Lê-nin" },
      { src: "../img/provinces/cao-bang/3.jpg", caption: "Thác Bản Giốc" }
    ],
    overview: [
      "Cao Bằng là tỉnh biên giới Đông Bắc giáp Trung Quốc, nơi non nước hữu tình với thác Bản Giốc hùng vĩ và nhiều hang động kỳ thú.",
      "Đây là vùng đất thiêng của cách mạng – nơi lãnh tụ Nguyễn Ái Quốc trở về nước năm 1941 sau 30 năm bôn ba, trực tiếp lãnh đạo phong trào giải phóng dân tộc."
    ],
    sections: [
      {
        title: "Pác Bó 1941",
        body: [
          "Ngày 28/1/1941, lãnh tụ Nguyễn Ái Quốc về nước qua cột mốc 108, chọn hang Pác Bó (xã Trường Hà) làm nơi sống và làm việc.",
          "Người đặt tên dòng suối trước hang là suối Lê-nin và ngọn núi là núi Các Mác, gửi gắm lý tưởng cách mạng."
        ]
      },
      {
        title: "Hội nghị Trung ương 8 và Mặt trận Việt Minh",
        body: [
          "Tháng 5/1941, Hội nghị Trung ương 8 họp tại Pác Bó dưới sự chủ trì của Nguyễn Ái Quốc, quyết định đặt nhiệm vụ giải phóng dân tộc lên hàng đầu và thành lập Mặt trận Việt Minh."
        ]
      },
      {
        title: "Thành lập Đội Việt Nam Tuyên truyền Giải phóng quân",
        body: [
          "Ngày 22/12/1944, tại khu rừng Trần Hưng Đạo, Đội Việt Nam Tuyên truyền Giải phóng quân ra đời với 34 chiến sĩ do Võ Nguyên Giáp chỉ huy – tiền thân của Quân đội Nhân dân Việt Nam."
        ]
      },
      {
        title: "Vùng đất biên cương lâu đời",
        body: [
          "Cao Bằng từ xưa đã là vùng biên ải trọng yếu, gắn với những nhân vật lịch sử như Nùng Trí Cao thời Lý, thể hiện vị trí chiến lược trấn giữ phương Bắc."
        ]
      }
    ],
    influence: [
      "Khu di tích Pác Bó là 'địa chỉ đỏ' thiêng liêng, nơi cội nguồn của cách mạng Việt Nam.",
      "Cao Bằng còn có thác Bản Giốc, động Ngườm Ngao và Công viên địa chất toàn cầu UNESCO Non nước Cao Bằng, cùng văn hóa đặc sắc của người Tày, Nùng, Mông, Dao."
    ]
  },

  "Lạng Sơn": {
    slug: "lang-son",
    tagline: "Phên giậu phía Bắc, ải Chi Lăng huyền thoại",
    images: [
      { src: "../img/provinces/lang-son/1.jpg", caption: "Ải Chi Lăng" },
      { src: "../img/provinces/lang-son/2.jpg", caption: "Động Tam Thanh" },
      { src: "../img/provinces/lang-son/3.jpg", caption: "Tượng nàng Tô Thị" }
    ],
    overview: [
      "Lạng Sơn là tỉnh biên giới Đông Bắc với cửa khẩu quốc tế Hữu Nghị và Tân Thanh sầm uất – một trong những cửa ngõ giao thương lớn nhất với Trung Quốc.",
      "Đây là vùng đất 'phên giậu' của Tổ quốc, nơi ải Chi Lăng đã đi vào lịch sử như một 'mồ chôn' quân xâm lược phương Bắc qua nhiều thế kỷ."
    ],
    sections: [
      {
        title: "Ải Chi Lăng – mồ chôn quân xâm lược",
        body: [
          "Ải Chi Lăng là cửa ải hiểm yếu trên con đường tiến quân từ phương Bắc xuống Thăng Long, với núi non hiểm trở tạo thành thế gọng kìm tự nhiên.",
          "Tháng 10/1427, nghĩa quân Lam Sơn đã phục kích, chém tướng Liễu Thăng tại đây, đập tan đạo viện binh quân Minh và góp phần kết thúc thắng lợi cuộc khởi nghĩa."
        ]
      },
      {
        title: "Vùng đất giao thương cổ",
        body: [
          "Từ xưa, Lạng Sơn đã là trung tâm buôn bán nơi biên giới với phố chợ Kỳ Lừa nổi tiếng, đi vào ca dao 'Đồng Đăng có phố Kỳ Lừa / Có nàng Tô Thị, có chùa Tam Thanh'."
        ]
      },
      {
        title: "Danh thắng và văn hóa xứ Lạng",
        body: [
          "Xứ Lạng có động Tam Thanh – Nhị Thanh kỳ ảo, tượng đá nàng Tô Thị gắn với truyền thuyết 'hòn vọng phu', cùng thành nhà Mạc cổ kính."
        ]
      },
      {
        title: "Bảo vệ biên giới 1979",
        body: [
          "Năm 1979, quân và dân Lạng Sơn đã chiến đấu kiên cường để bảo vệ biên giới phía Bắc, giữ vững từng tấc đất thiêng liêng nơi địa đầu."
        ]
      }
    ],
    influence: [
      "Lạng Sơn là cửa ngõ giao thương lớn với Trung Quốc, đóng vai trò quan trọng trong kinh tế biên mậu của cả nước.",
      "Vùng đất mang đậm văn hóa Tày – Nùng với làn điệu hát then, đàn tính, lễ hội lồng tồng, cùng điểm du lịch nghỉ mát Mẫu Sơn nổi tiếng."
    ]
  },

  "Thái Nguyên": {
    slug: "thai-nguyen",
    tagline: "Thủ đô gió ngàn – trung tâm ATK Việt Bắc",
    images: [
      { src: "../img/provinces/thai-nguyen/1.jpg", caption: "ATK Định Hóa" },
      { src: "../img/provinces/thai-nguyen/2.jpg", caption: "Hồ Núi Cốc" },
      { src: "../img/provinces/thai-nguyen/3.jpg", caption: "Đồi chè Tân Cương" }
    ],
    overview: [
      "Thái Nguyên là tỉnh trung du Đông Bắc, cửa ngõ nối vùng đồng bằng với miền núi phía Bắc, được mệnh danh là 'Thủ đô gió ngàn' của vùng Việt Bắc trong kháng chiến.",
      "Tỉnh được hợp nhất từ Bắc Kạn và Thái Nguyên, nổi tiếng với chè Tân Cương 'đệ nhất danh trà' và là trung tâm công nghiệp, giáo dục lớn của vùng."
    ],
    sections: [
      {
        title: "Khởi nghĩa Thái Nguyên 1917",
        body: [
          "Năm 1917, Đội Cấn (Trịnh Văn Cấn) và Lương Ngọc Quyến lãnh đạo binh lính người Việt nổi dậy, chiếm tỉnh lỵ Thái Nguyên trong nhiều ngày.",
          "Đây là cuộc khởi nghĩa vũ trang chống Pháp có quy mô lớn đầu thế kỷ 20, thể hiện tinh thần yêu nước mạnh mẽ."
        ]
      },
      {
        title: "ATK Định Hóa – đầu não kháng chiến",
        body: [
          "Năm 1947, Trung ương Đảng, Chính phủ và Chủ tịch Hồ Chí Minh chuyển lên an toàn khu (ATK) Định Hóa để lãnh đạo kháng chiến chống Pháp.",
          "Ngày 6/12/1953, tại đồi Tỉn Keo, Bộ Chính trị họp và quyết định mở Chiến dịch Điện Biên Phủ lịch sử."
        ]
      },
      {
        title: "Trung tâm công nghiệp và giáo dục",
        body: [
          "Thái Nguyên có Khu gang thép Thái Nguyên – cái nôi của ngành luyện kim Việt Nam, cùng hệ thống trường đại học lớn đào tạo nhân lực cho cả vùng."
        ]
      },
      {
        title: "Vùng đất hồ Ba Bể",
        body: [
          "Phần đất Bắc Kạn (cũ) có hồ Ba Bể – hồ nước ngọt tự nhiên lớn nhất Việt Nam, nằm giữa Vườn quốc gia Ba Bể với hệ sinh thái phong phú."
        ]
      }
    ],
    influence: [
      "Di tích lịch sử ATK Định Hóa là 'địa chỉ đỏ' quan trọng, gắn với những quyết định trọng đại của cuộc kháng chiến chống Pháp.",
      "Thái Nguyên là trung tâm đào tạo và công nghiệp của vùng trung du, miền núi phía Bắc, đồng thời nổi tiếng với thương hiệu chè Tân Cương và du lịch hồ Núi Cốc, hồ Ba Bể."
    ]
  },

  "Phú Thọ": {
    slug: "phu-tho",
    tagline: "Đất Tổ Hùng Vương – cội nguồn dân tộc Việt",
    images: [
      { src: "../img/provinces/phu-tho/1.jpg", caption: "Đền Hùng" },
      { src: "../img/provinces/phu-tho/2.jpg", caption: "Lễ hội Giỗ Tổ Hùng Vương" },
      { src: "../img/provinces/phu-tho/3.jpg", caption: "Hát Xoan Phú Thọ" }
    ],
    overview: [
      "Phú Thọ là vùng Đất Tổ – cội nguồn thiêng liêng của dân tộc Việt Nam, nơi có Khu di tích lịch sử Đền Hùng và tín ngưỡng thờ cúng Hùng Vương.",
      "Tỉnh được hợp nhất từ Vĩnh Phúc, Hòa Bình và Phú Thọ, trải dài từ vùng trung du Việt Trì đến những bản Mường bên dòng sông Đà."
    ],
    sections: [
      {
        title: "Kinh đô Văn Lang",
        body: [
          "Theo truyền thuyết và sử sách, thời đại Hùng Vương, nhà nước Văn Lang đầu tiên của người Việt đã đóng đô ở vùng Phong Châu (Việt Trì ngày nay).",
          "Đây được coi là buổi bình minh dựng nước của dân tộc, gắn với truyền thuyết Lạc Long Quân – Âu Cơ và bọc trăm trứng."
        ]
      },
      {
        title: "Giỗ Tổ Hùng Vương",
        body: [
          "'Dù ai đi ngược về xuôi, nhớ ngày Giỗ Tổ mùng Mười tháng Ba' – Giỗ Tổ Hùng Vương (10/3 âm lịch) trở thành Quốc giỗ, ngày lễ chung của cả dân tộc.",
          "Hằng năm, hàng triệu người con đất Việt hành hương về Đền Hùng để tưởng nhớ công ơn các Vua Hùng."
        ]
      },
      {
        title: "Di sản được vinh danh",
        body: [
          "Tín ngưỡng thờ cúng Hùng Vương ở Phú Thọ (2012) và Hát Xoan Phú Thọ đều được UNESCO ghi danh là Di sản Văn hóa Phi vật thể của nhân loại."
        ]
      },
      {
        title: "Đất Mường và công trình thế kỷ",
        body: [
          "Phần đất Hòa Bình (cũ) là cái nôi của văn hóa Mường và nền 'Văn hóa Hòa Bình' thời tiền sử nổi tiếng thế giới.",
          "Nơi đây cũng có công trình thủy điện Hòa Bình trên sông Đà – một biểu tượng của công cuộc xây dựng đất nước thời hiện đại."
        ]
      }
    ],
    influence: [
      "Phú Thọ là trung tâm hành hương 'về nguồn', biểu tượng cho tinh thần đoàn kết và đạo lý 'uống nước nhớ nguồn' của người Việt.",
      "Vùng đất còn lưu giữ hát Xoan, văn hóa Mường và nhiều lễ hội cổ truyền, là điểm giao thoa văn hóa đặc sắc giữa miền núi và đồng bằng."
    ]
  },

  "Bắc Ninh": {
    slug: "bac-ninh",
    tagline: "Đất Kinh Bắc – quê hương Quan họ và vương triều Lý",
    images: [
      { src: "../img/provinces/bac-ninh/1.jpg", caption: "Đền Đô (Lý Bát Đế)" },
      { src: "../img/provinces/bac-ninh/2.jpg", caption: "Chùa Dâu" },
      { src: "../img/provinces/bac-ninh/3.jpg", caption: "Hát Quan họ" }
    ],
    overview: [
      "Bắc Ninh là vùng đất Kinh Bắc cổ kính, một trong những cái nôi của văn hiến, Phật giáo và nghệ thuật dân gian Việt Nam.",
      "Tỉnh được hợp nhất từ Bắc Giang và Bắc Ninh, là quê hương của vương triều Lý và của những làn điệu dân ca Quan họ say đắm lòng người."
    ],
    sections: [
      {
        title: "Trung tâm cổ Luy Lâu",
        body: [
          "Thế kỷ II–III, Luy Lâu là trung tâm chính trị, kinh tế và tôn giáo lớn của Giao Châu, nơi Phật giáo du nhập sớm vào nước ta và hình thành nên hệ thống 'Tứ Pháp'."
        ]
      },
      {
        title: "Quê hương nhà Lý",
        body: [
          "Lý Công Uẩn, người làng Đình Bảng, lên ngôi năm 1009 lập nên triều Lý – triều đại đã dời đô ra Thăng Long và mở thời kỳ phát triển rực rỡ của Đại Việt.",
          "Đền Đô (Đền Lý Bát Đế) ở Đình Bảng là nơi thờ tám vị vua triều Lý."
        ]
      },
      {
        title: "Văn hiến và dân ca Quan họ",
        body: [
          "Kinh Bắc là vùng đất khoa bảng nức tiếng với nhiều tiến sĩ, trạng nguyên. Dân ca Quan họ Bắc Ninh được UNESCO ghi danh năm 2009, với các 'liền anh, liền chị' và lối hát giao duyên độc đáo.",
          "Vùng đất còn có nhiều ngôi chùa cổ nổi tiếng như chùa Dâu, chùa Phật Tích, chùa Bút Tháp."
        ]
      },
      {
        title: "Đất Bắc Giang và khởi nghĩa Yên Thế",
        body: [
          "Phần đất Bắc Giang (cũ) gắn với cuộc khởi nghĩa Yên Thế kéo dài gần 30 năm của 'Hùm thiêng Yên Thế' Hoàng Hoa Thám chống thực dân Pháp.",
          "Nơi đây cũng có chùa Vĩnh Nghiêm – nơi lưu giữ kho mộc bản được công nhận là Di sản Tư liệu thế giới."
        ]
      }
    ],
    influence: [
      "Dân ca Quan họ trở thành di sản của nhân loại, là niềm tự hào của vùng Kinh Bắc và cả nước.",
      "Bắc Ninh nổi tiếng với tranh dân gian Đông Hồ, nghề đúc đồng Đại Bái và là một trong những trung tâm công nghiệp năng động hàng đầu miền Bắc hiện nay."
    ]
  },

  "Quảng Ninh": {
    slug: "quang-ninh",
    tagline: "Vịnh Hạ Long kỳ quan và cái nôi công nhân vùng mỏ",
    images: [
      { src: "../img/provinces/quang-ninh/1.jpg", caption: "Vịnh Hạ Long" },
      { src: "../img/provinces/quang-ninh/2.jpg", caption: "Khu di tích Yên Tử" },
      { src: "../img/provinces/quang-ninh/3.jpg", caption: "Bãi cọc Bạch Đằng" }
    ],
    overview: [
      "Quảng Ninh là tỉnh địa đầu Đông Bắc ven biển, sở hữu Vịnh Hạ Long – Di sản Thiên nhiên Thế giới và là một trong những trung tâm du lịch hàng đầu cả nước.",
      "Đây cũng là vùng than lớn nhất Việt Nam, cái nôi của giai cấp công nhân với truyền thống 'Kỷ luật và Đồng tâm' nổi tiếng."
    ],
    sections: [
      {
        title: "Bạch Đằng giang lịch sử",
        body: [
          "Vùng cửa sông Bạch Đằng gắn với chiến thắng năm 1288 của Trần Hưng Đạo, dùng trận địa cọc lợi dụng thủy triều đánh tan đạo binh thuyền Nguyên – Mông.",
          "Đây là một trong những chiến công thủy chiến vang dội nhất trong lịch sử chống ngoại xâm của dân tộc."
        ]
      },
      {
        title: "Yên Tử – kinh đô Phật giáo",
        body: [
          "Sau khi lãnh đạo kháng chiến chống Nguyên – Mông thắng lợi, vua Trần Nhân Tông nhường ngôi và lên Yên Tử tu hành, sáng lập Thiền phái Trúc Lâm – dòng thiền mang đậm bản sắc Việt Nam."
        ]
      },
      {
        title: "Cái nôi công nhân vùng mỏ",
        body: [
          "Từ thời Pháp, vùng than Quảng Ninh phát triển mạnh với hàng vạn thợ mỏ. Năm 1936, cuộc tổng bãi công của hơn 3 vạn thợ mỏ giành thắng lợi với tinh thần 'Kỷ luật và Đồng tâm'.",
          "Truyền thống đó trở thành biểu tượng của giai cấp công nhân Việt Nam."
        ]
      },
      {
        title: "Vùng đất biên giới và hải đảo",
        body: [
          "Quảng Ninh có cửa khẩu Móng Cái giáp Trung Quốc và hệ thống đảo như Vân Đồn – thương cảng quốc tế đầu tiên của Đại Việt thời Lý, Cô Tô tiền tiêu của Tổ quốc."
        ]
      }
    ],
    influence: [
      "Vịnh Hạ Long (UNESCO công nhận năm 1994 và 2000) là một trong những kỳ quan thiên nhiên nổi tiếng thế giới, gắn với quần thể Vịnh Hạ Long – quần đảo Cát Bà.",
      "Quảng Ninh ngày nay là trung tâm du lịch, công nghiệp than và kinh tế biển, một trong những đầu tàu kinh tế của miền Bắc."
    ]
  },

  "Hưng Yên": {
    slug: "hung-yen",
    tagline: "Phố Hiến – 'Thứ nhất Kinh Kỳ, thứ nhì Phố Hiến'",
    images: [
      { src: "../img/provinces/hung-yen/1.jpg", caption: "Phố Hiến" },
      { src: "../img/provinces/hung-yen/2.jpg", caption: "Đền Chử Đồng Tử" },
      { src: "../img/provinces/hung-yen/3.jpg", caption: "Văn miếu Xích Đằng" }
    ],
    overview: [
      "Hưng Yên là tỉnh đồng bằng sông Hồng, xưa có thương cảng Phố Hiến sầm uất nức tiếng và lSà vùng đất 'địa linh nhân kiệt' sản sinh nhiều danh nhân.",
      "Tỉnh được hợp nhất từ Thái Bình và Hưng Yên, nổi tiếng với nhãn lồng tiến vua và là vựa lúa lớn của đồng bằng Bắc Bộ."
    ],
    sections: [
      {
        title: "Phố Hiến phồn thịnh",
        body: [
          "Thế kỷ 16–17, Phố Hiến là trung tâm thương mại quốc tế lớn ở Đàng Ngoài, chỉ sau Kinh Kỳ (Thăng Long), nên có câu 'Thứ nhất Kinh Kỳ, thứ nhì Phố Hiến'.",
          "Thương nhân Trung Hoa, Nhật Bản và phương Tây đã đến đây buôn bán, lập phố và để lại nhiều dấu tích văn hóa, kiến trúc."
        ]
      },
      {
        title: "Đất danh nhân",
        body: [
          "Hưng Yên là quê hương của Triệu Việt Vương, danh tướng Phạm Ngũ Lão, Đại danh y Hải Thượng Lãn Ông Lê Hữu Trác, nhà yêu nước Nguyễn Thiện Thuật và nhiều nhà cách mạng tiêu biểu.",
          "Văn miếu Xích Đằng là minh chứng cho truyền thống hiếu học của vùng đất này."
        ]
      },
      {
        title: "Tín ngưỡng và lễ hội",
        body: [
          "Đền Đa Hòa, đền Dạ Trạch thờ Chử Đồng Tử – Tiên Dung, gắn với một trong 'Tứ bất tử' của tín ngưỡng dân gian Việt Nam và thiên tình sử nổi tiếng."
        ]
      },
      {
        title: "Vùng lúa và quê hương chèo",
        body: [
          "Phần đất Thái Bình (cũ) là vựa lúa lớn của đồng bằng Bắc Bộ, quê hương của nghệ thuật chèo, di tích chùa Keo và đền thờ các vua Trần."
        ]
      }
    ],
    influence: [
      "Nhãn lồng Hưng Yên là đặc sản tiến vua nức tiếng; di tích Phố Hiến và đền Chử Đồng Tử là những điểm đến văn hóa đặc sắc của đồng bằng Bắc Bộ.",
      "Vùng đất giàu truyền thống hiếu học và cách mạng, đồng thời đang vươn lên mạnh mẽ với nhiều khu công nghiệp hiện đại."
    ]
  },

  "Hải Phòng": {
    slug: "hai-phong",
    tagline: "Thành phố Hoa phượng đỏ – cảng biển lớn nhất miền Bắc",
    images: [
      { src: "../img/provinces/hai-phong/1.jpg", caption: "Khu di tích Bạch Đằng Giang" },
      { src: "../img/provinces/hai-phong/2.jpg", caption: "Đảo Cát Bà" },
      { src: "../img/provinces/hai-phong/3.jpg", caption: "Đền Nghè thờ nữ tướng Lê Chân" }
    ],
    overview: [
      "Hải Phòng – 'thành phố Hoa phượng đỏ' – là thành phố cảng lớn nhất miền Bắc và là một trong những trung tâm kinh tế, công nghiệp trọng điểm của cả nước.",
      "Vùng cửa biển nơi đây do nữ tướng Lê Chân khai phá và gắn với những chiến thắng Bạch Đằng vang dội. Thành phố được hợp nhất từ Hải Phòng và Hải Dương."
    ],
    sections: [
      {
        title: "Chiến thắng Bạch Đằng",
        body: [
          "Năm 938, Ngô Quyền dùng trận địa cọc trên sông Bạch Đằng đánh tan quân Nam Hán, kết thúc hơn nghìn năm Bắc thuộc và mở ra nền độc lập tự chủ.",
          "Năm 1288, Trần Hưng Đạo tái lập chiến thắng Bạch Đằng, tiêu diệt đạo quân Nguyên – Mông."
        ]
      },
      {
        title: "Nữ tướng Lê Chân",
        body: [
          "Nữ tướng Lê Chân khai phá vùng đất An Biên (Hải Phòng ngày nay), chiêu mộ dân khẩn hoang lập ấp và theo Hai Bà Trưng khởi nghĩa chống quân Hán. Đền Nghè là nơi thờ bà."
        ]
      },
      {
        title: "Mở đầu kháng chiến và phát triển cảng",
        body: [
          "Ngày 20/11/1946, quân dân Hải Phòng nổ súng chống Pháp, mở màn cho cuộc kháng chiến ở thành phố cảng. Cảng Hải Phòng từ thời Pháp đã là cửa ngõ giao thương quan trọng của miền Bắc."
        ]
      },
      {
        title: "Đất Hải Dương và danh nhân",
        body: [
          "Phần đất Hải Dương (cũ) là quê hương Trạng Trình Nguyễn Bỉnh Khiêm và có khu di tích Côn Sơn – Kiếp Bạc gắn với Trần Hưng Đạo và danh nhân Nguyễn Trãi."
        ]
      }
    ],
    influence: [
      "Hải Phòng là trung tâm cảng biển, logistics và công nghiệp lớn, một cực tăng trưởng quan trọng của vùng kinh tế trọng điểm Bắc Bộ.",
      "Quần thể vịnh Hạ Long – quần đảo Cát Bà được UNESCO công nhận năm 2023; khu di tích Côn Sơn – Kiếp Bạc là điểm đến văn hóa, tâm linh nổi tiếng."
    ]
  },

  "Ninh Bình": {
    slug: "ninh-binh",
    tagline: "Cố đô Hoa Lư – kinh đô của nhà nước Đại Cồ Việt",
    images: [
      { src: "../img/provinces/ninh-binh/1.jpg", caption: "Cố đô Hoa Lư" },
      { src: "../img/provinces/ninh-binh/2.jpg", caption: "Quần thể Tràng An" },
      { src: "../img/provinces/ninh-binh/3.jpg", caption: "Chùa Bái Đính" }
    ],
    overview: [
      "Ninh Bình là cửa ngõ phía Nam đồng bằng Bắc Bộ, nơi có Cố đô Hoa Lư của các triều Đinh – Tiền Lê và quần thể danh thắng Tràng An kỳ vĩ.",
      "Tỉnh được hợp nhất từ Hà Nam, Nam Định và Ninh Bình, là vùng đất giàu trầm tích lịch sử, văn hóa và cảnh quan thiên nhiên độc đáo."
    ],
    sections: [
      {
        title: "Kinh đô Hoa Lư",
        body: [
          "Năm 968, Đinh Bộ Lĩnh dẹp loạn 12 sứ quân, lên ngôi Hoàng đế, đặt quốc hiệu Đại Cồ Việt và đóng đô tại Hoa Lư.",
          "Đây là nhà nước phong kiến trung ương tập quyền đầu tiên của Việt Nam, khẳng định nền độc lập, tự chủ sau ngàn năm Bắc thuộc."
        ]
      },
      {
        title: "Kháng chiến chống Tống và buổi đầu nhà Lý",
        body: [
          "Năm 981, Lê Hoàn (Lê Đại Hành) lãnh đạo quân dân kháng chiến chống Tống thắng lợi ngay trên đất Hoa Lư.",
          "Năm 1010, Lý Thái Tổ dời đô từ Hoa Lư ra Thăng Long, mở ra thời kỳ phát triển mới cho đất nước."
        ]
      },
      {
        title: "Vùng đất di sản và văn hiến",
        body: [
          "Phần đất Nam Định (cũ) có hành cung Thiên Trường và đền Trần – nơi phát tích vương triều Trần lừng lẫy; phần đất Hà Nam (cũ) là quê hương của nhiều danh nhân, nhà văn hóa."
        ]
      },
      {
        title: "Tràng An – di sản kép",
        body: [
          "Quần thể danh thắng Tràng An với hang động, sông nước và rừng núi đá vôi được UNESCO ghi danh năm 2014 – Di sản hỗn hợp Văn hóa và Thiên nhiên đầu tiên của Đông Nam Á."
        ]
      }
    ],
    influence: [
      "Ninh Bình là điểm đến du lịch hàng đầu với Tràng An, Tam Cốc – Bích Động, chùa Bái Đính và cố đô Hoa Lư.",
      "Vùng đất là biểu tượng cho buổi đầu dựng nền độc lập của dân tộc, đồng thời hội tụ vẻ đẹp thiên nhiên được mệnh danh là 'Hạ Long trên cạn'."
    ]
  }
});
