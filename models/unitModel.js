import mongoose from 'mongoose';

const unitSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Unit name is required'],
      unique: true,
      trim: true,
      maxlength: [30, 'Unit name cannot exceed 30 characters']
    }
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
  }
);

// Virtual for items with this unit
unitSchema.virtual('items', {
  ref: 'Item',
  localField: '_id',
  foreignField: 'unit'
});

const Unit = mongoose.model('Unit', unitSchema);

export default Unit;