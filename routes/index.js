var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('index', { title: 'Final Fantasy Tactics Advance' });
});

router.get('/jobslist', function(req, res) {
	var db = req.db;
	var ff = db.get('universe');
	ff.find({}, {}, function(e, docs) {
		var jobNames = docs[0].jobs;
		res.render('jobslist', {
			title: 'Final Fantasy Tactics Advance',
			jobs: jobNames
		});
	});
});

router.get('/jobForm', function(req, res) {
	var db = req.db;
	var ff = db.get('universe');
	ff.find({}, {}, function (e, docs) {
		var equipments = docs[0].equipments;
		var races = docs[0].races;
		for (var i = 0; i < equipments.length; i++) {
			if (equipments[i].category == "weapons") var weapons = equipments[i].type;
			if (equipments[i].category == "headgear") var headgear = equipments[i].type;
			if (equipments[i].category == "armor") var armor = equipments[i].type;
		}
		res.render('createJobs', {
			title: 'Final Fantasy Tactics Advance',
			races: races,
			weapons: weapons,
			headgear: headgear,
			armor: armor
		});
	});
});

router.post('/addJob', function(req, res) {
	var db = req.db;
	var newJob["name"] = req.body.jobName;
	newJob["image"] = "";
	newJob["race"] = req.body.race.split(",");
	newJob["growth"] = "";
	newJob[""]
	res.render('addJob', {
		title: 'Final Fantasy Tactics Advance',
		content : req.body.jobName+req.body.stat+req.body.race+req.body.weapons+req.body.headgear+req.body.armor+req.body.shields+req.body.abilities
	});
});

function createJob(req.body) {
	var newJob;
	
	return newJob;
}
module.exports = router;
