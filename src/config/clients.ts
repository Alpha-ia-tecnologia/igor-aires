import type { ProfileData, LinkItemData, ProductItem } from '@/lib/types';

export type TemplateId = 'simple-links' | 'landing-page' | 'video-landing' | 'restaurant-menu';

export interface FooterConfig {
  enabled: boolean;
  copyrightText?: string;
  developerCredit?: {
    enabled: boolean;
    whatsappUrl?: string;
    companyName?: string;
  };
}

export interface ClientConfig {
  slug: string;
  customDomain?: string;
  templateId: TemplateId;
  content: {
    profile?: ProfileData;
    links?: LinkItemData[];
    products?: ProductItem[];
    footer?: FooterConfig;
    [key: string]: any;
  };
  seo?: {
    title?: string;
    description?: string;
    ogImage?: string;
  };
}

const igorAiresProfile: ProfileData = {
  name: "Igor Aires",
  role: "Alta Performance e Emagrecimento",
  bio: "Apaixonado por ajudar pessoas a alcançarem seus objetivos de saúde e bem-estar.",
  avatarUrl: "/images/clients/igor-aires-avatar.png",
  location: {
    address: "Av. dos Holandeses, 10 - Calhau",
    city: "São Luís, MA",
    mapUrl: "https://maps.app.goo.gl/7R9LQMiBCmAdzVPn8"
  }
};

// Produtos removidos temporariamente - feature em desenvolvimento
// const igorAiresProducts: ProductItem[] = [];

const igorAiresLinks: LinkItemData[] = [
  {
    id: '1',
    title: "Agendar Consulta",
    subtitle: "Escolha a melhor modalidade para você.",
    url: "#",
    icon: 'Calendar',
    featured: true,
    subLinks: [
      {
        id: '1-a',
        title: "Clínica Nava (Presencial)",
        subtitle: "Atendimento completo com bioimpedância e avaliação física.",
        url: "https://maps.app.goo.gl/7R9LQMiBCmAdzVPn8",
        imageUrl: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=200&h=200"
      },
      {
        id: '1-b',
        title: "Atendimento Online",
        subtitle: "Consultoria via videochamada para todo o mundo.",
        url: "https://api.whatsapp.com/send/?phone=559899074282&text=Ol%C3%A1%2C+gostaria+de+um+atendimento+nutricional+personalizado%21&type=phone_number&app_absent=0",
        imageUrl: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=200&h=200"
      }
    ]
  },
  {
    id: '2',
    title: "Canal de Receitas",
    subtitle: "Aprenda a cozinhar de forma saudável no YouTube.",
    url: "https://www.youtube.com/@igoraires5539",
    icon: 'Youtube',
    color: "text-red-500"
  },
  {
    id: '4',
    title: "Monte sua Marmita",
    subtitle: "Cardápio prático e saudável para a semana toda.",
    url: "https://api.whatsapp.com/send/?phone=559899074282&text=Ol%C3%A1%2C+gostaria+de+um+protocolo+de+marmitas+personalizadas%21&type=phone_number&app_absent=0",
    icon: 'Utensils',
  },
  {
    id: '5',
    title: "Clínica Nava",
    subtitle: "Conheça a estrutura do nosso atendimento.",
    url: "https://www.instagram.com/navaclinica/",
    icon: 'Building2',
  },
  {
    id: '6',
    title: "Instagram",
    subtitle: "Dicas diárias e resultados de pacientes.",
    url: "https://www.instagram.com/igorairesnutricionista/",
    icon: 'Instagram',
    color: "text-pink-500"
  },
  {
    id: '7',
    title: "TikTok",
    subtitle: "Conteúdos rápidos sobre nutrição.",
    url: "https://www.tiktok.com/@igorairesnutricionista",
    icon: 'TikTok',
  },
];

/**
 * ========================================
 * CONFIGURAÇÃO DE CLIENTES
 * ========================================
 * 
 * Para adicionar um novo cliente:
 * 1. Crie os dados (profile, links, products) acima
 * 2. Adicione uma nova entrada no objeto CLIENTS abaixo
 * 3. Defina um slug único (ex: 'nome-cliente')
 * 4. Escolha um template: 'simple-links', 'video-landing', ou 'restaurant-menu'
 * 5. (Opcional) Configure customDomain para domínio próprio
 * 
 * Exemplo de novo cliente:
 * 
 * const novoClienteProfile: ProfileData = { ... };
 * const novoClienteLinks: LinkItemData[] = [ ... ];
 * 
 * 'novo-cliente': {
 *   slug: 'novo-cliente',
 *   customDomain: 'novocliente.com.br',  // opcional
 *   templateId: 'simple-links',
 *   content: {
 *     profile: novoClienteProfile,
 *     links: novoClienteLinks,
 *     products: novoClienteProducts,
 *   },
 *   seo: { ... }
 * }
 */
export const CLIENTS: Record<string, ClientConfig> = {
  'igor-aires': {
    slug: 'igor-aires',
    customDomain: 'igoraires.com.br',
    templateId: 'landing-page',
    content: {
      profile: igorAiresProfile,
      links: igorAiresLinks,
      products: [], // Produtos removidos temporariamente - feature em desenvolvimento
      footer: {
        enabled: true,
        copyrightText: '© 2025 Igor Aires. Todos os Direitos Reservados.',
        developerCredit: {
          enabled: false,
          whatsappUrl: 'https://wa.me/5598988026776?text=Olá!%20Vi%20o%20site%20do%20Igor%20Aires%20desenvolvido%20pela%20Nano%20e%20fiquei%20interessado(a).%20Gostaria%20de%20um%20orçamento.',
          companyName: 'Nano',
        },
      },
    },
    seo: {
      title: "Igor Aires | Nutricionista - Alta Performance e Emagrecimento",
      description: "Apaixonado por ajudar pessoas a alcançarem seus objetivos de saúde e bem-estar. Consultas presenciais e online. São Luís, MA.",
      ogImage: "/images/clients/igor-aires-avatar.png"
    }
  }
};

