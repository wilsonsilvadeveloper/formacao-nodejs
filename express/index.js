const express = require('express'); // importando o express
const app = express(); // iniciando o express
const port = 3000; // definindo a porta onde o servidor irá rodar

app.listen(port ,()=> {
    console.log('Server is running');
})