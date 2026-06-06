/* NỘI DUNG CHI TIẾT — VÙNG TÂY NAM BỘ (xem cấu trúc mẫu ở data/bac-bo.js)
 * Các tỉnh thuộc vùng này: Đồng Tháp, Vĩnh Long, Cần Thơ, An Giang, Cà Mau.
 */
window.PROVINCE_CONTENT = window.PROVINCE_CONTENT || {};

Object.assign(window.PROVINCE_CONTENT, {
  "Đồng Tháp": {
    slug: "dong-thap",
    tagline: "Đất Sen hồng giữa Đồng Tháp Mười",
    images: [
      { src: "../img/provinces/dong-thap/1.jpg", caption: "Khu di tích Gò Tháp" },
      { src: "../img/provinces/dong-thap/2.jpg", caption: "Khu di tích Nguyễn Sinh Sắc" },
      { src: "../img/provinces/dong-thap/3.jpg", caption: "Vườn quốc gia Tràm Chim" }
    ],
    overview: [
      "Đồng Tháp là tỉnh đầu nguồn sông Cửu Long, xứ sở 'Sen hồng' giữa vùng Đồng Tháp Mười mênh mông sông nước.",
      "Đây là nơi yên nghỉ của cụ Phó bảng Nguyễn Sinh Sắc – thân sinh Chủ tịch Hồ Chí Minh. Tỉnh được hợp nhất từ Tiền Giang và Đồng Tháp."
    ],
    sections: [
      {
        title: "Văn hóa Óc Eo – Phù Nam",
        body: [
          "Vùng Gò Tháp lưu giữ dấu tích văn hóa Óc Eo (thế kỷ I–VII), thuộc vương quốc Phù Nam cổ từng phát triển rực rỡ ở Nam Bộ.",
          "Đây là một quần thể di tích khảo cổ và kiến trúc tôn giáo quan trọng của vùng đồng bằng sông Cửu Long."
        ]
      },
      {
        title: "Khẩn hoang Đồng Tháp Mười",
        body: [
          "Từ thế kỷ 18–19, lưu dân người Việt khai phá vùng Đồng Tháp Mười – một vùng bưng biền ngập nước rộng lớn, biến nơi đây thành vùng đất trù phú.",
          "Các nghĩa quân như Thiên Hộ Dương, Đốc Binh Kiều từng lập căn cứ chống Pháp tại đây."
        ]
      },
      {
        title: "Cụ Phó bảng Nguyễn Sinh Sắc",
        body: [
          "Những năm cuối đời, cụ Nguyễn Sinh Sắc sống gần dân, bốc thuốc chữa bệnh và qua đời tại Cao Lãnh năm 1929.",
          "Khu lăng mộ cụ ngày nay là điểm đến tưởng niệm trang nghiêm, gắn với tình cảm của nhân dân dành cho thân phụ Bác Hồ."
        ]
      },
      {
        title: "Vùng đất Tiền Giang anh hùng",
        body: [
          "Phần đất Tiền Giang (cũ) gắn với chiến thắng Rạch Gầm – Xoài Mút (1785) của Nguyễn Huệ đánh tan quân Xiêm, và chiến thắng Ấp Bắc (1963) mở đầu cho sự phá sản chiến thuật 'trực thăng vận' của Mỹ."
        ]
      }
    ],
    influence: [
      "Sen Đồng Tháp và đàn sếu đầu đỏ quý hiếm ở Vườn quốc gia Tràm Chim là biểu tượng sinh thái đặc trưng của tỉnh.",
      "Phần đất Tiền Giang (cũ) nổi tiếng với chợ nổi Cái Bè, cù lao Thới Sơn và những miệt vườn trái cây trù phú ven sông Tiền."
    ]
  },

  "Vĩnh Long": {
    slug: "vinh-long",
    tagline: "Đất học miền Tây, quê hương nhiều nhà lãnh đạo",
    images: [
      { src: "../img/provinces/vinh-long/1.jpg", caption: "Văn Thánh Miếu Vĩnh Long" },
      { src: "../img/provinces/vinh-long/2.jpg", caption: "Khu lưu niệm Phạm Hùng" },
      { src: "../img/provinces/vinh-long/3.jpg", caption: "Cù lao An Bình" }
    ],
    overview: [
      "Vĩnh Long là tỉnh trung tâm đồng bằng sông Cửu Long, nằm giữa sông Tiền và sông Hậu, nổi tiếng là 'đất học' và quê hương của nhiều nhà lãnh đạo đất nước.",
      "Tỉnh được hợp nhất từ Bến Tre, Trà Vinh và Vĩnh Long, là vùng đất cù lao trù phú và đậm đà bản sắc văn hóa Kinh – Khmer."
    ],
    sections: [
      {
        title: "Vùng đất khẩn hoang",
        body: [
          "Năm 1732, châu Định Viễn được lập dưới thời chúa Nguyễn, mở mang vùng đất trù phú giữa hai dòng sông lớn của miền Tây.",
          "Vĩnh Long sớm trở thành một trung tâm hành chính và văn hóa quan trọng của Nam Bộ."
        ]
      },
      {
        title: "Truyền thống hiếu học và yêu nước",
        body: [
          "Vĩnh Long có Văn Thánh Miếu – một trong những văn miếu tiêu biểu ở Nam Bộ. Đây là quê hương của Phan Thanh Giản, vị tiến sĩ đầu tiên của đất Nam Kỳ, người đã tuẫn tiết năm 1867 khi không giữ được ba tỉnh miền Tây.",
          "Vùng đất cũng là quê hương của các nhà lãnh đạo Phạm Hùng và Võ Văn Kiệt."
        ]
      },
      {
        title: "Đất dừa Bến Tre – Đồng Khởi",
        body: [
          "Phần đất Bến Tre (cũ) là nơi bùng nổ phong trào Đồng Khởi năm 1960, mở đầu cho cao trào giải phóng miền Nam, gắn với tên tuổi nữ tướng Nguyễn Thị Định và 'Đội quân tóc dài'."
        ]
      },
      {
        title: "Văn hóa Khmer Trà Vinh",
        body: [
          "Phần đất Trà Vinh (cũ) là nơi sinh sống đông đảo của đồng bào Khmer, với hệ thống chùa Khmer cổ kính, lễ hội Ok Om Bok và nghệ thuật đua ghe ngo đặc sắc."
        ]
      }
    ],
    influence: [
      "Vĩnh Long nổi tiếng với những cù lao xanh mát và mô hình du lịch sông nước miệt vườn, homestay đậm chất Nam Bộ.",
      "Sự giao thoa văn hóa Kinh – Khmer, truyền thống hiếu học cùng 'xứ dừa' Bến Tre làm nên bản sắc phong phú của vùng đất này."
    ]
  },

  "Cần Thơ": {
    slug: "can-tho",
    tagline: "Tây Đô – thủ phủ miền Tây sông nước",
    images: [
      { src: "../img/provinces/can-tho/1.jpg", caption: "Bến Ninh Kiều" },
      { src: "../img/provinces/can-tho/2.jpg", caption: "Chợ nổi Cái Răng" },
      { src: "../img/provinces/can-tho/3.jpg", caption: "Đình Bình Thủy" }
    ],
    overview: [
      "Cần Thơ là thành phố trung tâm của đồng bằng sông Cửu Long, được mệnh danh là 'Tây Đô' – thủ phủ của cả miền Tây.",
      "Thành phố nổi tiếng với chợ nổi Cái Răng, bến Ninh Kiều và là đầu mối kinh tế, giáo dục của vùng. Thành phố được hợp nhất từ Cần Thơ, Sóc Trăng và Hậu Giang."
    ],
    sections: [
      {
        title: "Khai mở Trấn Giang",
        body: [
          "Năm 1739, vùng đất Trấn Giang (Cần Thơ) được khai mở, dần phát triển thành trung tâm trù phú bên bờ sông Hậu.",
          "Vị trí trung tâm giúp Cần Thơ sớm trở thành đầu mối giao thương của cả vùng miền Tây."
        ]
      },
      {
        title: "'Tây Đô' thời Pháp",
        body: [
          "Đầu thế kỷ 20, Pháp lập tỉnh Cần Thơ và xây dựng đô thị bên sông; nơi đây được mệnh danh là 'Tây Đô' – thủ phủ của miền Tây Nam Bộ.",
          "Bến Ninh Kiều và những công trình kiến trúc Pháp còn lưu giữ dấu ấn của thời kỳ này."
        ]
      },
      {
        title: "Đất văn hóa sông nước",
        body: [
          "Cần Thơ là quê hương của Thủ khoa Bùi Hữu Nghĩa, nhà thơ yêu nước Phan Văn Trị và nhà cách mạng Châu Văn Liêm.",
          "Đình Bình Thủy và các ngôi nhà cổ là minh chứng cho bề dày văn hóa của vùng đất Tây Đô."
        ]
      },
      {
        title: "Vùng đất Khmer Sóc Trăng",
        body: [
          "Phần đất Sóc Trăng (cũ) đậm bản sắc văn hóa Khmer với chùa Dơi, chùa Đất Sét, lễ hội Ok Om Bok và đua ghe ngo nổi tiếng khắp miền Tây."
        ]
      }
    ],
    influence: [
      "Chợ nổi Cái Răng và bến Ninh Kiều là biểu tượng của du lịch sông nước miền Tây, thu hút đông đảo du khách.",
      "Cần Thơ là trung tâm kinh tế, giáo dục, y tế của vùng đồng bằng sông Cửu Long, nơi giao thoa hài hòa văn hóa Kinh – Hoa – Khmer."
    ]
  },

  "An Giang": {
    slug: "an-giang",
    tagline: "Đất Bảy Núi linh thiêng, văn hóa Óc Eo và quê Bác Tôn",
    images: [
      { src: "../img/provinces/an-giang/1.jpg", caption: "Miếu Bà Chúa Xứ núi Sam" },
      { src: "../img/provinces/an-giang/2.jpg", caption: "Khu di tích Óc Eo – Ba Thê" },
      { src: "../img/provinces/an-giang/3.jpg", caption: "Khu lưu niệm Chủ tịch Tôn Đức Thắng" }
    ],
    overview: [
      "An Giang là tỉnh biên giới Tây Nam giáp Campuchia, nằm ở đầu nguồn sông Hậu, có vùng Bảy Núi (Thất Sơn) linh thiêng và huyền bí.",
      "Đây là cái nôi của văn hóa Óc Eo và là quê hương Chủ tịch Tôn Đức Thắng. Tỉnh được hợp nhất từ Kiên Giang và An Giang."
    ],
    sections: [
      {
        title: "Văn hóa Óc Eo",
        body: [
          "Óc Eo – Ba Thê (thế kỷ I–VII) là đô thị và thương cảng sầm uất của vương quốc Phù Nam, từng giao thương với cả Ấn Độ, La Mã.",
          "Đây là một trong những di chỉ khảo cổ quan trọng bậc nhất Nam Bộ, hé lộ một nền văn minh cổ rực rỡ đã mai một."
        ]
      },
      {
        title: "Khai mở và kênh Vĩnh Tế",
        body: [
          "Từ 1818–1824, Thoại Ngọc Hầu Nguyễn Văn Thoại chỉ huy đào kênh Vĩnh Tế nối Châu Đốc – Hà Tiên dài gần 100km, một công trình thủy lợi và quốc phòng to lớn của thời Nguyễn.",
          "Kênh vừa phục vụ giao thông, tưới tiêu, vừa khẳng định chủ quyền vùng biên giới Tây Nam."
        ]
      },
      {
        title: "Quê Chủ tịch Tôn Đức Thắng",
        body: [
          "Ngày 20/8/1888, Bác Tôn (Tôn Đức Thắng) sinh tại Cù lao Ông Hổ, Long Xuyên. Ông là Chủ tịch nước thứ hai của Việt Nam, người chiến sĩ cách mạng kiên trung suốt đời vì dân, vì nước."
        ]
      },
      {
        title: "Vùng đất Kiên Giang – Hà Tiên",
        body: [
          "Phần đất Kiên Giang (cũ) có đảo ngọc Phú Quốc, thương cảng cổ Hà Tiên do Mạc Cửu khai mở, và di tích Nhà tù Phú Quốc – chứng tích về sự tàn khốc của chiến tranh và ý chí của người tù cách mạng."
        ]
      }
    ],
    influence: [
      "Lễ hội Vía Bà Chúa Xứ núi Sam là một trong những lễ hội tâm linh lớn nhất Nam Bộ, được ghi danh là Di sản Văn hóa Phi vật thể đại diện của nhân loại (2024).",
      "An Giang và vùng đất Kiên Giang (cũ) là vựa lúa và thủy sản lớn của cả nước, đồng thời sở hữu đảo Phú Quốc – trung tâm du lịch biển nổi tiếng quốc tế."
    ]
  },

  "Cà Mau": {
    slug: "ca-mau",
    tagline: "Vùng đất cực Nam Tổ quốc – 'Đất Mũi' thiêng liêng",
    images: [
      { src: "../img/provinces/ca-mau/1.jpg", caption: "Mũi Cà Mau (Đất Mũi)" },
      { src: "../img/provinces/ca-mau/2.jpg", caption: "Rừng U Minh Hạ" },
      { src: "../img/provinces/ca-mau/3.jpg", caption: "Bến Vàm Lũng" }
    ],
    overview: [
      "Cà Mau là vùng đất cực Nam thiêng liêng của Tổ quốc, nơi có Mũi Cà Mau và những cánh rừng đước, rừng tràm ngập mặn rộng lớn.",
      "Đây từng là căn cứ kháng chiến vững chắc của miền Tây Nam Bộ. Tỉnh được hợp nhất từ Bạc Liêu và Cà Mau."
    ],
    sections: [
      {
        title: "Khai mở vùng đất cực Nam",
        body: [
          "Từ thế kỷ 17–18, lưu dân người Việt cùng người Hoa, Khmer khai phá vùng đất 'Đất biết nở, rừng biết đi, biển sinh sôi' nơi cuối trời Tổ quốc.",
          "Vùng đất bồi liên tục lấn ra biển ở Mũi Cà Mau là một hiện tượng địa lý độc đáo."
        ]
      },
      {
        title: "Khởi nghĩa Hòn Khoai và căn cứ U Minh",
        body: [
          "Năm 1940, thầy giáo Phan Ngọc Hiển lãnh đạo khởi nghĩa Hòn Khoai chống Pháp – một trong những cuộc nổi dậy tiêu biểu của Khởi nghĩa Nam Kỳ.",
          "Rừng U Minh trở thành căn cứ địa cách mạng vững chắc trong cả hai cuộc kháng chiến chống Pháp và chống Mỹ."
        ]
      },
      {
        title: "Đường Hồ Chí Minh trên biển",
        body: [
          "Bến Vàm Lũng là một trong những điểm tiếp nhận các chuyến 'tàu không số' chở vũ khí từ miền Bắc chi viện cho chiến trường miền Nam theo Đường Hồ Chí Minh trên biển huyền thoại."
        ]
      },
      {
        title: "Cái nôi đờn ca tài tử",
        body: [
          "Phần đất Bạc Liêu (cũ) là quê hương của nhạc sĩ Cao Văn Lầu với bản 'Dạ cổ hoài lang' bất hủ – tiền thân của vọng cổ, cái nôi của nghệ thuật đờn ca tài tử Nam Bộ."
        ]
      }
    ],
    influence: [
      "Mũi Cà Mau là điểm cực Nam thiêng liêng với mốc tọa độ quốc gia và Khu dự trữ sinh quyển thế giới rừng ngập mặn được UNESCO công nhận.",
      "Đờn ca tài tử Nam Bộ (Di sản Văn hóa Phi vật thể của nhân loại, 2013), giai thoại Công tử Bạc Liêu cùng sản vật tôm – cua nổi tiếng làm nên bản sắc của vùng đất cuối trời."
    ]
  }
});
