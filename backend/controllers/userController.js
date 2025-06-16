const Task = require('../models/Task');
const User = require('../models/User');
const bcrypt = require('bcryptjs');

// @desc get all users (Admin Only)
// @route GET /api/users
// @access Private/Admin
const getUsers = async (req, res) => {
    try {
        const users = await User.find({role: 'member'}).select('-password');

            //Add task count to each user
        const usersWithTaskCount = await Promise.all(users.map(async (user) => {
            const pendingTasks = await Task.countDocuments({ assignedTo: user._id, status: 'Tertunda' });
            const inProgressTasks = await Task.countDocuments({ assignedTo: user._id, status: 'Dalam Proses' });
            const completedTasks = await Task.countDocuments({ assignedTo: user._id, status: 'Selesai' });
            return {
                ...user.toObject(),
                pendingTasks,
                inProgressTasks,
                completedTasks 
            };
        }));

        res.status(200).json(usersWithTaskCount);

    } catch (error) {
        res.status(500).json({ message: 'Server Error', error: error.message });
    }
};
 
// @desc get user by id
// @route GET /api/users/:id
// @access Private
const getUserById = async (req, res) => {
    try {
        const user = await User.findById(req.params.id).select('-password');
        if (!user) {
            return res.status(404).json({ message: 'User Tidak Ditemukan !!!' });
        }
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: 'Server Error', error: error.message });
    }
};

// @desc Delete a user (Admin Only)
// @route DELETE /api/users/:id
// @access Private/Admin
//const deleteUser = async (req, res) => {
//   try {
//    } catch (error) {
//        res.status(500).json({ message: 'Server Error', error: error.message });
//    }
//};

module.exports = {
    getUsers,
    getUserById};
    