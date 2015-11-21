var path = require('path');
var yamljs = require('yamljs');
module.exports = function (app) {
  app.route('/api/user/:id?')
    .get(function (req, res) {
      if (!req.params.id) {
        var users = getUsers();
        res.end(JSON.stringify(users));
      } else {

      }
    });
};

function getUsers() {
  return yamljs.load(path.join(__dirname, 'users.yml'));
}