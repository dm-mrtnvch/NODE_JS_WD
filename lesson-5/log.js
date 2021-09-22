const EventEmitter = require('events')
const util = require('util')

class Logger {
    log = msg => {
        console.log(msg);
        this.emit('look_at_this', {id: 1, text: 'arg to emmitter.on'})
    }
}

util.inherits(Logger, EventEmitter)
module.exports = Logger
