var mongoose = require('mongoose');
var Schema = mongoose.Schema;

module.exports = mongoose.model('Accessory', new Schema({
  name: { type: String, required: true, unique: true },
  type: Schema.Types.ObjectId,
  attack: { type: Number, required: true, default: 0 },
  defense: { type: Number, required: true, default: 0 },
  magic_power: { type: Number, required: true, default: 0 },
  magic_resistance: { type: Number, required: true, default: 0 },
  evasion: { type: Number, required: true, default: 0 },
  cost: { type: Number },
  effect : String,
  image_path: String
}));