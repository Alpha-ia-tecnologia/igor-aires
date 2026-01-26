import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { CLIENTS } from '@/config/clients';
import TemplateRegistry from '@/modules/templates/registry';

interface PageProps {
  params: Promise<{ site: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { site } = await params;
  const client = CLIENTS[site];
  
  if (!client) {
    return {
      title: 'Página não encontrada',
    };
  }

  // Construir URL completa para ogImage se for relativa
  const ogImage = client.seo?.ogImage 
    ? client.seo.ogImage.startsWith('http') 
      ? client.seo.ogImage 
      : client.customDomain
        ? `https://${client.customDomain}${client.seo.ogImage}`
        : `${process.env.NEXT_PUBLIC_SITE_URL || 'https://neolinks.vercel.app'}${client.seo.ogImage}`
    : undefined;
  
  return {
    title: client.seo?.title || `${client.slug} - LinkTree`,
    description: client.seo?.description || 'Página de links profissionais',
    openGraph: {
      title: client.seo?.title || `${client.slug} - LinkTree`,
      description: client.seo?.description,
      images: ogImage ? [ogImage] : [],
      type: 'website',
      url: client.customDomain ? `https://${client.customDomain}` : undefined,
    },
    twitter: {
      card: 'summary_large_image',
      title: client.seo?.title || `${client.slug} - LinkTree`,
      description: client.seo?.description,
      images: ogImage ? [ogImage] : [],
    },
  };
}

export default async function SitePage({ params }: PageProps) {
  const { site } = await params;
  const client = CLIENTS[site];
  
  if (!client) {
    notFound();
  }
  
  return <TemplateRegistry client={client} />;
}

