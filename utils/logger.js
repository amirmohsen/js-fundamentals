const logger = require('tracer').console({
  format: 'L{{line}}: {{message}}'
});

module.exports = logger;
