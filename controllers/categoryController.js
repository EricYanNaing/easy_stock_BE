import Category from '../models/categoryModel.js';
import { createOne, getAll, getOne, updateOne, deleteOne } from './handlerFactory.js';

// @desc    Create new category
// @route   POST /api/categories
// @access  Private
export const createCategory = createOne(Category);

// @desc    Get all categories
// @route   GET /api/categories
// @access  Private
export const getCategories = getAll(Category);

// @desc    Get single category
// @route   GET /api/categories/:id
// @access  Private
export const getCategory = getOne(Category, { path: 'items' });

// @desc    Update category
// @route   PUT /api/categories/:id
// @access  Private
export const updateCategory = updateOne(Category);

// @desc    Delete category
// @route   DELETE /api/categories/:id
// @access  Private
export const deleteCategory = deleteOne(Category);