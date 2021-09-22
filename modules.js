
const os = require('os')
console.log(os.platform(), os.release());

const {userName: user, sayHi} = require('./test')
const name = 'dima'
console.log(sayHi(name));

module.exports = name