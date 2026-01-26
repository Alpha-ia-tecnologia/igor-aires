import { LucideIcon } from 'lucide-react';
import React from 'react';

export interface SubLinkItem {
  id: string;
  title: string;
  url: string;
  subtitle?: string; // Added for more detail in dropdown
  imageUrl?: string; // Added for image placeholder
  icon?: LucideIcon | React.FC<any>;
}

export interface LinkItemData {
  id: string;
  title: string;
  subtitle: string;
  url: string; // If subLinks exist, this can be empty or ignored
  icon: LucideIcon | React.FC<any>;
  featured?: boolean;
  color?: string; // Optional custom accent color
  subLinks?: SubLinkItem[]; // New property for dropdowns
}

export interface ProductItem {
  id: string;
  title: string;
  description: string;
  price: string;
  coverUrl: string;
  url: string;
  tag?: string; // Ex: "Lançamento", "Oferta", "E-book"
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
  icon: LucideIcon | React.FC<any>;
}