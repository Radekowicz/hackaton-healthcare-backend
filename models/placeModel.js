const mongoose = require('mongoose');

const placeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name must be specified'],
  },
  coordinates: {
    latitude: {
      type: Number,
      required: [true, 'Latitude must be specified'],
    },
    longitude: {
      type: Number,
      required: [true, 'Longitude must be specified'],
    },
  },
  city: {
    type: String,
    required: [true, 'City must be specified'],
  },
  telephoneNumber: {
    type: String,
    required: [true, 'Telephone number must be specified'],
  },
  numberOfPeople: {
    type: Number,
    required: [true, 'Number of people must be specified'],
  },
  waitTime: {
    type: Number,
    required: [true, 'Wait time of people must be specified'],
  },
});

const Place = mongoose.model('Place', placeSchema);

module.exports = Place;
