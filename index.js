var package = require('./package');
module.exports = {
  name: package.name,
  install: require('./lib')
};
