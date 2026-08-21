# Projeto 05 — Cópia de um projeto a partir de um repositório

Atividade da **Aula 03 — Projetos com Frameworks Front-end** · Frameworks Front-end · SENAI

> **Status: pendente.** Falta definir o repositório a ser clonado (repositório do Arthur).

## O que o slide pede

> Projeto 05: Uma cópia de um projeto a partir de um repositório.

O slide "Buscando Projetos por Frameworks" indica as ferramentas para isso:

- **GitHub** — Repository search → `git clone <url>`
- **Vercel** — busca por templates (download de parte do repositório)
- **CodeSandbox** — Template search

## Como fazer o clone

Abra o terminal **dentro desta pasta** (`Atividade/Aula 6`) e rode:

```bash
git clone <URL_DO_REPOSITORIO>
```

Depois entre na pasta criada e instale as dependências:

```bash
npm install
npm run dev
```

> Se o projeto clonado usar outro gerenciador (yarn/pnpm) ou outro comando de start,
> confira o `README.md` e o `package.json` do próprio repositório.

## Depois de clonar

1. Remova o histórico do repositório original, para publicar como projeto próprio:

   ```bash
   rm -rf .git
   git init
   git add .
   git commit -m "Projeto 05: cópia do repositório <nome>"
   ```

2. Anote no arquivo [`../LINKS.MD`](../LINKS.MD):
   - a URL do repositório original (crédito ao autor);
   - a URL do seu repositório no GitHub;
   - a URL do deploy (Vercel), se houver.

3. Descreva neste README:
   - qual framework o projeto usa;
   - o que ele faz;
   - o que foi alterado em relação ao original.
