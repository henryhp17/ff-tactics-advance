var mongoose = require('mongoose');
var Schema = mongoose.Schema;

module.exports = mongoose.model('EquipType', new Schema({
  name: { type: String, required: true, unique: true },
  group: { type: String, required: true },
  description: String
}));