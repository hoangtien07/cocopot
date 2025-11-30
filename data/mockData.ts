import { MenuData, NewsItem, MenuItem } from "../types";

export const menuData: MenuData = {
  combos: {
    id: "combo-lau",
    label: "COMBO LẨU",
    subCategories: [
      {
        id: "couple",
        name: "Combo Cặp Đôi (2 Người)",
        items: [
          {
            id: "c2",
            name: "Combo Uyên Ương",
            price: 398000,
            originalPrice: 720000,
            unit: "set",
            isBestSeller: true,
            isRecommended: true,
            description:
              "Set lẩu hoàn hảo cho buổi hẹn hò lãng mạn với hương vị lẩu dừa thanh ngọt và các loại thịt bò thượng hạng.",
            items: [
              "Lẩu Bỗng Ngọc",
              "Bắp bò hoa, Thanh cua",
              "Ba chỉ bò, Trứng cút",
              "Thịt bò Cocopot",
            ],
            conditions: [
              "Áp dụng toàn bộ khung giờ mở cửa",
              "Giá chưa bao gồm VAT",
              "Tặng kèm 2 ly nước ngọt khi đặt bàn trước",
            ],
            images: [
              "https://github.com/hoangtien07/cocopot/blob/main/src/combo-1.jpg?raw=true", // Banner Hotpot
              "https://images.unsplash.com/photo-1615937657715-bc7b4b7962c1?q=80&w=800&auto=format&fit=crop", // Sliced Beef
              "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=800&auto=format&fit=crop", // Fresh Veggies
            ],
          },
          {
            id: "c1",
            name: "Combo Tiết Kiệm",
            price: 249000,
            originalPrice: 479000,
            unit: "người",
            description:
              "Lựa chọn kinh tế cho bữa trưa văn phòng nhanh gọn nhưng vẫn đầy đủ dinh dưỡng.",
            items: ["Lẩu dừa tươi", "Ba chỉ bò Mỹ", "Rau tổng hợp"],
            conditions: ["Chỉ áp dụng từ 10:00 - 14:00 (Thứ 2 - Thứ 6)"],
            images: [
              "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?q=80&w=800&auto=format&fit=crop", // Asian soup
              "https://images.unsplash.com/photo-1547592166-23ac45744acd?q=80&w=800&auto=format&fit=crop", // Soup bowl
            ],
          },
        ],
      },
      {
        id: "family",
        name: "Combo Gia Đình (4-6 Người)",
        items: [
          {
            id: "c4",
            name: "Combo Sum Vầy",
            price: 1450000,
            originalPrice: 1687000,
            unit: "set",
            isBestSeller: true,
            isRecommended: true,
            description:
              "Bữa tiệc thịnh soạn cho cả gia đình với Lẩu Song Hỷ Uyên Ương bản to và các loại hải sản tươi sống.",
            items: [
              "Lẩu song hỷ uyên ương bản to",
              "Gà ta nửa con",
              "Tôm ngọc xiên que",
              "Bò vân tuyết",
              "Thịt heo Iberico",
            ],
            conditions: [
              "Tặng kèm tráng miệng chè khúc bạch",
              "Áp dụng tất cả các ngày trong tuần",
            ],
            images: [
              "https://images.unsplash.com/photo-1589302168068-964664d93dc0?q=80&w=800&auto=format&fit=crop", // Feast table
              "https://images.unsplash.com/photo-1595295333158-4742f28fbd85?q=80&w=800&auto=format&fit=crop", // Food spread
              "https://images.unsplash.com/photo-1623962470693-157f18579d08?q=80&w=800&auto=format&fit=crop", // Seafood detail
            ],
          },
          {
            id: "c23",
            name: "Combo 2-3 Người",
            price: 966000,
            originalPrice: 1066000,
            unit: "set",
            description: "Phù hợp cho nhóm bạn nhỏ hoặc gia đình ít người.",
            items: [
              "Lẩu thượng vị dừa non",
              "Gà mía nửa con",
              "Tôm ngọc bích",
              "Bò vân tuyết",
            ],
            conditions: [],
            images: [
              "https://github.com/hoangtien07/cocopot/blob/main/src/combo-2.jpg?raw=true", // Friends eating
            ],
          },
        ],
      },
    ],
  },
  alacarte: {
    id: "goi-mon",
    label: "GỌI MÓN",
    subCategories: [
      {
        id: "beef",
        name: "Thịt Bò Thượng Hạng",
        items: [
          {
            id: "m2",
            name: "Thịt Bò Cocopot",
            price: 170000,
            unit: "đĩa",
            items: [],
            description: "Thịt bò đặc trưng của nhà hàng, mềm ngọt.",
            conditions: [],
            isBestSeller: true,
            images: [
              "https://images.unsplash.com/photo-1606728035253-49e8a23146de?q=80&w=800&auto=format&fit=crop",
            ],
          }, // Thin sliced meat
          {
            id: "m3",
            name: "Ba Chỉ Bò Angus",
            price: 180000,
            unit: "đĩa",
            items: [],
            description: "Nhập khẩu từ Mỹ, vân mỡ đều đẹp.",
            conditions: [],
            images: [
              "https://images.unsplash.com/photo-1588168333986-5078d3ae3976?q=80&w=800&auto=format&fit=crop",
            ],
          }, // Raw meat
          {
            id: "m4",
            name: "Bắp Bò Hoa",
            price: 150000,
            unit: "đĩa",
            items: [],
            description: "Giòn sần sật, nhúng lẩu cực ngon.",
            conditions: [],
            images: [
              "https://images.unsplash.com/photo-1615937691194-97dbd3f3dc29?q=80&w=800&auto=format&fit=crop",
            ],
          }, // Beef rolls
          {
            id: "m5",
            name: "Sườn Heo Thơm Ngon",
            price: 140000,
            unit: "đĩa",
            items: [],
            description: "Sườn heo non mềm, ngọt thịt.",
            conditions: [],
            images: [
              "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?q=80&w=800&auto=format&fit=crop",
            ],
          }, // Pork ribs
        ],
      },
      {
        id: "seafood",
        name: "Hải Sản & Viên",
        items: [
          {
            id: "s1",
            name: "Tôm Ngọc Bích",
            price: 170000,
            unit: "phần",
            items: [],
            description: "Tôm tươi xay nhuyễn, dai ngon.",
            conditions: [],
            images: [
              "https://images.unsplash.com/photo-1623962470693-157f18579d08?q=80&w=800&auto=format&fit=crop",
            ],
          }, // Shrimp
          {
            id: "s3",
            name: "Đậu Hũ Phô Mai",
            price: 70000,
            unit: "phần",
            items: [],
            description: "Món best seller, béo ngậy phô mai tan chảy.",
            conditions: [],
            isBestSeller: true,
            images: [
              "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=800&auto=format&fit=crop",
            ],
          }, // Tofu/Salad
          {
            id: "s2",
            name: "Mực Biển Tươi",
            price: 120000,
            unit: "phần",
            items: [],
            description: "Mực ống tươi rói, giòn ngọt.",
            conditions: [],
            images: [
              "https://images.unsplash.com/photo-1599084993091-1e832fda2d43?q=80&w=800&auto=format&fit=crop",
            ],
          }, // Squid/Seafood
        ],
      },
      {
        id: "veg",
        name: "Rau & Nấm",
        items: [
          {
            id: "v1",
            name: "Rau Thập Cẩm",
            price: 70000,
            unit: "mẹt",
            items: [],
            description: "Tổng hợp các loại rau theo mùa.",
            conditions: [],
            images: [
              "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?q=80&w=800&auto=format&fit=crop",
            ],
          }, // Green Salad
          {
            id: "v3",
            name: "Rau Tiến Vua",
            price: 39000,
            unit: "đĩa",
            items: [],
            description: "Rau tiến vua giòn sần sật.",
            conditions: [],
            images: [
              "https://images.unsplash.com/photo-1596560548464-f010549b8416?q=80&w=800&auto=format&fit=crop",
            ],
          }, // Green veg
        ],
      },
      {
        id: "drinks",
        name: "Nước Uống & Tráng Miệng",
        items: [
          {
            id: "a1",
            name: "Dừa Xiêm Thái",
            price: 50000,
            unit: "trái",
            items: [],
            description: "Nước dừa ngọt lịm, mát lạnh.",
            conditions: [],
            isBestSeller: true,
            images: [
              "https://images.unsplash.com/photo-1547823528-7698dd315f62?q=80&w=800&auto=format&fit=crop",
            ],
          }, // Coconut
          {
            id: "a2",
            name: "Khoai Tây Chiên",
            price: 49000,
            unit: "đĩa",
            items: [],
            description: "Ăn chơi lai rai.",
            conditions: [],
            images: [
              "https://images.unsplash.com/photo-1573080496987-a199f8cd4054?q=80&w=800&auto=format&fit=crop",
            ],
          }, // Fries
        ],
      },
    ],
  },
};

export const news: NewsItem[] = [
  {
    id: "1",
    title: "Bí Quyết Thưởng Thức Lẩu Dừa",
    excerpt:
      "3 bước đơn giản để tận hưởng trọn vẹn hương vị tinh khiết từ thiên nhiên.",
    image:
      "https://github.com/hoangtien07/cocopot/blob/main/src/news-bi-quyet.jpg?raw=true", // Hotpot broth
    date: "2023-11-10",
  },
  {
    id: "2",
    title: "Khuyến Mãi Combo Gia Đình",
    excerpt: "Giảm ngay 15% cho Combo 4 người vào các ngày cuối tuần.",
    image:
      "https://images.unsplash.com/photo-1555126634-323283e090fa?q=80&w=800&auto=format&fit=crop", // Group eating
    date: "2023-11-12",
  },
  {
    id: "3",
    title: "Ra Mắt Món Mới: Gà Mía",
    excerpt:
      "Hương vị ngọt ngào từ gà mía tươi ngon, kết hợp hoàn hảo với nước lẩu dừa.",
    image:
      "https://images.unsplash.com/photo-1606728035253-49e8a23146de?q=80&w=800&auto=format&fit=crop", // Chicken/Meat
    date: "2023-11-15",
  },
];

// Helper to flatten combos for homepage features
export const featuredCombos: MenuItem[] = [
  ...menuData.combos.subCategories
    .flatMap((sub) => sub.items)
    .filter((item) => item.isRecommended),
];
