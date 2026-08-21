<div align="center">

# 🎓 Frameworks Front-end

**SENAI · Prof. Me. Deivison S. Takatu**
Repositório das atividades da disciplina — por **Gustavo Ribas Silestrino**

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vue](https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D)
![Angular](https://img.shields.io/badge/Angular-0F0F11?style=for-the-badge&logo=angular&logoColor=E23237)
![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)

</div>

---

## 🍽️ Os projetos

O mesmo site — o **Cardápio Digital da cafeteria Café Aroma** — desenvolvido **quatro vezes**,
uma em cada tecnologia. Mesmo layout, mesmas funcionalidades, mesma base de dados: a única
variável é o framework.

| Projeto | Tecnologia | Código | Rodar | Site |
|:--:|---|:--:|:--:|:--:|
| **01** | React 19 + Vite | [📂 cardapio-react](Atividade/Aula%202/cardapio-react) | `npm run dev` → :5173 | ⏳ |
| **02** | Vue 3 + Vite | [📂 cardapio-vue](Atividade/Aula%203/cardapio-vue) | `npm run dev` → :5173 | ⏳ |
| **03** | Angular | [📂 cardapio-angular](Atividade/Aula%204/cardapio-angular) | `npm start` → :4200 | ⏳ |
| **04** | Next.js (App Router) | [📂 cardapio-next](Atividade/Aula%205/cardapio-next) | `npm run dev` → :3000 | ⏳ |
| **05** | *cópia de repositório* | [📂 Aula 6](Atividade/Aula%206) | — | 🚧 |

> ⏳ Os sites ainda não estão publicados. As imagens abaixo mostram exatamente como cada um
> roda — a prévia funciona aqui no GitHub, sem depender de deploy.

---

## 👀 Prévia

### ⚛️ Projeto 01 — React

![Cardápio Digital em React](docs/preview/react.png)

### 💚 Projeto 02 — Vue

![Cardápio Digital em Vue](docs/preview/vue.png)

### 🅰️ Projeto 03 — Angular

![Cardápio Digital em Angular](docs/preview/angular.png)

### ▲ Projeto 04 — Next.js

![Cardápio Digital em Next.js](docs/preview/next.png)

### 📱 Responsivo

<div align="center">
<img src="docs/preview/react-mobile.png" alt="Versão mobile do cardápio" width="330">
</div>

Em telas de até 480px o grid vira uma coluna única e o cabeçalho se reorganiza.

---

## ✨ Funcionalidades

| | |
|---|---|
| 🧾 **Cardápio** | 8 produtos em cards responsivos com CSS Grid |
| 🏷️ **Filtro** | Por categoria: Todos, Cafés, Salgados, Doces |
| 🛒 **Carrinho** | Adicionar, remover, quantidade e total em R$ |
| ⚡ **Reatividade** | O título da aba muda conforme o pedido |
| 📱 **Responsivo** | Do desktop até uma coluna no celular |

---

## ▶️ Como rodar localmente

```bash
git clone https://github.com/GustavoRibasSilestrino/Frontend.git
```

Entre na pasta do projeto desejado e rode:

```bash
npm install
```

| Projeto | Comando | Endereço |
|---|---|---|
| ⚛️ React | `npm run dev` | http://localhost:5173 |
| 💚 Vue | `npm run dev` | http://localhost:5173 |
| 🅰️ Angular | `npm start` | http://localhost:4200 |
| ▲ Next.js | `npm run dev` | http://localhost:3000 |

---

## 🚀 Publicar na Vercel

Para gerar as URLs públicas, cada projeto entra como um site separado:

1. [vercel.com/new](https://vercel.com/new) → **Import** neste repositório;
2. Em **Root Directory**, clique em *Edit* e aponte para a pasta do projeto
   (ex.: `Atividade/Aula 2/cardapio-react`);
3. O framework é detectado sozinho (Vite / Angular / Next.js) → **Deploy**;
4. Repita para os outros três, mudando só o Root Directory.

Depois é só substituir os ⏳ da tabela pelos links gerados.

---

## 🗂️ Estrutura do repositório

```
Frontend/
├── Atividade/          # as entregas práticas
│   ├── Aula 1/         # HTML + CSS + JS puro
│   ├── Aula 2/         # Projeto 01 — React
│   ├── Aula 3/         # Projeto 02 — Vue
│   ├── Aula 4/         # Projeto 03 — Angular
│   ├── Aula 5/         # Projeto 04 — Next.js
│   ├── Aula 6/         # Projeto 05 — cópia de repositório
│   ├── COMPARACAO.md   # comparação entre as tecnologias
│   └── LINKS.MD        # repositórios e deploys
├── Aulas/              # links dos slides do professor
├── Materia/            # artigo sobre React
└── docs/preview/       # imagens usadas neste README
```

---

## 📚 Documentação

| Documento | O que tem |
|---|---|
| [Atividade/README.md](Atividade/README.md) | Índice detalhado das entregas |
| [Atividade/COMPARACAO.md](Atividade/COMPARACAO.md) | Comparação entre React, Vue, Angular e Next.js |
| [Atividade/LINKS.MD](Atividade/LINKS.MD) | Links de repositórios e deploys |
| [Aulas/README.md](Aulas/README.md) | Slides das aulas no repositório do professor |

---

<div align="center">

**Gustavo Ribas Silestrino**

[![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/GustavoRibasSilestrino)

</div>
