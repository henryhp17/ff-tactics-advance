var mongoose = require('mongoose');
var Schema = mongoose.Schema;

module.exports = mongoose.model('Race', new Schema({
  name: { type: String, required: true, unique: true },
  description: String,
  totema: String,
  image_path: String
}));