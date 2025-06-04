// Factory functions for CRUD operations

// Create document
export const createOne = (Model) => async (req, res) => {
  try {
    const doc = await Model.create(req.body);
    
    res.status(201).json({
      success: true,
      data: doc
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message
    });
  }
};

// Get all documents
export const getAll = (Model, popOptions) => async (req, res) => {
  try {
    // Build query
    let query = Model.find();
    
    // Populate
    if (popOptions) {
      if (Array.isArray(popOptions)) {
        popOptions.forEach(option => {
          query = query.populate(option);
        });
      } else {
        query = query.populate(popOptions);
      }
    }
    
    // Execute query
    const docs = await query;
    
    // Send response
    res.status(200).json({
      success: true,
      results: docs.length,
      data: docs
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message
    });
  }
};

// Get one document
export const getOne = (Model, popOptions) => async (req, res) => {
  try {
    let query = Model.findById(req.params.id);
    
    if (popOptions) {
      if (Array.isArray(popOptions)) {
        popOptions.forEach(option => {
          query = query.populate(option);
        });
      } else {
        query = query.populate(popOptions);
      }
    }
    
    const doc = await query;
    
    if (!doc) {
      return res.status(404).json({
        success: false,
        message: 'No document found with that ID'
      });
    }
    
    res.status(200).json({
      success: true,
      data: doc
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message
    });
  }
};

// Update document
export const updateOne = (Model) => async (req, res) => {
  try {
    const doc = await Model.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });
    
    if (!doc) {
      return res.status(404).json({
        success: false,
        message: 'No document found with that ID'
      });
    }
    
    res.status(200).json({
      success: true,
      data: doc
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message
    });
  }
};

// Delete document
export const deleteOne = (Model) => async (req, res) => {
  try {
    const doc = await Model.findByIdAndDelete(req.params.id);
    
    if (!doc) {
      return res.status(404).json({
        success: false,
        message: 'No document found with that ID'
      });
    }
    
    res.status(204).json({
      success: true,
      data: null
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message
    });
  }
};