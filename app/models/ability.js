var mongoose = require('mongoose');
var Schema = mongoose.Schema;

module.exports = mongoose.model('Ability', new Schema({
  name: { type: String, required: true, unique: true },
  description: String
}));