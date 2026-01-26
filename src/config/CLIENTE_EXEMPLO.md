# Como Adicionar um Novo Cliente

Este guia explica como adicionar um novo cliente ao sistema.

## Estrutura de Dados

Cada cliente precisa dos seguintes dados:

1. **Profile** - Informações do perfil (nome, role, bio, avatar, localização)
2. **Links** - Lista de links/links externos
3. **Products** - Produtos/serviços (opcional)
4. **SEO** - Metadados para SEO (título, descrição, imagem OG)

## Passo a Passo

### 1. Abrir o arquivo de configuração

Edite: `src/config/clients.ts`

### 2. Criar os dados do cliente

Adicione os dados do cliente antes do objeto `CLIENTS`:

```typescript
// Perfil do cliente
const novoClienteProfile: ProfileData = {
  name: "Nome do Cliente",
  role: "Profissão ou Especialidade",
  bio: "Descrição breve sobre o cliente",
  avatarUrl: "https://exemplo.com/avatar.jpg",
  location: {
    address: "Endereço completo",
    city: "Cidade, Estado",
    mapUrl: "https://maps.google.com/..."
  }
};

// Links do cliente
const novoClienteLinks: LinkItemData[] = [
  {
    id: '1',
    title: "Título do Link",
    subtitle: "Descrição do link",
    url: "https://exemplo.com",
    icon: 'Instagram', // Nome do ícone como string (ex: 'Calendar', 'Youtube', 'Instagram', 'Utensils', 'Building2', 'TikTok')
    featured: false, // true para destacar
    color: "text-pink-500" // opcional: cor customizada
  },
  // Adicione mais links aqui...
];

// Produtos (opcional)
const novoClienteProducts: ProductItem[] = [
  {
    id: 'p1',
    title: "Nome do Produto",
    description: "Descrição do produto",
    price: "R$ 99,90",
    coverUrl: "https://exemplo.com/capa.jpg",
    url: "https://exemplo.com/produto",
    tag: "Mais Vendido" // opcional
  },
  // Adicione mais produtos aqui...
];
```

### 3. Adicionar ao objeto CLIENTS

Dentro do objeto `CLIENTS`, adicione uma nova entrada:

```typescript
export const CLIENTS: Record<string, ClientConfig> = {
  'igor-aires': { /* ... */ },
  
  'novo-cliente': {  // ← Slug único (sem espaços, use hífens)
    slug: 'novo-cliente',
    customDomain: 'novocliente.com.br',  // Opcional: domínio próprio
    templateId: 'simple-links',  // 'simple-links', 'video-landing', ou 'restaurant-menu'
    content: {
      profile: novoClienteProfile,
      links: novoClienteLinks,
      products: novoClienteProducts,
    },
    seo: {
      title: "Título da Página | Nome do Cliente",
      description: "Descrição para SEO e redes sociais",
      ogImage: "https://exemplo.com/og-image.jpg"  // Imagem 1200x630px recomendada
    }
  }
};
```

### 4. Escolher o Template

Templates disponíveis:
- **simple-links**: Template estilo LinkTree (padrão)
- **video-landing**: Template com vídeo em destaque (em desenvolvimento)
- **restaurant-menu**: Template para cardápios (em desenvolvimento)

### 5. Configurar Domínio Customizado (Opcional)

Se o cliente tiver domínio próprio, adicione `customDomain`:

```typescript
customDomain: 'cliente.com.br'
```

O middleware automaticamente:
- Redireciona `cliente.com.br` → página do cliente
- Funciona com e sem `www` (www.cliente.com.br e cliente.com.br)

## Exemplo Completo

```typescript
// Dados do Cliente
const joaoSilvaProfile: ProfileData = {
  name: "João Silva",
  role: "Personal Trainer",
  bio: "Especialista em treinamento funcional e emagrecimento.",
  avatarUrl: "https://exemplo.com/joao.jpg",
  location: {
    address: "Rua das Flores, 123",
    city: "São Paulo, SP",
    mapUrl: "https://maps.google.com/..."
  }
};

const joaoSilvaLinks: LinkItemData[] = [
  {
    id: '1',
    title: "Agendar Aula",
    subtitle: "Reserve sua aula experimental",
    url: "https://wa.me/5511999999999",
    icon: Calendar,
    featured: true
  },
  {
    id: '2',
    title: "Instagram",
    subtitle: "Siga para dicas de treino",
    url: "https://instagram.com/joaosilva",
    icon: Instagram,
    color: "text-pink-500"
  }
];

// Adicionar ao CLIENTS
export const CLIENTS: Record<string, ClientConfig> = {
  'igor-aires': { /* ... */ },
  
  'joao-silva': {
    slug: 'joao-silva',
    customDomain: 'joaosilva.com.br',
    templateId: 'simple-links',
    content: {
      profile: joaoSilvaProfile,
      links: joaoSilvaLinks,
      products: [],
    },
    seo: {
      title: "João Silva | Personal Trainer",
      description: "Especialista em treinamento funcional e emagrecimento em São Paulo",
      ogImage: "https://exemplo.com/joao-og.jpg"
    }
  }
};
```

## Acessar o Cliente

Após adicionar, o cliente estará disponível em:

- **Desenvolvimento**: `http://localhost:3000/novo-cliente`
- **Produção (path)**: `https://seudominio.com/novo-cliente`
- **Produção (custom domain)**: `https://novocliente.com.br` (se configurado)

## Dicas

1. **Slug único**: Use hífens, sem espaços (ex: `joao-silva`, não `joao silva`)
2. **Ícones**: Use ícones do `lucide-react` (importe no topo do arquivo)
3. **Imagens**: URLs devem ser absolutas (https://...)
4. **SEO**: Imagem OG recomendada: 1200x630px
5. **Domínios**: Configure DNS apontando para o servidor antes de adicionar `customDomain`

