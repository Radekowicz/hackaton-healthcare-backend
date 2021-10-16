const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
  //schemat - przepis na dokument/rekord - struktura
  queueLength: {
    type: Number,
    required: [true, 'Length must be specified'],
  },
  expectedWaitTime: {
    type: Number,
    required: [true, 'Wait time must be specified'],
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  place: {
    type: mongoose.Schema.ObjectId,
    ref: 'Place',
  },
});

const Data = mongoose.model('Data', dataSchema);

module.exports = Data;
