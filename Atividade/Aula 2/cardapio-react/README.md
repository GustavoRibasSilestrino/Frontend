# Projeto 01 — Cardápio Digital em React

Atividade da **Aula 03 — Projetos com Frameworks Front-end** (Frameworks Front-end · SENAI).

Página do cardápio digital da cafeteria fictícia **Café Aroma**, construída com
**React 19 + Vite**. O mesmo tema foi desenvolvido também em Vue, Angular e Next.js.

## Funcionalidades

- Listagem de produtos em cards responsivos;
- Filtro por categoria (Todos, Cafés, Salgados, Doces);
- Carrinho com adição/remoção de itens, quantidade e total;
- Título da aba atualizado conforme o pedido (efeito colateral).

## Tecnologias e recursos utilizados

| Recurso | Onde aparece |
| --- | --- |
| Componentização | `src/components/` |
| Props | `ProdutoCard`, `Cabecalho`, `FiltroCategorias` |
| `useState` | estado da categoria e do carrinho em `App.jsx` |
| `useEffect` | atualização do `document.title` |
| `useMemo` | lista filtrada de produtos |
| JSX | todos os componentes `.jsx` |

## Estrutura

```
cardapio-react/
├── public/
├── src/
│   ├── components/     # Cabecalho, FiltroCategorias, ProdutoCard, Carrinho, Rodape
│   ├── data/           # produtos.js (dados do cardápio)
│   ├── utils/          # formatarPreco.js
│   ├── App.jsx         # componente raiz
│   ├── main.jsx        # ponto de entrada
│   └── index.css       # estilos globais
├── index.html
└── package.json
```

## Como executar

```bash
npm install
npm run dev
```

Acesse `http://localhost:5173`.

Build de produção:

```bash
npm run build
npm run preview
```
