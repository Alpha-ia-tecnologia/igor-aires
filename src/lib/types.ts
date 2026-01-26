export interface SubLinkItem {
  id: string;
  title: string;
  url: string;
  subtitle?: string;
  imageUrl?: string;
  icon?: string; // Nome do ícone como string
}

export interface LinkItemData {
  id: string;
  title: string;
  subtitle: string;
  url: string;
  icon: string; // Nome do ícone como string (ex: 'Calendar', 'Youtube', 'Instagram')
  featured?: boolean;
  color?: string;
  subLinks?: SubLinkItem[];
}

export interface ProductItem {
  id: string;
  title: string;
  description: string;
  price: string;
  coverUrl: string;
  url: string;
  tag?: string;
}

export interface ProfileData {
  name: string;
  role: string;
  bio: string;
  avatarUrl: string;
  location: {
    address: string;
    city: string;
    mapUrl: string;
  };
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string; // Nome do ícone como string
}

