# Comparação entre os Frameworks Front-end

Atividade da **Aula 03 — Projetos com Frameworks Front-end** · Frameworks Front-end · SENAI

O mesmo projeto — o **Cardápio Digital da cafeteria Café Aroma** — foi desenvolvido quatro
vezes, com React, Vue, Angular e Next.js. Como o tema, o layout e as funcionalidades são
idênticos, as diferenças observadas dizem respeito exclusivamente à tecnologia utilizada.

## Funcionalidades implementadas nos quatro projetos

- Cabeçalho com contador de itens do pedido;
- Filtro de produtos por categoria (Todos, Cafés, Salgados, Doces);
- Lista de produtos em cards responsivos (CSS Grid);
- Carrinho com adicionar/remover item, quantidade e total formatado em reais;
- Título da aba atualizado conforme a quantidade de itens (efeito colateral);
- Layout responsivo (uma coluna em telas de até 480px).

## Quadro comparativo

| Aspecto | React (Vite) | Vue 3 (Vite) | Angular | Next.js |
| --- | --- | --- | --- | --- |
| Classificação | Biblioteca | Framework progressivo | Framework completo | Framework full-stack (sobre React) |
| Criação do projeto | `npm create vite@latest` | `npm create vue@latest` | `ng new` (Angular CLI) | `npx create-next-app@latest` |
| Linguagem usada | JavaScript + JSX | TypeScript + SFC (`.vue`) | TypeScript | JavaScript + JSX |
| Estado local | `useState` | `ref` | `signal` | `useState` |
| Valor derivado | `useMemo` | `computed` | `computed` | `useMemo` |
| Efeito colateral | `useEffect` | `watch` | `effect` | `useEffect` |
| Comunicação pai → filho | props | props | `input()` | props |
| Comunicação filho → pai | função por props | `emits` | `output()` | função por props |
| Repetição de lista | `.map()` no JSX | `v-for` | `@for` | `.map()` no JSX |
| Condicional | operador ternário / `&&` | `v-if` / `v-else` | `@if` / `@else` | ternário / `&&` |
| Organização do componente | 1 arquivo `.jsx` | 1 arquivo `.vue` (HTML+JS+CSS) | 3 arquivos (`.ts`, `.html`, `.css`) | 1 arquivo `.js` |
| Escopo de CSS | global (`index.css`) | global ou `<style scoped>` | encapsulado por componente | global (`globals.css`) |
| Renderização | Client-side (CSR) | Client-side (CSR) | Client-side (CSR) | Server Components + CSR |
| Tamanho do bundle gerado | ~195 kB | ~66 kB | ~221 kB | build otimizado por rota |
| Servidor de desenvolvimento | `npm run dev` (5173) | `npm run dev` (5173) | `npm start` (4200) | `npm run dev` (3000) |

## Principais diferenças percebidas no desenvolvimento

### React
Foi o projeto mais direto de escrever: tudo é JavaScript. O JSX mistura marcação e lógica no
mesmo arquivo, e a comunicação entre componentes acontece só por props — inclusive as funções
de callback (`aoAdicionar`, `aoRemover`). Em compensação, o React não impõe estrutura: a
organização em `components/`, `data/` e `utils/` foi uma decisão do grupo, não uma regra da
biblioteca. Isso dá liberdade, mas exige disciplina para o projeto não virar bagunça.

### Vue
Os Single-File Components deixaram cada componente muito legível: template, lógica e estilo
no mesmo arquivo, mas em blocos separados. As diretivas (`v-for`, `v-if`, `:class`) reduziram
bastante o código repetitivo em comparação ao `.map()` do JSX. A reatividade com `ref` e
`computed` é automática — foi possível alterar `item.quantidade++` diretamente, sem recriar o
array como no React. Também foi o **menor bundle** dos quatro.

### Angular
O mais estruturado e o mais verboso. O CLI (`ng generate`, `ng serve`, `ng build`) gera tudo
pronto e obriga uma organização padronizada, o que ajuda em equipe e em projetos grandes.
Cada componente é dividido em três arquivos e o CSS já vem encapsulado, sem risco de um estilo
vazar para outro componente. Em troca, é o que exige mais código para o mesmo resultado:
TypeScript obrigatório, decorators (`@Component`), `input()`/`output()` e um bundle inicial
maior. A curva de aprendizado é claramente a mais alta.

### Next.js
Por ser construído sobre o React, o código dos componentes é praticamente o mesmo do Projeto 01
— a diferença está na arquitetura. No Next.js, os componentes são **Server Components** por
padrão, e só o que precisa de estado ou eventos recebe a diretiva `'use client'`. Foi preciso
isolar a parte interativa em `components/Cardapio.js`. Em troca, a página chega pronta do
servidor (melhor SEO e primeiro carregamento), o roteamento é baseado na estrutura de pastas
(`app/page.js` = rota `/`) e o `metadata` já resolve título e descrição da página.

## Conclusão

Não existe "melhor framework", e sim o mais adequado ao contexto:

- **React** — flexibilidade e ecossistema gigante; ideal quando a equipe quer liberdade de arquitetura;
- **Vue** — melhor equilíbrio entre simplicidade e recursos; excelente para começar e para projetos médios;
- **Angular** — padronização e ferramental completo; compensa em aplicações corporativas grandes e equipes numerosas;
- **Next.js** — quando SEO, performance de carregamento e recursos de back-end importam.

Para este cardápio, uma página pequena e interativa, **Vue** foi o que entregou o resultado com
menos código e menor bundle, enquanto **Angular** foi o que mais exigiu estrutura para o mesmo
resultado. **Next.js** só se justificaria aqui se o cardápio precisasse ser indexado por
buscadores ou consumir dados de um banco no servidor.
