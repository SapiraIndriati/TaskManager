const express = require('express');
const { adminOnly, protect } = require('../middlewares/authMiddleware');
const { getUsers, getUserById } = require('../controllers/userController');

const router = express.Router();

//User Managfement Routes
router.get('/', protect, adminOnly, getUsers);
router.get('/:id', getUserById);
//router.delete('/:id', protect, adminOnly, deleteUser);

module.exports = router;