'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var TaskSchema = new Schema({
  name: {
    type: String,
    required: 'Enter Streamer Name'
  },
  Created_date: {
    type: Date,
    default: Date.now
  },
  status: {
    type: [{
      type: String,
      enum: ['active', 'inactive']
    }],
    default: ['active']
  }
});

module.exports = mongoose.model('Streamers', TaskSchema);