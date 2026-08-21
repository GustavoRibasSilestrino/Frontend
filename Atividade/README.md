<div align="center">

# ☕ Atividades — Frameworks Front-end

**SENAI · Prof. Me. Deivison S. Takatu**

Repositório das entregas práticas da disciplina.
Cada aula tem sua pasta, seu código e seu deploy.

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vue](https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D)
![Angular](https://img.shields.io/badge/Angular-0F0F11?style=for-the-badge&logo=angular&logoColor=E23237)
![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)

</div>

---

## 🗂️ Entregas

| # | Entrega | Tecnologia | Código | Site | Status |
|:--:|---|---|:--:|:--:|:--:|
| **01** | Página com HTML, CSS e JS | `Vanilla JS` | [📁 Aula 1](https://github.com/GustavoRibasSilestrino/Frontend/tree/master/Atividade/Aula%201) | [🔗 Acessar](https://aula-1-deivison.vercel.app) | ✅ Publicado |
| **02** | Cardápio Digital — Projeto 01 | `React 19 + Vite` | [📁 cardapio-react](https://github.com/GustavoRibasSilestrino/Frontend/tree/master/Atividade/Aula%202/cardapio-react) | ⏳ | ✅ Concluído |
| **03** | Cardápio Digital — Projeto 02 | `Vue 3 + Vite` | [📁 cardapio-vue](https://github.com/GustavoRibasSilestrino/Frontend/tree/master/Atividade/Aula%203/cardapio-vue) | ⏳ | ✅ Concluído |
| **04** | Cardápio Digital — Projeto 03 | `Angular` | [📁 cardapio-angular](https://github.com/GustavoRibasSilestrino/Frontend/tree/master/Atividade/Aula%204/cardapio-angular) | ⏳ | ✅ Concluído |
| **05** | Cardápio Digital — Projeto 04 | `Next.js (App Router)` | [📁 cardapio-next](https://github.com/GustavoRibasSilestrino/Frontend/tree/master/Atividade/Aula%205/cardapio-next) | ⏳ | ✅ Concluído |
| **06** | Cópia de um repositório — Projeto 05 | `a definir` | [📁 Aula 6](https://github.com/GustavoRibasSilestrino/Frontend/tree/master/Atividade/Aula%206) | ⏳ | 🚧 Pendente |

> ⏳ = deploy ainda não publicado. Assim que subir na Vercel, é só trocar o ícone pelo link.

---

## 🍰 O tema: Café Aroma

<div align="center">

**Os projetos 01 a 04 são o mesmo site, feito quatro vezes.**

</div>

A atividade da Aula 03 pede quatro projetos sobre o **mesmo tema**, cada um em uma tecnologia
diferente. O tema escolhido foi o **cardápio digital de uma cafeteria fictícia, a Café Aroma** —
assim, a única variável entre os projetos é o framework, o que torna a comparação justa.

| Funcionalidade | Descrição |
|---|---|
| 🧾 **Cardápio** | 8 produtos em cards responsivos (CSS Grid) |
| 🏷️ **Filtro** | Por categoria: Todos, Cafés, Salgados, Doces |
| 🛒 **Carrinho** | Adicionar, remover, quantidade e total em R$ |
| 📱 **Responsivo** | Adapta de desktop até 1 coluna no celular |
| ⚡ **Reatividade** | Título da aba muda conforme o pedido |

---

## 🧩 O que cada projeto demonstra

| Recurso | React | Vue | Angular | Next.js |
|---|:--:|:--:|:--:|:--:|
| Componentização | ✅ | ✅ | ✅ | ✅ |
| Estado reativo | `useState` | `ref` | `signal` | `useState` |
| Valor derivado | `useMemo` | `computed` | `computed` | `useMemo` |
| Efeito colateral | `useEffect` | `watch` | `effect` | `useEffect` |
| Pai → filho | `props` | `props` | `input()` | `props` |
| Filho → pai | `callback` | `emits` | `output()` | `callback` |
| Renderização de lista | `.map()` | `v-for` | `@for` | `.map()` |
| Renderização no servidor | ❌ | ❌ | ❌ | ✅ |

📊 **Análise completa das diferenças:** [COMPARACAO.md](COMPARACAO.md)

---

## ▶️ Como rodar

Clone o repositório, entre na pasta do projeto desejado e rode:

```bash
npm install
```

| Projeto | Comando | Endereço local |
|---|---|---|
| ⚛️ React | `npm run dev` | http://localhost:5173 |
| 💚 Vue | `npm run dev` | http://localhost:5173 |
| 🅰️ Angular | `npm start` | http://localhost:4200 |
| ▲ Next.js | `npm run dev` | http://localhost:3000 |

> A Aula 1 é HTML puro: basta abrir o `index.html` no navegador.

---

## 📁 Estrutura

```
Atividade/
├── Aula 1/                     # HTML + CSS + JS puro
├── Aula 2/cardapio-react/      # Projeto 01 — React
├── Aula 3/cardapio-vue/        # Projeto 02 — Vue
├── Aula 4/cardapio-angular/    # Projeto 03 — Angular
├── Aula 5/cardapio-next/       # Projeto 04 — Next.js
├── Aula 6/                     # Projeto 05 — cópia de repositório
├── COMPARACAO.md               # comparação entre as tecnologias
├── LINKS.MD                    # repositórios e deploys
└── README.md
```

---

<div align="center">

**Gustavo Ribas Silestrino**

[![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/GustavoRibasSilestrino)

</div>
