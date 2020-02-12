const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.redirect('/restaurants');
});
router.use('/restaurants', require('./restaurants'));

module.exports = router;
