# Projeto 03 — Cardápio Digital em Angular

Atividade da **Aula 03 — Projetos com Frameworks Front-end** (Frameworks Front-end · SENAI).

Mesma página do cardápio digital da cafeteria **Café Aroma**, construída com
**Angular** (componentes standalone, signals e TypeScript).

## Funcionalidades

- Listagem de produtos em cards responsivos;
- Filtro por categoria (Todos, Cafés, Salgados, Doces);
- Carrinho com adição/remoção de itens, quantidade e total;
- Título da aba atualizado conforme o pedido.

## Tecnologias e recursos utilizados

| Recurso | Onde aparece |
| --- | --- |
| Componentes standalone (`@Component`) | `src/app/components/` |
| Template + CSS por componente | cada pasta tem `.ts`, `.html` e `.css` |
| `signal` (estado reativo) | `app.ts` |
| `computed` (valor derivado) | `app.ts`, `carrinho-resumo.ts` |
| `effect` (efeito colateral) | `app.ts` |
| `input()` / `output()` | comunicação pai ↔ filho |
| Control flow `@for` / `@if` | templates HTML |
| Interpolação `{{ }}` e binding `[prop]` / `(evento)` | templates HTML |

## Estrutura

```
cardapio-angular/
├── public/                 # arquivos estáticos
├── src/
│   ├── app/
│   │   ├── components/     # cabecalho, filtro-categorias, produto-card, carrinho-resumo, rodape
│   │   ├── data/           # produtos.ts (dados do cardápio)
│   │   ├── utils/          # formatar-preco.ts
│   │   ├── app.ts          # componente raiz
│   │   ├── app.html
│   │   ├── app.css
│   │   └── app.config.ts   # configuração da aplicação
│   ├── index.html
│   ├── main.ts             # ponto de entrada (bootstrapApplication)
│   └── styles.css          # estilos globais
├── angular.json            # configuração de build do Angular CLI
├── tsconfig.json
└── package.json
```

## Como executar

```bash
npm install
npm start
```

Acesse `http://localhost:4200`.

Build de produção:

```bash
npm run build
```
