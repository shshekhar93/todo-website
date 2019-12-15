const express = require('express');
const router = express.Router();
const uuidv4 = require('uuid/v4');

const TODOS = [{
  _id: uuidv4(),
  text: 'Call Plumber'
}, {
  _id: uuidv4(),
  text: 'Pay bills'
}];

router.get('/', function(req, res) {
  res.json({ todos: TODOS });
});

router.post('/', function(req, res) {
  const text = req.body.todoText;
  TODOS.push({
    _id: uuidv4(),
    text
  });
  res.json({ sucess: true });
});

module.exports = router;
