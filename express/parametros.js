// aula 2 - parametros de rotas
const config = require('../config');
const express = require('express');
const app = express();
const listUsers = [];
/*/
    Parâmetros de rotas são valores que são passados na url
    da requisição e são tratados no servidor.
    ex: localhost:3000/usuario/123
*/

app.get('/', (req, res)=> {
    res.send('bem vindo ao sistema!');
})

app.get('/usuario/:id/:nome?', (req, res)=> {
    // O "?" indica que o parâmetro é opcional
    var response;    
    try{
        let user = req.params.id; // obtendo o valor do parâmetro "id" da url
        let nome = req.params.nome; // obtendo o valor do parâmetro "nome" da url
        let userEncontradoo = listUsers.find(u => u == user); // verifica se o usuário já existe na lista
        if(userEncontradoo){
            // se o usuário já existe na lista, retorna a mensagem avisando que o usuário já está na lista
            response = `usuario ${userEncontradoo} já cadastrado, ${nome ? `Bem vindo de volta ${nome}` : ''}`;
        } else {
            // se o usuário não existe na lista, adiciona o usuário na lista e retorna a mensagem de sucesso
            listUsers.push(user);
            response = `usuario ${user} cadastrado com sucesso! ${nome ? `Seja bem vindo ${nome}` : ''}`;
        }
        // exibe a lista de usuários no console
        console.log('Lista de usuários:', listUsers);
        // retorna a mensagem para o usuário
        res.send(response);
    }catch(e){
        res.send('erro no servidor');
    } 
})

app.listen(config.port, ()=> {
    console.log(`servidor rodando na porta ${config.port} em ${config.host}`);
})

// const aula1 = require('./index');
// const aula3 = require('./query_params');