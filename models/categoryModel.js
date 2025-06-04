import mongoose from 'mongoose';

const categorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Category name is required'],
      trim: true,
      maxlength: [50, 'Category name cannot exceed 50 characters']
    }
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
  }
);

// Virtual for items in this category
categorySchema.virtual('items', {
  ref: 'Item',
  localField: '_id',
  foreignField: 'category'
});

const Category = mongoose.model('Category', categorySchema);

export default Category;