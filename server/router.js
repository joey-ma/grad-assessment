const express = require('express');
const controller = require('./controller.js');

const router = express.Router();

router.get('/all', controller.read, (req, res) => {
  return res.status(200).json(res.locals.allTodos);
});

router.post('/add', controller.add, (req, res) => {
  return res.status(200).json(res.locals.result);
});

router.put('/update/:id', controller.update, (req, res) => {
  return res.status(200).json(res.locals);
});

router.delete('/delete/:id', controller.delete, (req, res) => {
  return res.status(200).json(res.locals);
});

module.exports = router;
