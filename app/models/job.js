var mongoose = require('mongoose');
var Schema = mongoose.Schema;

module.exports = mongoose.model('Job', new Schema({
  name: {type: String, default: ''},
  description: String,
  races: [String],
  requirements: Schema.Types.Mixed,
  move_rate: Number,
  jump_rate: Number,
  evade_rate: Number,
  weapon: [Schema.Types.ObjectId],
  head: [Schema.Types.ObjectId],
  body: [Schema.Types.ObjectId],
  shield: Boolean,
  image_path: String
}));