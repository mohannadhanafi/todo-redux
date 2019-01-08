const express = require('express');
const {
  getTodo, addTodo, update, deleteTodo,
} = require('./todo');

const router = express.Router();

router.get('/todos', getTodo);
router.post('/todos', addTodo);
router.put('/todos', update);
router.delete('/todos', deleteTodo);

module.exports = router;
