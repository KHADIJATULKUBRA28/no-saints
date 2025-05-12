const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Wishlist endpoint');
});

module.exports = router;