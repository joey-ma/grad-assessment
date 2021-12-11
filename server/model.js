const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose
  .connect('ADD URI HERE', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Connected to Mongo DB.'))
  .catch((err) => console.log(err));

const todoSchema = new Schema(
  {
    todoItem: { type: String, required: false },
  },
  { collection: 'Todo' }
);

module.exports = mongoose.model('Todo', todoSchema);
