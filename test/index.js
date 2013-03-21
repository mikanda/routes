var routes = require('..');
require('should');
function Application() {
  this._cache = {};
}
Application.prototype.register = function (name, scope) {
  this._cache[name] = scope;
};
Application.prototype.require = function (name) {
  return this._cache[name];
};
Application.prototype.get = function (route) {
  route.should.equal('/route');
};
Application.prototype.post = function (route) {
};
Application.prototype.del = function (route) {
};
Application.prototype.head = function (route) {
};
describe('Routes', function () {
  var app;
  before(function (done) {
    app = new Application();
    routes(app, done);
  });
  it('should act correcly', function (done) {
    routes = app.require('routes');
    function route(app) {
      app.get();
      app.post();
      app.del();
      app.head();
      done();
    }
    routes([ [ '/route', route ] ]);
  });
});
