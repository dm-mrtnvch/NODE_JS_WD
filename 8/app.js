
const http = require('http')
const PORT = 3005

const server = http.createServer((req, res) => {
    console.log('server request');
    console.log(req.url, req.method);

    res.setHeader('Content-Type', 'application/json')

    const data = JSON.stringify([
        {name: 'raz', age: 1},
        {name: 'dva', age: 2}
    ])
    res.end(data)
})

server.listen(PORT, 'localhost', (error) => {
    error ? console.log(error) : console.log(`listening port ${PORT}`)
})