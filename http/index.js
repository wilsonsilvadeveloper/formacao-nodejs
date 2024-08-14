const http = require('http');
http.createServer((req, res)=> {
    res.end('Hello world!')
}).listen(3000, ()=> console.log('listening on port 3001'));