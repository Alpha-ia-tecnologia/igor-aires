# Guia para Gerar Ícones PWA

## Método Rápido: Usando Ferramenta Online

### Passo 1: Acesse uma das ferramentas
- [PWA Builder Image Generator](https://www.pwabuilder.com/imageGenerator)
- [Real Favicon Generator](https://realfavicongenerator.net/)
- [Favicon.io](https://favicon.io/)

### Passo 2: Faça upload do favicon.svg
Use o arquivo `public/favicon.svg` como base

### Passo 3: Configure as opções
- Tamanhos necessários: 192x192 e 512x512
- Formato: PNG
- Background: transparente ou cor sólida (#10b981)

### Passo 4: Baixe e coloque na pasta public/
- `icon-192.png` → `public/icon-192.png`
- `icon-512.png` → `public/icon-512.png`

## Método Alternativo: Usando Node.js

Se você tiver o pacote `sharp` instalado, pode usar este script:

```bash
npm install -D sharp
node scripts/generate-icons.js
```

## Método Manual: Usando Editor de Imagens

1. Abra o `favicon.svg` em qualquer editor (Figma, Illustrator, Photoshop)
2. Exporte em 192x192 pixels → `icon-192.png`
3. Exporte em 512x512 pixels → `icon-512.png`
4. Coloque ambos na pasta `public/`

## Placeholders Temporários

Até gerar os ícones definitivos, o PWA funcionará, mas sem os ícones personalizados. Os navegadores usarão um ícone padrão.

