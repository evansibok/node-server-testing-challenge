const router = require('express').Router();

router.get('/', (req, res) => {
  res.json('User router works!')
})

module.exports = router;