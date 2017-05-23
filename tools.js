var fs = require('fs');
var obj = JSON.parse(fs.readFileSync('jobs.json','utf8'));
fs.writeFileSync('jobs_data.json',JSON.stringify(obj, null, 2),'utf8');