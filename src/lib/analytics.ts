export interface ClickEvent {
  linkId: string;
  linkTitle: string;
  url: string;
  timestamp: number;
  type: 'link' | 'subLink' | 'product' | 'map' | 'external';
}

const ANALYTICS_STORAGE_KEY = 'site-analytics';
const MAX_EVENTS = 1000;

export const trackClick = (event: ClickEvent): void => {
  if (typeof window === 'undefined') return;

  try {
    const stored = localStorage.getItem(ANALYTICS_STORAGE_KEY);
    const events: ClickEvent[] = stored ? JSON.parse(stored) : [];
    
    events.push(event);
    
    const trimmedEvents = events.slice(-MAX_EVENTS);
    
    localStorage.setItem(ANALYTICS_STORAGE_KEY, JSON.stringify(trimmedEvents));
  } catch (error) {
    console.error('Failed to track click:', error);
  }
};

export const trackLinkClick = (
  linkId: string,
  linkTitle: string,
  url: string
): void => {
  trackClick({
    linkId,
    linkTitle,
    url,
    timestamp: Date.now(),
    type: 'link',
  });
};

export const trackSubLinkClick = (
  linkId: string,
  linkTitle: string,
  url: string
): void => {
  trackClick({
    linkId,
    linkTitle,
    url,
    timestamp: Date.now(),
    type: 'subLink',
  });
};

export const trackProductClick = (
  productId: string,
  productTitle: string,
  url: string
): void => {
  trackClick({
    linkId: productId,
    linkTitle: productTitle,
    url,
    timestamp: Date.now(),
    type: 'product',
  });
};

export const trackMapClick = (): void => {
  trackClick({
    linkId: 'map-route',
    linkTitle: 'Traçar Rota',
    url: 'https://maps.google.com',
    timestamp: Date.now(),
    type: 'map',
  });
};

export const getClickStats = (): {
  totalClicks: number;
  clicksByType: Record<string, number>;
  topLinks: Array<{ title: string; clicks: number }>;
} => {
  if (typeof window === 'undefined') {
    return { totalClicks: 0, clicksByType: {}, topLinks: [] };
  }

  try {
    const stored = localStorage.getItem(ANALYTICS_STORAGE_KEY);
    const events: ClickEvent[] = stored ? JSON.parse(stored) : [];

    const clicksByType: Record<string, number> = {};
    const linkClicks: Record<string, number> = {};

    events.forEach((event) => {
      clicksByType[event.type] = (clicksByType[event.type] || 0) + 1;
      linkClicks[event.linkTitle] = (linkClicks[event.linkTitle] || 0) + 1;
    });

    const topLinks = Object.entries(linkClicks)
      .map(([title, clicks]) => ({ title, clicks }))
      .sort((a, b) => b.clicks - a.clicks)
      .slice(0, 10);

    return {
      totalClicks: events.length,
      clicksByType,
      topLinks,
    };
  } catch (error) {
    console.error('Failed to get click stats:', error);
    return { totalClicks: 0, clicksByType: {}, topLinks: [] };
  }
};

export const clearAnalytics = (): void => {
  if (typeof window === 'undefined') return;
  localStorage.removeItem(ANALYTICS_STORAGE_KEY);
};

