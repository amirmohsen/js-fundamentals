const logger = require('../utils/logger');

require('./global');

logger.log(something);

let another = 'another'

function test() {
  var whatup = 'whatup';
  logger.log(another);
  logger.log(whatup);

  function inner() {
    var whatup = 'notmuch';
    let another = 'okay';
    logger.log(another);
    logger.log(whatup);

    if (true) {
      logger.log(whatup);
      var whatup = 'notmuch';
      logger.log(whatup);
      let another = 'ha';
      logger.log(another);

      for (let i = 0; i < 5; i += 1) {
        let another = 'go away';
        logger.log(another);
        break;
      }
    }

    logger.log(whatup);

    {
      let another = 'oh wow!';
      logger.log(another);
    }

    logger.log(another);
  }

  inner();

  logger.log(another);
}

test();
