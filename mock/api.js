var path = require('path');
var yamljs = require('yamljs');
module.exports = function (app) {
  app.route('/api/user/:id?')
    .get(function (req, res) {
      var users = getUsers();
      if (!req.params.id) {
        res.end(JSON.stringify(users));
      } else {
        var targetUser = users.filter(function (user) {
          return user.id === req.params.id;
        })[0];
        res.end(JSON.stringify(targetUser));
      }
    });
};

function getUsers() {
  return yamljs.load(path.join(__dirname, 'users.yml'));
}