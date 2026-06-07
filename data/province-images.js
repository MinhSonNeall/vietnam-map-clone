// province-images.js — Bo anh thuc te cho tung tinh/thanh (phan noi dung ban do).
// Sinh tu dong tu thu muc img/provinces/<slug>/. Nap SAU cac file data vung va TRUOC app.js
// de ghi de truong "images" bang duong dan ASCII chuan (tranh loi link ten tieng Viet).
window.PROVINCE_CONTENT = window.PROVINCE_CONTENT || {};
(function () {
  function slugify(s) {
    return s.normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/đ/g, "d").replace(/Đ/g, "D")
      .toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
  }
  var IMAGES = {
    "dong-thap":  [
                      {
                          "src":  "../img/provinces/dong-thap/1.jpg",
                          "caption":  "Khu di tích Gò Tháp"
                      },
                      {
                          "src":  "../img/provinces/dong-thap/2.jpg",
                          "caption":  "Khu di tích Nguyễn Sinh Sắc"
                      },
                      {
                          "src":  "../img/provinces/dong-thap/3.webp",
                          "caption":  "Vườn quốc gia Tràm Chim"
                      }
                  ],
    "khanh-hoa":  [
                      {
                          "src":  "../img/provinces/khanh-hoa/1.jpg",
                          "caption":  "Quần đảo Trường Sa"
                      },
                      {
                          "src":  "../img/provinces/khanh-hoa/2.jpg",
                          "caption":  "Tháp Bà Po Nagar"
                      },
                      {
                          "src":  "../img/provinces/khanh-hoa/3.jpg",
                          "caption":  "Vịnh Nha Trang"
                      }
                  ],
    "quang-ninh":  [
                       {
                           "src":  "../img/provinces/quang-ninh/1.webp",
                           "caption":  "Bãi cọc Bạch Đằng"
                       },
                       {
                           "src":  "../img/provinces/quang-ninh/2.jpg",
                           "caption":  "Khu di tích Yên Tử"
                       },
                       {
                           "src":  "../img/provinces/quang-ninh/3.png",
                           "caption":  "Vịnh Hạ Long"
                       }
                   ],
    "son-la":  [
                   {
                       "src":  "../img/provinces/son-la/1.jpg",
                       "caption":  "Cao nguyên Mộc Châu"
                   },
                   {
                       "src":  "../img/provinces/son-la/2.jpg",
                       "caption":  "Di tích Nhà tù Sơn La"
                   },
                   {
                       "src":  "../img/provinces/son-la/3.jpg",
                       "caption":  "Thủy điện Sơn La"
                   }
               ],
    "thanh-hoa":  [
                      {
                          "src":  "../img/provinces/thanh-hoa/1.jpg",
                          "caption":  "Đền Bà Triệu"
                      },
                      {
                          "src":  "../img/provinces/thanh-hoa/2.png",
                          "caption":  "Khu di tích Lam Kinh"
                      },
                      {
                          "src":  "../img/provinces/thanh-hoa/3.webp",
                          "caption":  "Thành nhà Hồ"
                      }
                  ],
    "ho-chi-minh":  [
                        {
                            "src":  "../img/provinces/ho-chi-minh/1.webp",
                            "caption":  "Bến Nhà Rồng"
                        },
                        {
                            "src":  "../img/provinces/ho-chi-minh/2.jpg",
                            "caption":  "Dinh Độc Lập"
                        },
                        {
                            "src":  "../img/provinces/ho-chi-minh/3.gif",
                            "caption":  "Nhà thờ Đức Bà"
                        }
                    ],
    "nghe-an":  [
                    {
                        "src":  "../img/provinces/nghe-an/1.jpg",
                        "caption":  "Biển Cửa Lò"
                    },
                    {
                        "src":  "../img/provinces/nghe-an/2.webp",
                        "caption":  "Khu di tích Kim Liên"
                    },
                    {
                        "src":  "../img/provinces/nghe-an/3.jpg",
                        "caption":  "Làng Sen quê Bác"
                    }
                ],
    "hue":  [
                {
                    "src":  "../img/provinces/hue/1.jpg",
                    "caption":  "Chùa Thiên Mụ"
                },
                {
                    "src":  "../img/provinces/hue/2.jpg",
                    "caption":  "Lăng tẩm các vua Nguyễn"
                },
                {
                    "src":  "../img/provinces/hue/3.jpg",
                    "caption":  "Ngọ Môn – Kinh thành Huế"
                }
            ],
    "da-nang":  [
                    {
                        "src":  "../img/provinces/da-nang/1.jpg",
                        "caption":  "Danh thắng Ngũ Hành Sơn"
                    },
                    {
                        "src":  "../img/provinces/da-nang/2.jpg",
                        "caption":  "Phố cổ Hội An"
                    },
                    {
                        "src":  "../img/provinces/da-nang/3.jpg",
                        "caption":  "Sông Hàn – Cầu Rồng"
                    }
                ],
    "an-giang":  [
                     {
                         "src":  "../img/provinces/an-giang/1.jpg",
                         "caption":  "Khu di tích Óc Eo – Ba Thê"
                     },
                     {
                         "src":  "../img/provinces/an-giang/2.jpg",
                         "caption":  "Khu lưu niệm Chủ tịch Tôn Đức Thắng"
                     },
                     {
                         "src":  "../img/provinces/an-giang/3.jpg",
                         "caption":  "Miếu Bà Chúa Xứ núi Sam"
                     }
                 ],
    "hai-phong":  [
                      {
                          "src":  "../img/provinces/hai-phong/1.jpg",
                          "caption":  "Đảo Cát Bà"
                      },
                      {
                          "src":  "../img/provinces/hai-phong/2.webp",
                          "caption":  "Đền Nghè thờ nữ tướng Lê Chân"
                      },
                      {
                          "src":  "../img/provinces/hai-phong/3.jpg",
                          "caption":  "Khu di tích Bạch Đằng Giang"
                      }
                  ],
    "bac-ninh":  [
                     {
                         "src":  "../img/provinces/bac-ninh/1.jpg",
                         "caption":  "Chùa Dâu"
                     },
                     {
                         "src":  "../img/provinces/bac-ninh/2.webp",
                         "caption":  "Đền Đô (Lý Bát Đế)"
                     },
                     {
                         "src":  "../img/provinces/bac-ninh/3.webp",
                         "caption":  "Hát Quan họ"
                     }
                 ],
    "lao-cai":  [
                    {
                        "src":  "../img/provinces/lao-cai/1.png",
                        "caption":  "Cửa khẩu quốc tế Lào Cai"
                    },
                    {
                        "src":  "../img/provinces/lao-cai/2.jpg",
                        "caption":  "Đỉnh Fansipan"
                    },
                    {
                        "src":  "../img/provinces/lao-cai/3.jpg",
                        "caption":  "Ruộng bậc thang Sa Pa"
                    }
                ],
    "phu-tho":  [
                    {
                        "src":  "../img/provinces/phu-tho/1.webp",
                        "caption":  "Đền Hùng"
                    },
                    {
                        "src":  "../img/provinces/phu-tho/2.jpg",
                        "caption":  "Hát Xoan Phú Thọ"
                    },
                    {
                        "src":  "../img/provinces/phu-tho/3.jpg",
                        "caption":  "Lễ hội Giỗ Tổ Hùng Vương"
                    }
                ],
    "dien-bien":  [
                      {
                          "src":  "../img/provinces/dien-bien/1.jpg",
                          "caption":  "Đồi A1"
                      },
                      {
                          "src":  "../img/provinces/dien-bien/2.webp",
                          "caption":  "Hầm De Castries"
                      },
                      {
                          "src":  "../img/provinces/dien-bien/3.jpg",
                          "caption":  "Tượng đài Chiến thắng Điện Biên Phủ"
                      }
                  ],
    "dak-lak":  [
                    {
                        "src":  "../img/provinces/dak-lak/1.webp",
                        "caption":  "Bản Đôn"
                    },
                    {
                        "src":  "../img/provinces/dak-lak/2.jpg",
                        "caption":  "Thác Dray Nur"
                    },
                    {
                        "src":  "../img/provinces/dak-lak/3.jpg",
                        "caption":  "Tượng đài Chiến thắng Buôn Ma Thuột"
                    }
                ],
    "lam-dong":  [
                     {
                         "src":  "../img/provinces/lam-dong/1.webp",
                         "caption":  "Ga Đà Lạt cổ"
                     },
                     {
                         "src":  "../img/provinces/lam-dong/2.webp",
                         "caption":  "Hồ Xuân Hương"
                     },
                     {
                         "src":  "../img/provinces/lam-dong/3.jpg",
                         "caption":  "Thác Pongour"
                     }
                 ],
    "ninh-binh":  [
                      {
                          "src":  "../img/provinces/ninh-binh/1.webp",
                          "caption":  "Chùa Bái Đính"
                      },
                      {
                          "src":  "../img/provinces/ninh-binh/2.webp",
                          "caption":  "Cố đô Hoa Lư"
                      },
                      {
                          "src":  "../img/provinces/ninh-binh/3.jpg",
                          "caption":  "Quần thể Tràng An"
                      }
                  ],
    "tay-ninh":  [
                     {
                         "src":  "../img/provinces/tay-ninh/1.jpg",
                         "caption":  "Căn cứ Trung ương Cục miền Nam"
                     },
                     {
                         "src":  "../img/provinces/tay-ninh/2.webp",
                         "caption":  "Núi Bà Đen"
                     },
                     {
                         "src":  "../img/provinces/tay-ninh/3.jpg",
                         "caption":  "Tòa Thánh Tây Ninh"
                     }
                 ],
    "dong-nai":  [
                     {
                         "src":  "../img/provinces/dong-nai/1.jpg",
                         "caption":  "Chiến khu Đ"
                     },
                     {
                         "src":  "../img/provinces/dong-nai/2.jpg",
                         "caption":  "Đền thờ Nguyễn Hữu Cảnh"
                     },
                     {
                         "src":  "../img/provinces/dong-nai/3.jpg",
                         "caption":  "Văn miếu Trấn Biên"
                     }
                 ],
    "lang-son":  [
                     {
                         "src":  "../img/provinces/lang-son/1.jpg",
                         "caption":  "Ải Chi Lăng"
                     },
                     {
                         "src":  "../img/provinces/lang-son/2.jpg",
                         "caption":  "Động Tam Thanh"
                     },
                     {
                         "src":  "../img/provinces/lang-son/3.jpg",
                         "caption":  "Tượng nàng Tô Thị"
                     }
                 ],
    "vinh-long":  [
                      {
                          "src":  "../img/provinces/vinh-long/1.jpg",
                          "caption":  "Cù lao An Bình"
                      },
                      {
                          "src":  "../img/provinces/vinh-long/2.jpg",
                          "caption":  "Khu lưu niệm Phạm Hùng"
                      },
                      {
                          "src":  "../img/provinces/vinh-long/3.jpg",
                          "caption":  "Văn Thánh Miếu Vĩnh Long"
                      }
                  ],
    "ha-noi":  [
                   {
                       "src":  "../img/provinces/ha-noi/1.webp",
                       "caption":  "Hồ Gươm – Tháp Rùa"
                   },
                   {
                       "src":  "../img/provinces/ha-noi/2.jpg",
                       "caption":  "Hoàng thành Thăng Long"
                   },
                   {
                       "src":  "../img/provinces/ha-noi/3.jpg",
                       "caption":  "Văn Miếu – Quốc Tử Giám"
                   }
               ],
    "can-tho":  [
                    {
                        "src":  "../img/provinces/can-tho/1.webp",
                        "caption":  "Bến Ninh Kiều"
                    },
                    {
                        "src":  "../img/provinces/can-tho/2.webp",
                        "caption":  "Chợ nổi Cái Răng"
                    },
                    {
                        "src":  "../img/provinces/can-tho/3.webp",
                        "caption":  "Đình Bình Thủy"
                    }
                ],
    "gia-lai":  [
                    {
                        "src":  "../img/provinces/gia-lai/1.jpg",
                        "caption":  "Biển Hồ (T_Nưng)"
                    },
                    {
                        "src":  "../img/provinces/gia-lai/2.jpg",
                        "caption":  "Cồng chiêng Tây Nguyên"
                    },
                    {
                        "src":  "../img/provinces/gia-lai/3.jpg",
                        "caption":  "Làng kháng chiến Stơr"
                    }
                ],
    "quang-ngai":  [
                       {
                           "src":  "../img/provinces/quang-ngai/1.jpg",
                           "caption":  "Đảo Lý Sơn"
                       },
                       {
                           "src":  "../img/provinces/quang-ngai/2.jpg",
                           "caption":  "Di tích khởi nghĩa Ba Tơ"
                       },
                       {
                           "src":  "../img/provinces/quang-ngai/3.jpg",
                           "caption":  "Khu chứng tích Sơn Mỹ"
                       }
                   ],
    "ca-mau":  [
                   {
                       "src":  "../img/provinces/ca-mau/1.jpg",
                       "caption":  "Bến Vàm Lũng"
                   },
                   {
                       "src":  "../img/provinces/ca-mau/2.jpg",
                       "caption":  "Mũi Cà Mau (Đất Mũi)"
                   },
                   {
                       "src":  "../img/provinces/ca-mau/3.jpg",
                       "caption":  "Rừng U Minh Hạ"
                   }
               ],
    "quang-tri":  [
                      {
                          "src":  "../img/provinces/quang-tri/1.jpg",
                          "caption":  "Cầu Hiền Lương – sông Bến Hải"
                      },
                      {
                          "src":  "../img/provinces/quang-tri/2.jpg",
                          "caption":  "Địa đạo Vịnh Mốc"
                      },
                      {
                          "src":  "../img/provinces/quang-tri/3.jpg",
                          "caption":  "Thành cổ Quảng Trị"
                      }
                  ],
    "thai-nguyen":  [
                        {
                            "src":  "../img/provinces/thai-nguyen/1.png",
                            "caption":  "ATK Định Hóa"
                        },
                        {
                            "src":  "../img/provinces/thai-nguyen/2.jpg",
                            "caption":  "Đồi chè Tân Cương"
                        },
                        {
                            "src":  "../img/provinces/thai-nguyen/3.png",
                            "caption":  "Hồ Núi Cốc"
                        }
                    ],
    "lai-chau":  [
                     {
                         "src":  "../img/provinces/lai-chau/1.jpg",
                         "caption":  "Bản làng vùng cao Tây Bắc"
                     },
                     {
                         "src":  "../img/provinces/lai-chau/2.jpg",
                         "caption":  "Cao nguyên Sìn Hồ"
                     },
                     {
                         "src":  "../img/provinces/lai-chau/3.jpg",
                         "caption":  "Thượng nguồn sông Đà"
                     }
                 ],
    "cao-bang":  [
                     {
                         "src":  "../img/provinces/cao-bang/1.jpg",
                         "caption":  "Hang Pác Bó"
                     },
                     {
                         "src":  "../img/provinces/cao-bang/2.jpg",
                         "caption":  "Suối Lê-nin"
                     },
                     {
                         "src":  "../img/provinces/cao-bang/3.jpg",
                         "caption":  "Thác Bản Giốc"
                     }
                 ],
    "hung-yen":  [
                     {
                         "src":  "../img/provinces/hung-yen/1.jpg",
                         "caption":  "Đền Chử Đồng Tử"
                     },
                     {
                         "src":  "../img/provinces/hung-yen/2.jpg",
                         "caption":  "Phố Hiến"
                     },
                     {
                         "src":  "../img/provinces/hung-yen/3.webp",
                         "caption":  "Văn miếu Xích Đằng"
                     }
                 ],
    "tuyen-quang":  [
                        {
                            "src":  "../img/provinces/tuyen-quang/1.jpg",
                            "caption":  "Cao nguyên đá Đồng Văn"
                        },
                        {
                            "src":  "../img/provinces/tuyen-quang/2.jpg",
                            "caption":  "Cây đa Tân Trào"
                        },
                        {
                            "src":  "../img/provinces/tuyen-quang/3.webp",
                            "caption":  "Lán Nà Nưa"
                        }
                    ],
    "ha-tinh":  [
                    {
                        "src":  "../img/provinces/ha-tinh/1.webp",
                        "caption":  "Biển Thiên Cầm"
                    },
                    {
                        "src":  "../img/provinces/ha-tinh/2.jpg",
                        "caption":  "Khu lưu niệm Nguyễn Du"
                    },
                    {
                        "src":  "../img/provinces/ha-tinh/3.jpg",
                        "caption":  "Ngã ba Đồng Lộc"
                    }
                ]
};
  Object.keys(window.PROVINCE_CONTENT).forEach(function (name) {
    var key = slugify(name);
    var imgs = IMAGES[key] || IMAGES[key.replace(/^tp-/, "")];
    if (imgs && imgs.length) window.PROVINCE_CONTENT[name].images = imgs;
  });
})();