# Projeto 01 — Sistema de Perguntas & Respostas

Documentação técnica e guia de desenvolvimento para o projeto de exemplo usado no curso.

## Visão geral

Aplicação web simples construída com Node.js, Express e EJS que permite criar perguntas e respostas. O objetivo é demonstrar conceitos práticos: rotas, templates, persistência com Sequelize/MySQL e organização de um projeto Express.

## Stack técnica

- Node.js (CommonJS)
- Express
- EJS (views)
- Sequelize (ORM)
- MySQL (conexão local)

## Pré-requisitos

- Node.js (recomendado v14+)
- npm
- MySQL (ou MariaDB) para rodar localmente

## Instalação (rápida)

Abra um terminal PowerShell na pasta do projeto e execute:

```powershell
cd "/caminho_do_projeto"
npm install
```

## Scripts úteis

O `package.json` já contém um script de desenvolvimento:

```powershell
npm run dev   # usa nodemon (quando instalado globalmente ou em devDependencies)
```

Você também pode iniciar diretamente com:

```powershell
node index.js
```

Por padrão o servidor roda na porta 3000 (ver `index.js`).

## Configuração da base de dados

Atualmente a conexão com o banco está configurada em `database/database.js` (MySQL):

- database: `guia_perguntas`
- user: `root`
- password: `wcs0420dev`
- host: `localhost`
- port: `3307`

Observação: essas credenciais estão hardcoded no arquivo para fins didáticos — em um projeto real ou ao publicar, mova essas configurações para variáveis de ambiente. Exemplo de boas práticas:

1. Criar um arquivo `.env` (não comitar).
2. Ler variáveis via `process.env` dentro de `database/database.js`.

## Estrutura do projeto

- `index.js` — ponto de entrada; configura o Express, middlewares, rotas e inicializa a conexão com o banco.
- `package.json` — dependências e scripts.
- `database/`
  - `database.js` — configuração do Sequelize (conexão MySQL).
  - `models/` — modelos Sequelize: `Perguntas.js`, `Respostas.js`.
- `views/` — templates EJS (`index.ejs`, `pergunta.ejs`, `perguntar.ejs`) e `partials/`.
- `public/` — arquivos estáticos (CSS, JS, imagens).

## Rotas principais

- `GET /` — lista de perguntas
- `GET /perguntar` — formulário para criar pergunta
- `POST /salvarpergunta` — salva uma nova pergunta
- `GET /pergunta/:id` — exibe pergunta e respostas
- `POST /responder` — salva uma resposta

Ver `index.js` para a implementação completa.

## Contribuição

1. Abra uma issue descrevendo a sugestão/bug.
2. Crie um branch com sua alteração.
3. Abra um pull request com explicação das mudanças.