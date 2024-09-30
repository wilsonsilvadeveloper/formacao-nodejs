// aula 1 - Rotas
const express = require('express'); // importando o express
const app = express(); // iniciando o express
const port = 3000; // definindo a porta onde o servidor irá rodar

// definindo as rotas da aplicação
/* O que são Rotas?
   Rotas são caminhos definidos na nossa aplicação que permitem a interação do cliente com o servidor.
   Elas são responsáveis por receber uma requisição HTTP (como GET, POST, PUT, DELETE), processá-la, 
   e devolver uma resposta ao cliente.

   Em outras palavras, uma rota é uma combinação de um caminho (URL) e um método HTTP. 
   Por exemplo, podemos ter uma rota que faz uma consulta no banco de dados, manipula strings, 
   realiza cálculos, serve arquivos estáticos e etc...

   Sem as rotas, o cliente não consegue se comunicar com o servidor, 
   o que tornaria a aplicação inacessível. As rotas também ajudam a organizar 
   o código, tornando mais fácil a manutenção e a extensão da aplicação.
*/

app.get('/', (req, res)=> { // rota padrão, ex: localhost:3000/
    res.send('Olá mundo'); // enviando uma resposta ao cliente
})

app.listen(port ,()=> {
    console.log('Server is running');
})