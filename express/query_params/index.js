const express = require('express');
const app = express();
const port = 3000;

app.get('/user', (req, res)=> {
    const name_user = req.query.name;
    if(name_user) {
        res.send(`Hello, ${name_user}!`);
    } else {
        res.send('Hello');
    }
})

app.listen(port, ()=> {
    console.log(`Server is running on http://localhost:${port}`);
})