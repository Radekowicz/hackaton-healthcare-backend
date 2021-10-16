// const fs = require('fs');
const AppError = require('../utils/appError.js');
const catchAsync = require('../utils/catchAsync.js');
const factory = require('./handlerFactory.js');
const Data = require('../models/dataModel.js');
const Place = require('../models/placeModel.js');

exports.createData = catchAsync(async (req, res, next) => {
  const data = await Data.find({}).sort({ createdAt: 'asc' });
  if (data.size >= 3) {
    const document = await Data.findByIdAndDelete(data[0]._id);
    if (!document) {
      return next(new AppError('No document found with that ID', 404));
    }
  }
  const place = await Place.findById(req.body.placeId);
  const expectedWaitTime = Number(req.body.peopleAmount) * 30;
  const newDoc = await Data.create({
    queueLength: req.body.peopleAmount,
    expectedWaitTime,
    place: place._id,
  });
  res.status(201).json({
    status: 'success',
    data: {
      data: newDoc,
    },
  });
});

exports.getAllData = factory.getAll(Data);

exports.getData = factory.getOne(Data);
