const express = require('express');
const dataController = require('./../controllers/dataController.js');

const dataRouter = express.Router();

dataRouter
  .route('/')
  .get(dataController.getAllData)
  .post(dataController.createData);

dataRouter.route('/:id').get(dataController.getData);

module.exports = dataRouter;
