'use client';

import React from 'react';
import { TemplateId, ClientConfig } from '@/config/clients';
import SimpleLinksTemplate from './simple-links/page';
import LandingPageTemplate from './landing-page/page';

interface TemplateRegistryProps {
  client: ClientConfig;
}

export default function TemplateRegistry({ client }: TemplateRegistryProps) {
  const templates: Record<TemplateId, React.ComponentType<{ client: ClientConfig }>> = {
    'simple-links': SimpleLinksTemplate,
    'landing-page': LandingPageTemplate,
    'video-landing': () => <div>Video Landing Template - Em desenvolvimento</div>,
    'restaurant-menu': () => <div>Restaurant Menu Template - Em desenvolvimento</div>,
  };

  const Template = templates[client.templateId];

  if (!Template) {
    throw new Error(`Template "${client.templateId}" não encontrado`);
  }

  return <Template client={client} />;
}

