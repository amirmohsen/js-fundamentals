const logger = require('../utils/logger');

let hello;
logger.log(hello);
hello = 'world';
logger.log(hello);
hello = 'universe';
logger.log(hello);

const test = 'me';
logger.log(test);

var life = 'noooo!!!';
logger.log(life);
var life = 123;
logger.log(life);
var life;
logger.log(life);
