var path = require('path');
var yamljs = require('yamljs');
var _ = require('lodash');
var fs = require('fs');

var SUCCESS_JSON = JSON.stringify({
  'stat': 'SUCCESS'
});
module.exports = function (app, debug) {
  app.route('/api/user/:id?')
    .get(function (req, res) {
      var users = getUsers();
      if (!req.params.id) {
        res.end(JSON.stringify(users));
      } else {
        var targetUser = users.find(function (user) {
          return user.id === req.params.id;
        });
        res.end(JSON.stringify(targetUser));
      }
    })
    .patch(function (req, res) {
      debug('patch body:', req.body);
      var reqUser = req.body;
      var users = getUsers();
      var targetUser = users.find(function (user) {
        return user.id === req.params.id;
      });
      Object.assign(targetUser, reqUser);
      writeBack(users);
      res.end(SUCCESS_JSON);
    });



  function getUsers () {
    return yamljs.load(path.join(__dirname, 'users.yml'));
  }

  function writeBack (users) {
    var yamlString = yamljs.stringify(users);
    debug('new user yml string:', yamlString);
    fs.writeFileSync(path.join(__dirname, 'users.yml'), yamlString);
  }
};

