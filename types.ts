export interface MenuItem {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  unit: string; // e.g., "set", "người", "đĩa"
  images: string[]; // Array of images for carousel
  description?: string;
  conditions?: string[]; // List of usage conditions
  isBestSeller?: boolean;
  items?: string[]; // For combos: list of included items
  isRecommended?: boolean; // For homepage featured items
  categoryId?: string; // For filtering if needed
}

export interface SubCategory {
  id: string;
  name: string;
  items: MenuItem[];
}

export interface MainCategory {
  id: string;
  label: string;
  subCategories: SubCategory[];
}

export interface MenuData {
  combos: MainCategory;
  alacarte: MainCategory;
}

export interface NewsItem {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  date: string;
}
