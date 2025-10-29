const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/perguntar', (req, res)=> {
    res.render('perguntar');
})

app.post('/salvarpergunta', (req, res)=> {
  var titulo = req.body.titulo;
  var descricao = req.body.descricao;
  res.send(`Pergunta recebida! Titulo: ${titulo} Descrição: ${descricao}`);
})

app.listen(port, () => {
  console.log(`Servidor nodeJS rodando na porta ${port}`);
});