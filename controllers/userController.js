import User from '../models/userModel.js';
import { getAll, getOne, updateOne, deleteOne } from './handlerFactory.js';

// @desc    Get all users
// @route   GET /api/users
// @access  Private/Admin
export const getUsers = getAll(User);

// @desc    Get single user
// @route   GET /api/users/:id
// @access  Private/Admin
export const getUser = getOne(User);

// @desc    Update user
// @route   PUT /api/users/:id
// @access  Private/Admin
export const updateUser = updateOne(User);

// @desc    Delete user
// @route   DELETE /api/users/:id
// @access  Private/Admin
export const deleteUser = deleteOne(User);

// @desc    Get current user profile
// @route   GET /api/users/me
// @access  Private
export const getMe = (req, res, next) => {
  req.params.id = req.user.id;
  next();
};

// @desc    Update current user profile
// @route   PUT /api/users/updateMe
// @access  Private
export const updateMe = async (req, res) => {
  try {
    // 1) Create error if user tries to update password
    if (req.body.password) {
      return res.status(400).json({
        success: false,
        message: 'This route is not for password updates. Please use /updatePassword',
      });
    }
    
    // 2) Filter out unwanted fields that are not allowed to be updated
    const filteredBody = filterObj(req.body, 'name', 'email');
    
    // 3) Update user document
    const updatedUser = await User.findByIdAndUpdate(req.user.id, filteredBody, {
      new: true,
      runValidators: true
    });
    
    res.status(200).json({
      success: true,
      data: {
        user: updatedUser
      }
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message
    });
  }
};

// Filter object fields
const filterObj = (obj, ...allowedFields) => {
  const newObj = {};
  Object.keys(obj).forEach(el => {
    if (allowedFields.includes(el)) newObj[el] = obj[el];
  });
  return newObj;
};