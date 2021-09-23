const http = require('http');
const fs = require('fs');
const path = require('path');
const PORT = 3005;

const server = http.createServer((req, res) => {

    res.setHeader('Content-Type', 'text/html');
    const createPath = page => path.resolve(__dirname, 'views', `${page}.html`);

    let basePath = '';
    switch (req.url) {
        case '/':
        case '/home':
        case '/index':
            basePath = createPath('index');
            res.statusCode = 200
            break;
        case '/about-us':
            res.statusCode = 301
            res.setHeader('Location', '/contacts')
            res.end()
        case '/contacts':
            basePath = createPath('contacts');
            res.statusCode = 200
            break;
        default:
            basePath = createPath('error')
            res.statusCode = 404
    }
    fs.readFile(basePath, (err, data) => {
        if (err) {
            console.log(err);
            res.statusCode = 500
            res.end();
        } else {
            res.write(data);
            res.end();
        }
    });

    // res.write('<head><link rel="stylesheet" href="#"></head>')
    // res.write('<h1>hello world!</h1>')
    // res.write('<p>my name is dima</p>')
    // res.end()

    // const data = JSON.stringify([
    //     {name: 'raz', age: 1},
    //     {name: 'dva', age: 2}
    // ])
    //
    // res.end(data)
});

server.listen(PORT, 'localhost', (error) => {
    error ? console.log(error) : console.log(`listening port ${PORT}`);
});