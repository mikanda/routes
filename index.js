var async = require('async');
module.exports = function (app, next) {
  var verbs;
  verbs = [
    'get',
    'post',
    'del',
    'head'
  ];
  app.register('routes', install.bind(this, app, verbs));
  next();
};
function install(app, verbs, routes) {
  routes.forEach(function (routeEntry) {
    var route = routeEntry[0],
        handler = routeEntry[1],
        api = Object.create(app);

    /*! Proxy all available verbs to use the route. */

    verbs.forEach(function (verb) {
      api[verb] = app[verb].bind(app, route);
    });
    handler(api);
  });
}
