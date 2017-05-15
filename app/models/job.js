var mongoose = require('mongoose');

module.exports = mongoose.model('Job', {
  name: {type: String, default: ''}
});