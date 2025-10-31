const express = require('express');
const bodyParser = require('body-parser');
const connection = require('./database/databse');
const ModelPergunta = require('./database/models/perguntas');

try {
  connection.authenticate();
  console.log('Conexão com o banco de dados realizada com sucesso!');
} catch (error) {
  console.error('Não foi possível conectar ao banco de dados:', error);
}

const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  ModelPergunta.findAll({raw: true, order: [['id', 'DESC']]}).then(perguntas => {
    console.log(perguntas);
    res.render('index', {
      perguntas: perguntas
    })
  })
});

app.get('/perguntar', (req, res)=> {
    res.render('perguntar');
})

app.post('/salvarpergunta', (req, res)=> {
  var titulo = req.body.titulo;
  var descricao = req.body.descricao;

  ModelPergunta.create({
    titulo: titulo,
    descricao: descricao
  }).then(() => {
    console.log('Pergunta criada com sucesso!');
    res.redirect('/');
  }).catch((error) => {
    console.error('Erro ao criar pergunta:', error);
    res.send('Erro ao salvar pergunta');
  });
})

app.listen(port, () => {
  console.log(`Servidor nodeJS rodando na porta ${port}`);
});