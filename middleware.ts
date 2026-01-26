import { NextRequest, NextResponse } from 'next/server';
import { CLIENTS } from '@/config/clients';

export function middleware(request: NextRequest) {
  const { pathname, hostname } = request.nextUrl;
  
  // 1. Ignorar rotas estáticas e API
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.startsWith('/favicon') ||
    pathname.startsWith('/manifest.json') ||
    pathname.startsWith('/sw.js')
  ) {
    return NextResponse.next();
  }
  
  // 2. Normalizar hostname (remover www. para comparação)
  const normalizedHostname = hostname.startsWith('www.') 
    ? hostname.slice(4) 
    : hostname;
  
  // 3. Verificar custom domain PRIMEIRO (antes de qualquer outra lógica)
  const clientByDomain = Object.values(CLIENTS).find(
    client => {
      if (!client.customDomain) return false;
      const clientDomain = client.customDomain.startsWith('www.') 
        ? client.customDomain.slice(4) 
        : client.customDomain;
      return clientDomain === normalizedHostname;
    }
  );
  
  if (clientByDomain) {
    // CORREÇÃO: Se alguém acessar o custom domain com o slug na URL,
    // redirecionar para remover o slug e manter o domínio limpo
    if (pathname === `/${clientByDomain.slug}` || pathname.startsWith(`/${clientByDomain.slug}/`)) {
      const url = request.nextUrl.clone();
      // Remove o slug da URL, mantendo apenas o path que sobrar
      const cleanPath = pathname === `/${clientByDomain.slug}` 
        ? '/' 
        : pathname.replace(`/${clientByDomain.slug}`, '') || '/';
      url.pathname = cleanPath;
      return NextResponse.redirect(url, 301); // Redirect permanente para limpar a URL
    }
    
    // Rewrite para rota interna com slug do cliente
    // Isso mantém a URL externa limpa (sem mostrar o slug)
    const url = request.nextUrl.clone();
    url.pathname = pathname === '/' 
      ? `/${clientByDomain.slug}` 
      : `/${clientByDomain.slug}${pathname}`;
    return NextResponse.rewrite(url); // Rewrite mantém a URL original na barra
  }
  
  // 4. Desenvolvimento local - permitir acesso direto
  if (hostname === 'localhost' || hostname === '127.0.0.1') {
    // Se já está no formato /[site], deixar passar
    const segments = pathname.split('/').filter(Boolean);
    if (segments.length >= 1 && CLIENTS[segments[0]]) {
      return NextResponse.next();
    }
    // Se for root ou path vazio, redirecionar para primeiro cliente ou home
    if (pathname === '/' || pathname === '') {
      const firstClient = Object.keys(CLIENTS)[0];
      if (firstClient) {
        return NextResponse.redirect(new URL(`/${firstClient}`, request.url));
      }
    }
    return NextResponse.next();
  }
  
  // 5. Verificar path-based routing (/cliente-x)
  const pathSlug = pathname.split('/')[1];
  if (pathSlug && CLIENTS[pathSlug]) {
    // Se já está no formato correto, deixar passar
    if (pathname.startsWith(`/${pathSlug}`)) {
      return NextResponse.next();
    }
  }
  
  // 6. Default: manter como está
  return NextResponse.next();
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
};

