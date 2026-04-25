# CBF - Confederação Brasileira de Futebol Website

Um site profissional e interativo dedicado à história, ídolos e conquistas do futebol brasileiro, construído com React, TypeScript e TailwindCSS.

## 🏆 Features

- **🎯 Homepage Atrativa**: Hero section impressionante com estatísticas do futebol brasileiro
- **📖 Histórias Memoráveis**: Timeline interativa com os momentos mais importantes da história
- **⭐ Ídolos Eternos**: Perfis detalhados dos maiores jogadores e suas conquistas
- **🏅 Conquistas**: Showcase de todos os títulos e recordes conquistados
- **🖼️ Galeria Interativa**: Visualização de imagens com filtros por categoria
- **📱 Design Responsivo**: Totalmente adaptado para mobile, tablet e desktop
- **✨ Animações Suaves**: Transições elegantes e efeitos visuais profissionais
- **🎨 Design Moderno**: Uso de vidro (glass effect), gradientes e cores oficiais da CBF

## 🛠️ Tecnologias

- **React 18.2** - Biblioteca JavaScript para UI
- **TypeScript** - Tipagem estática para maior segurança
- **Vite** - Build tool rápido e moderno
- **TailwindCSS 3.3** - Framework CSS utility-first
- **React Router v6** - Navegação entre páginas
- **Lucide React** - Ícones SVG de alta qualidade

## 📋 Cores Oficiais da CBF

- Amarelo: `#FFD700`
- Azul: `#003DA5`
- Verde: `#009E3A`

## 🚀 Como Começar

### Pré-requisitos

- Node.js 16+ instalado
- npm ou yarn

### Instalação

```bash
# Instalar dependências
npm install

# Ou com yarn
yarn install
```

### Desenvolvimento

```bash
# Iniciar servidor de desenvolvimento
npm run dev

# Ou com yarn
yarn dev
```

O site abrirá automaticamente em `http://localhost:3000`

### Build Produção

```bash
# Criar build otimizado
npm run build

# Ou com yarn
yarn build
```

## 📁 Estrutura do Projeto

```
src/
├── components/
│   ├── Navigation.tsx      # Barra de navegação
│   └── Footer.tsx          # Rodapé
├── pages/
│   ├── Home.tsx            # Página inicial
│   ├── Stories.tsx         # Histórias e timeline
│   ├── Legends.tsx         # Ídolos e perfis
│   ├── Achievements.tsx    # Conquistas e títulos
│   └── Gallery.tsx         # Galeria interativa
├── App.tsx                 # Componente principal
├── main.tsx                # Entrada da aplicação
└── index.css               # Estilos globais
```

## 🎨 Componentes Principais

### Navigation
- Menu responsivo com suporte mobile
- Links para todas as seções
- Logo oficial da CBF

### Home
- Hero section impactante
- Cards de features
- Estatísticas principais
- Chamadas para ação (CTA)

### Stories
- Linha do tempo histórica
- Cards interativos com histórias
- Modal para detalhes completos
- Filtros por época

### Legends
- Cards de ídolos com perfis
- Modais com biografia completa
- Estatísticas de carreira
- Conquistas principais

### Achievements
- Gridstats com títulos conquistados
- Timeline de evolução
- Recordes internacionais
- Comparativos históricos

### Gallery
- Grid responsivo de imagens
- Visualizador com navegação
- Filtros por categoria
- Modo tela cheia

## 🎯 Recursos Principais

### Interatividade
✅ Modais com animações suaves
✅ Navegação entre telas sem recarga
✅ Filtros dinâmicos
✅ Navegação por galeria

### Performance
✅ Otimizado com Vite
✅ Code splitting automático
✅ Lazy loading de componentes
✅ CSS otimizado com TailwindCSS

### Design
✅ Responsivo em todos os dispositivos
✅ Tema escuro profissional
✅ Animações elegantes
✅ Cores oficiais da CBF

## 📱 Responsividade

O site é totalmente responsivo com breakpoints:
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## 🔧 Personalizações

### Mudar Cores
Edite em `tailwind.config.ts`:
```typescript
colors: {
  cbf: {
    yellow: '#FFD700',
    blue: '#003DA5',
    green: '#009E3A',
  }
}
```

### Adicionar Conteúdo
Todos os dados (stories, legends, achievements) estão nos arquivos `.tsx` de cada página e podem ser facilmente editados.

## 📄 Licença

Este projeto é criado para fins educacionais e de demonstração.

## 👨‍💻 Autor

Desenvolvido com ❤️ para a CBF

---

**Aproveite a experiência do melhor futebol do mundo! ⚽**
