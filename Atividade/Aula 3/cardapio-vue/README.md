# Projeto 02 — Cardápio Digital em Vue

Atividade da **Aula 03 — Projetos com Frameworks Front-end** (Frameworks Front-end · SENAI).

Mesma página do cardápio digital da cafeteria **Café Aroma**, agora construída com
**Vue 3 + Vite**, usando Single-File Components (`.vue`) e a Composition API.

## Funcionalidades

- Listagem de produtos em cards responsivos;
- Filtro por categoria (Todos, Cafés, Salgados, Doces);
- Carrinho com adição/remoção de itens, quantidade e total;
- Título da aba atualizado conforme o pedido.

## Tecnologias e recursos utilizados

| Recurso | Onde aparece |
| --- | --- |
| Single-File Components | `src/components/*.vue` |
| Composition API (`<script setup>`) | todos os componentes |
| `ref` (estado reativo) | `App.vue` |
| `computed` (valor derivado) | `App.vue`, `CarrinhoResumo.vue` |
| `watch` (efeito colateral) | `App.vue` |
| Props e `emits` | comunicação pai ↔ filho |
| Diretivas `v-for`, `v-if`, `:class`, `@click` | templates |

## Estrutura

```
cardapio-vue/
├── public/
├── src/
│   ├── assets/         # main.css (estilos globais)
│   ├── components/     # AppCabecalho, FiltroCategorias, ProdutoCard, CarrinhoResumo, AppRodape
│   ├── data/           # produtos.ts (dados do cardápio)
│   ├── utils/          # formatarPreco.ts
│   ├── App.vue         # componente raiz
│   └── main.ts         # ponto de entrada
├── index.html
├── vite.config.ts
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
