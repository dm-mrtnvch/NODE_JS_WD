const userName = 'dm'
const sayHi = (userName) => `hello my name is ${userName}`
// console.log(sayHi(userName));

module.exports = {
    userName,
    sayHi
}

// console.log(module.exports);

const name = require('./modules')
console.log(name);