var Ability = require('../models/ability');

module.exports = function(router) {

  router.route('/abilities')
  // add new ability to database
      .post(function(req, res) {
        var ability = new Ability();
        ability.name = req.body.name;

        ability.save(function(err) {
          if (err) res.send(err);

          res.json({ message: 'New ability created!' });
        });
      })
      // list all available abilities and their information
      .get(function(req, res) {
        Ability.find(function(err, abilities) {
          if (err) res.send(err);

          res.json(abilities);
        })
      });

  router.route('/abilities/:ability_id')
  // find a specific ability
      .get(function(req, res) {
        Ability.findById(req.params.ability_id, function(err, ability) {
          if (err) res.send(err);

          res.json(ability);
        });
      })
      // update a specific ability
      .put(function(req, res) {
        Ability.findById(req.params.ability_id, function(err, ability) {
          if (err) res.send(err);

          ability.save(function(err) {
            if (err) res.send(err);

            res.json({ message: 'Ability ' + ability.name + ' updated!' });
          });
        });
      })
      // delete a specific ability
      .delete(function(req, res) {
        Ability.remove({
          _id: req.params.ability_id
        }, function(err, ability) {
          if (err) res.send(err);

          res.json({ message: 'Ability ' + ability.name + ' deleted!' });
        });
      });

};