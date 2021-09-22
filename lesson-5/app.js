const Logger = require('./log');
const logger = new Logger();

logger.on('look_at_this', (args) => {
    const {id, text} = args;
    console.log(`here's ${id} and here's ${text}`);
});

logger.log('User logged!');