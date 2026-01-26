# Imagens dos Clientes

Esta pasta contém as imagens dos avatares dos clientes.

## Estrutura

```
public/images/clients/
├── igor-aires-avatar.png
└── {slug-cliente}-avatar.{ext}
```

## Formato Recomendado

- **Nome do arquivo**: `{slug-cliente}-avatar.{ext}` (ex: `igor-aires-avatar.png`)
- **Tamanho**: 512x512px ou maior (quadrado, ideal para avatares)
- **Formato**: PNG (com transparência) ou JPG
- **Peso**: Otimizado (< 200KB recomendado)

## Como Adicionar Nova Imagem

1. Salve a imagem nesta pasta com o nome: `{slug-cliente}-avatar.png`
2. Atualize o `avatarUrl` em `src/config/clients.ts`:

```typescript
const clienteProfile: ProfileData = {
  // ...
  avatarUrl: "/images/clients/{slug-cliente}-avatar.png",
  // ...
};
```

3. (Opcional) Atualize também a `ogImage` no SEO para usar a mesma imagem

## Otimização

As imagens são servidas automaticamente pelo Next.js através da pasta `public/`.
O componente `next/image` otimiza as imagens automaticamente em produção.

Para melhor performance:
- Use formatos WebP quando possível
- Comprima imagens antes de adicionar (ferramentas: TinyPNG, Squoosh)

