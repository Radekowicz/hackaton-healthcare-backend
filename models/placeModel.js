const mongoose = require('mongoose');

const placeSchema = new mongoose.Schema({
  //schemat - przepis na dokument/rekord - struktura
  name: {
    type: String,
    required: [true, 'A place must have a name'],
    unique: true,
    trim: true,
  },
  queueLength: {
    type: Number,
    required: [true, 'Length must be specified'],
  },
  coordinates: {
    longitude: {
      type: Number,
    },
    lattitude: {
      type: Number,
    },
  },
  sorId: {
    type: Number,
  },
  address: {
    type: String,
  },
  city: {
    type: String,
  },
  phone: {
    type: String,
  },
});

const Place = mongoose.model('Place', placeSchema);

module.exports = Place;
