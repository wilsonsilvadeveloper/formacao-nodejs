const express = require('express'); // Importa o framework Express
const app = express();
const port = 3000;

app.set('view engine', 'ejs'); // Define EJS como o motor de visualização

app.get('/', (req, res) => { // Rota raiz
  res.render('index'); // Renderiza a view 'index.ejs'
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
}); // Inicia o servidor