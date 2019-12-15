const express = require('express');
const router = express.Router();

const TODOS = [{
  text: 'Call Plumber'
}, {
  text: 'Pay bills'
}];

router.get('/', function(req, res) {
  res.json({ todos: TODOS });
});

module.exports = router;