# Projeto 04 — Cardápio Digital em Next.js

Atividade da **Aula 03 — Projetos com Frameworks Front-end** (Frameworks Front-end · SENAI).

Mesma página do cardápio digital da cafeteria **Café Aroma**, construída com
**Next.js (App Router)**, o framework full-stack baseado em React.

## Funcionalidades

- Listagem de produtos em cards responsivos;
- Filtro por categoria (Todos, Cafés, Salgados, Doces);
- Carrinho com adição/remoção de itens, quantidade e total;
- Título da aba atualizado conforme o pedido.

## Tecnologias e recursos utilizados

| Recurso | Onde aparece |
| --- | --- |
| App Router (roteamento por arquivos) | `app/page.js` = rota `/` |
| Layout raiz | `app/layout.js` |
| Metadata / SEO | `export const metadata` em `app/layout.js` |
| Server Component | `app/page.js` (renderizado no servidor) |
| Client Component | `components/Cardapio.js` (`'use client'`) |
| Hooks React (`useState`, `useEffect`, `useMemo`) | `components/Cardapio.js` |
| Componentização e props | `components/` |

## Diferença em relação ao Projeto 01 (React puro)

No React com Vite tudo é renderizado no navegador. No Next.js, os componentes são
Server Components por padrão — só o que precisa de interatividade recebe a diretiva
`'use client'`. Isso reduz o JavaScript enviado ao cliente e melhora o SEO, já que o
HTML chega pronto do servidor.

## Estrutura

```
cardapio-next/
├── app/
│   ├── layout.js       # layout raiz + metadata
│   ├── page.js         # rota "/" (Server Component)
│   ├── globals.css     # estilos globais
│   └── favicon.ico
├── components/         # Cardapio (client), Cabecalho, FiltroCategorias, ProdutoCard, Carrinho, Rodape
├── data/               # produtos.js (dados do cardápio)
├── utils/              # formatarPreco.js
├── public/
├── next.config.mjs
└── package.json
```

## Como executar

```bash
npm install
npm run dev
```

Acesse `http://localhost:3000`.

Build de produção:

```bash
npm run build
npm start
```
