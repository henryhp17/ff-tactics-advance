var mongoose = require('mongoose');
var Schema = mongoose.Schema;

module.exports = mongoose.model('Status', new Schema({
  race: Schema.Types.ObjectId,
  job: Schema.Types.ObjectId,
  hp: { type: Number, required: true, default: 0 },
  mp: { type: Number, required: true, default: 0 },
  attack: { type: Number, required: true, default: 0 },
  defense: { type: Number, required: true, default: 0 },
  magic: { type: Number, required: true, default: 0 },
  resist: { type: Number, required: true, default: 0 },
  speed: { type: Number, required: true, default: 0 }
}));