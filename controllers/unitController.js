import Unit from '../models/unitModel.js';
import { createOne, getAll, getOne, updateOne, deleteOne } from './handlerFactory.js';

// @desc    Create new unit
// @route   POST /api/units
// @access  Private
export const createUnit = createOne(Unit);

// @desc    Get all units
// @route   GET /api/units
// @access  Private
export const getUnits = getAll(Unit);

// @desc    Get single unit
// @route   GET /api/units/:id
// @access  Private
export const getUnit = getOne(Unit, { path: 'items' });

// @desc    Update unit
// @route   PUT /api/units/:id
// @access  Private
export const updateUnit = updateOne(Unit);

// @desc    Delete unit
// @route   DELETE /api/units/:id
// @access  Private
export const deleteUnit = deleteOne(Unit);