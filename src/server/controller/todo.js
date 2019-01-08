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

exports.addTodo = async (req, res) => {
  const { todoData } = req.body;
  await todo.create(todoData);
  res.send({ message: 'Adding to do done' });
};

exports.update = (req, res) => {
  const { todoId } = req.body;
  todo.update({ checked: Sequelize.literal('NOT checked') }, { where: { id: todoId } });
};

exports.deleteTodo = async (req, res) => {
  const { todoId } = req.body;
  await todo.destroy({ where: { id: todoId } });
  res.send({ message: 'Deleted' });
};
