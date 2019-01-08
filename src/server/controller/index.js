const express = require('express');
const { getTodo, addTodo, update } = require('./todo');

const router = express.Router();

router.get('/todos', getTodo);
router.post('/todos', addTodo);
router.post('/updatetodos', update);

module.exports = router;
