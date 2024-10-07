const winston = require('winston');
const expressWinston = require('express-winston');

const winstonInstance = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    transports: [
        new winston.transports.Console({
            format: winston.format.combine(
                winston.format.colorize(),
                winston.format.simple()
            ),
        })
    ],

});

const logger = expressWinston.logger({
    winstonInstance,
    meta: false,
    msg: 'HTTP {{req.method}} {{req.url}} {{res.statusCode}} {{res.responseTime}}ms',
    colorStatus: true,
    expressFormat: true,
});

module.exports = logger;
