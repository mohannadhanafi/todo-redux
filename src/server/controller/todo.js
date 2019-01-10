const Sequelize = require('sequelize');
const { todo } = require('../database/models');

exports.getTodo = async (req, res) => {
  const todoData = await todo.findAll({
    order: [['id']],
  });
  if (todoData.length === 0) {
    res.send({ error: 'There is no todo yet, you can add the first one' });
  } else {
    res.send({ todoData });
  }
};

exports.update = (req, res) => {
  const { todoId } = req.body;
  todo.update({ checked: Sequelize.literal('NOT checked') }, { where: { id: todoId } });
  res.send('done');
};

exports.deleteTodo = (req, res) => {
  const { todoId } = req.body;
  todo.destroy({ where: { id: todoId } });
  res.send('done');
};

exports.addTodo = (req, res) => {
  const { description } = req.body;
  todo.create({ description });
  res.send('done');
};
