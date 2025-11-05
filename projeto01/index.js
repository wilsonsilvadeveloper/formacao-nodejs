const express = require('express');
const bodyParser = require('body-parser');
const connection = require('./database/databse');
const ModelPergunta = require('./database/models/perguntas');
const ModelResposta = require('./database/models/Respostas');

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

app.get('/pergunta/:id', (req, res)=> {
  var id = req.params.id;
  ModelPergunta.findOne({where: {id: id}}).then(pergunta => {
    if(pergunta != undefined){
      res.render('pergunta', {
        pergunta: pergunta
      });
    } else {
      res.redirect('/');
    }
  })
})

app.post('/responder', (req, res)=> {
  var corpo = req.body.resposta;
  var perguntaId = req.body.id_pergunta;
  ModelResposta.create({
    corpo: corpo,
    perguntaId: perguntaId
  }).then(()=>{
    console.log(`Pergunta de id ${perguntaId} respondida com sucesso!`);
    res.redirect('/pergunta/' + perguntaId);
  }).catch((error) => {
    console.error('Erro ao salvar resposta:', error);
    res.send('Erro ao salvar resposta');
  });
})

app.listen(port, () => {
  console.log(`Servidor nodeJS rodando na porta ${port}`);
});