import Item from '../models/itemModel.js';
import { createOne, getAll, getOne, updateOne, deleteOne } from './handlerFactory.js';

// @desc    Create new item
// @route   POST /api/items
// @access  Private
export const createItem = createOne(Item);

// @desc    Get all items
// @route   GET /api/items
// @access  Private
export const getItems = getAll(Item, [
  { path: 'category', select: 'name' },
  { path: 'unit', select: 'name' }
]);

// @desc    Get single item
// @route   GET /api/items/:id
// @access  Private
export const getItem = getOne(Item, [
  { path: 'category', select: 'name' },
  { path: 'unit', select: 'name' }
]);

// @desc    Update item
// @route   PUT /api/items/:id
// @access  Private
export const updateItem = updateOne(Item);

// @desc    Delete item
// @route   DELETE /api/items/:id
// @access  Private
export const deleteItem = deleteOne(Item);