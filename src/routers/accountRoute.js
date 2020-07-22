const express = require('express');
const router = express.Router();

const controller = require('../controllers/account/accountController');
const authorize = require('../middleware/authorize');

router.post('/', controller.post);
router.put('/change-password', authorize.defaultAuthorization, controller.changePassword);

module.exports = router;