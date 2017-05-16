var Job = require('../models/job');

module.exports = function(router) {

  router.route('/jobs')
      // add new job to database
      .post(function(req, res) {
        var job = new Job();
        job.name = req.body.name;

        job.save(function(err) {
          if (err) res.send(err);

          res.json({ message: 'New job created!' });
        });
      })
      // list all available jobs and their information
      .get(function(req, res) {
        Job.find(function(err, jobs) {
          if (err) res.send(err);

          res.json(jobs);
        })
      });

  router.route('/jobs/:job_id')
      // find a specific job
      .get(function(req, res) {
        Job.findById(req.params.job_id, function(err, job) {
          if (err) res.send(err);

          res.json(job);
        });
      })
      // update a specific job
      .put(function(req, res) {
        Job.findById(req.params.job_id, function(err, job) {
          if (err) res.send(err);

          job.save(function(err) {
            if (err) res.send(err);

            res.json({ message: 'Job ' + job.name + ' updated!' });
          });
        });
      })
      // delete a specific job
      .delete(function(req, res) {
        Job.remove({
          _id: req.params.job_id
        }, function(err, job) {
          if (err) res.send(err);

          res.json({ message: 'Job ' + job.name + ' deleted!' });
        });
      });

};