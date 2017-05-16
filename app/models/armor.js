var mongoose = require('mongoose');
var Schema = mongoose.Schema;

module.exports = mongoose.model('Armor', new Schema({
  name: { type: String, required: true, unique: true },
  type: Schema.Types.ObjectId,
  description: String,
  attack: { type: Number, default: 0 },
  defense: { type: Number, required: true, default: 0 },
  magic_power: { type: Number, default: 0 },
  magic_resistance: { type: Number, required: true, default: 0 },
  cost: { type: Number },
  skills: Schema.Types.Mixed,
  effect : String,
  image_path: String
}));