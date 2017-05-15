var job = require('./models/job');

module.exports = function(app) {
  // server routes for API calls and authentication ===

  // list all available jobs and their information
  app.get('/api/jobs', function(req, res) {

    // use mongoose to get all jobs in database
    job.find(function(err, jobs) {
      if (err) res.send(err);

      // return all jobs in JSON format
      res.json(nerds);
    });
  });

  // add new job to the database
  // delete existing job in the database


  // front end routes to for user interface ===

  // dashboard page
  app.get('*', function(req, res) {
    res.sendFile('./public/views/index.html');
  });

};