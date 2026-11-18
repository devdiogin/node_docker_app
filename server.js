const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
    const data = {
        timedate: new Date().toISOString()
    };

    fs.writeFileSync('data.json', JSON.stringify(data, null, 2));

    res.writeHead(200, {'Content-Type': 'application/json'});
    res.end(JSON.stringify(data));

}).listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});
