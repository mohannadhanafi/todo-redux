const { todo } = require('../database/models');

exports.getTodo = async (req, res) => {
  const todoData = await todo.findAll();
  if (todoData.length === 0) {
    res.send({ error: 'There is no todo yet, you can add the first one' });
  } else {
    res.send({ todoData });
  }
};

exports.addTodo = async (req, res) => {
  const { todoData } = req.body;
  await todo.create(todoData);
  res.send({ message: 'Adding to do done' });
};
