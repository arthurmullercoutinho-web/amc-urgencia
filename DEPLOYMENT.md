# AMC Advocacia - Guia de Deployment

## Estrutura do Projeto

```
amc-advocacia/
├── client/                 # Frontend React + Tailwind
│   ├── src/
│   │   ├── pages/         # Páginas (Home, Privacy, Terms, etc)
│   │   ├── components/    # Componentes reutilizáveis
│   │   ├── lib/           # Utilitários
│   │   ├── App.tsx        # Roteamento
│   │   └── index.css      # Estilos Tailwind
│   ├── public/            # Assets estáticos
│   └── index.html         # HTML principal
├── package.json           # Dependências
├── vite.config.ts         # Configuração Vite
└── tsconfig.json          # Configuração TypeScript
```

## Instalação Local

```bash
# 1. Clonar repositório
git clone <seu-repositorio> amc-advocacia
cd amc-advocacia

# 2. Instalar dependências
npm install
# ou
pnpm install

# 3. Executar em desenvolvimento
npm run dev
# Acesso: http://localhost:5173

# 4. Build para produção
npm run build

# 5. Preview do build
npm run preview
```

## Deployment

### Opção 1: Vercel (Recomendado)

```bash
npm install -g vercel
vercel
```

### Opção 2: Netlify

```bash
npm install -g netlify-cli
netlify deploy --prod --dir=dist
```

### Opção 3: GitHub Pages

```bash
# Editar vite.config.ts
# base: '/amc-advocacia/'

npm run build
# Fazer push da pasta 'dist' para branch 'gh-pages'
```

### Opção 4: Hospedagem Própria (Node.js)

```bash
npm run build
# Upload da pasta 'dist' para seu servidor
# Servir com: npm install -g serve
serve -s dist -l 3000
```

## Variáveis de Ambiente

Criar arquivo `.env.local`:

```env
VITE_APP_TITLE=AMC Advocacia
VITE_APP_LOGO=https://seu-dominio.com/logo.png
```

## SEO

- ✅ Meta tags (title, description, og:*)
- ✅ Sitemap.xml
- ✅ robots.txt
- ✅ Schema LocalBusiness
- ✅ Política de Privacidade
- ✅ Termos de Uso

## Contato

WhatsApp: +55 65 9817-2713
Email: contato@amcadvocacia.com.br

---

**Desenvolvido com React 19 + Tailwind 4 + Vite**
