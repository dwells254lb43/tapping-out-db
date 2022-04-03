const router = require('express').Router();
const bottlesType = require('../controllers/bottlesType')

router.post('/bottlesType', bottlesType.create)

module.exports = router;