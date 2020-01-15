const logger = require('../utils/logger');

function test() {
  logger.log(hello);
  var hello = 'world';
  logger.log(hello);
}

test();
