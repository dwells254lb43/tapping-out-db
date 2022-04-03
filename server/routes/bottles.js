const router = require('express').Router();
const bottles = require('../controllers/bottles')

router.post('/bottles', bottles.create)

module.exports = router;