var path = require('path');

module.exports = function(app, router) {
  // server routes for API calls and authentication ===
  require('./routes/jobRoute')(router);
  require('./routes/abilityRoute')(router);

  // register all API router to the application
  app.use('/api', router);

  // front end routes to for user interface ===
  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, '../public', 'index.html'));
  });

};