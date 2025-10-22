const express = require('express'); // Importa o framework Express
const app = express();
const port = 3000;

app.set('view engine', 'ejs'); // Define EJS como o motor de visualização

app.get('/:nome/:lang/', (req, res) => { // Rota raiz
  var nome = req.params.nome; // Obtém o parâmetro 'nome' da URL
  var lang = req.params.lang; // Obtém o parâmetro 'lang' da URL
  var exibirMsg = false; // Obtém o parâmetro 'isErro' da URL
  var produtos = [
    {nome: "TV", preco: 2200.00},
    {nome: "Geladeira", preco: 3200.00},
    {nome: "Mouse", preco: 80.00},
    {nome: "Teclado", preco: 150.00}
  ]
  res.render('index', {
    nome: nome,
    lang: lang,
    empresa: "Curso de Node.js",
    inscritos: 8000,
    msg: exibirMsg,
    produtos: produtos
  }); // Renderiza a view 'index.ejs'
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
}); // Inicia o servidor