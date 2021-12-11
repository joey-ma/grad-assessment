const Todo = require('./model.js');
const controller = {};

controller.read = (req, res, next) => {
  Todo.find({}, (err, result) => {
    if (err) {
      return next(err);
    }
    res.locals.allTodos = result;
    return next();
  });
};

controller.add = (req, res, next) => {
  const { data } = req.body;
  const addToList = { todoItem: data };
  Todo.create(addToList, (err, result) => {
    if (err) {
      return next(err);
    } else {
      res.locals.result = result;
      return next();
    }
  });
};

controller.update = (req, res, next) => {
  const id = req.params.id;
  Todo.findByIdAndUpdate(id, req.body, (err, result) => {
    if (err) {
      return next(err);
    } else {
      return next();
    }
  });
};

controller.delete = (req, res, next) => {
  const id = { id: req.params.id };
  Todo.findOneAndDelete(id, (err, result) => {
    if (err) {
      return next(err);
    }
    return next();
  });
};

module.exports = controller;
