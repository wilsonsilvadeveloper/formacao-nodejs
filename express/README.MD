# Express.js

## O que é o Express?

O **Express.js** é um framework web minimalista e flexível para o Node.js. Ele fornece um conjunto de ferramentas robusto para construir aplicações web e APIs de forma rápida e eficiente.

### Principais Características:

- **Minimalista**: O Express não impõe muitas regras, permitindo que você tenha total controle sobre a estrutura da sua aplicação. Isso facilita a criação de aplicações customizadas.

- **Flexível**: Com o Express, você pode adicionar ou remover funcionalidades de acordo com a necessidade da sua aplicação. Ele suporta middleware, que são funções que podem ser usadas para manipular requisições e respostas antes de chegarem à lógica principal da aplicação.

- **Facilidade para Criar APIs**: O Express é amplamente utilizado para criar APIs RESTful, devido à sua simplicidade em lidar com rotas, requisições HTTP e respostas.

- **Integração com Banco de Dados**: O Express pode ser facilmente integrado com diferentes bancos de dados, como MongoDB, MySQL, PostgreSQL, entre outros.

- **Grande Comunidade e Ecossistema**: Por ser uma das ferramentas mais populares para desenvolvimento web em Node.js, o Express tem uma vasta quantidade de recursos, pacotes e exemplos disponíveis na comunidade.

### Exemplo Simples:

Aqui está um exemplo básico de uma aplicação usando o Express:

```javascript
const express = require('express');
const app = express();

// Rota principal
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Inicia o servidor na porta 3000
app.listen(3000, () => {
  console.log('Servidor rodando em http://localhost:3000');
});
