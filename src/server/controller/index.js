const express = require('express');
const { getTodo, addTodo } = require('./todo');

const router = express.Router();

router.get('/todos', getTodo);
router.post('/todos', addTodo);

module.exports = router;
