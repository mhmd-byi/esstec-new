import { ObjectId } from 'mongodb';
import clientPromise from '../lib/mongodb';

export const getCategoryById = async (id) => {
  const client = await clientPromise;
  const db = client.db();
  const category = await db.collection('categories').findOne({ _id: new ObjectId(id) });
  return category;
};

export const getAllCategories = async () => {
  const client = await clientPromise;
  const db = client.db();
  const categories = await db.collection('categories').find({}).sort({ order: 1 }).toArray();
  return categories;
};

export const createCategory = async (categoryData) => {
  const client = await clientPromise;
  const db = client.db();
  
  // Check if category with same name already exists
  const existingCategory = await db.collection('categories').findOne({ 
    name: { $regex: new RegExp(`^${categoryData.name}$`, 'i') } 
  });
  
  if (existingCategory) {
    throw new Error('Category with this name already exists');
  }
  
  // Get the current highest order
  const lastCategory = await db.collection('categories').findOne({}, { sort: { order: -1 } });
  const nextOrder = lastCategory ? (lastCategory.order || 0) + 1 : 1;
  
  // Add order to category data
  const categoryWithOrder = {
    ...categoryData,
    order: nextOrder
  };
  
  const result = await db.collection('categories').insertOne(categoryWithOrder);
  return result.insertedId;
};

export const updateCategory = async (id, categoryData) => {
  const client = await clientPromise;
  const db = client.db();
  
  // Check if another category with same name already exists (excluding current category)
  if (categoryData.name) {
    const existingCategory = await db.collection('categories').findOne({ 
      name: { $regex: new RegExp(`^${categoryData.name}$`, 'i') },
      _id: { $ne: new ObjectId(id) }
    });
    
    if (existingCategory) {
      throw new Error('Category with this name already exists');
    }
  }
  
  const updateData = {
    ...categoryData,
    updatedAt: new Date()
  };
  
  const result = await db.collection('categories').updateOne({ _id: new ObjectId(id) }, { $set: updateData });
  return result.modifiedCount;
};

export const deleteCategory = async (id) => {
  const client = await clientPromise;
  const db = client.db();
  const result = await db.collection('categories').deleteOne({ _id: new ObjectId(id) });
  return result.deletedCount;
};

export const updateCategoryOrder = async (categoryUpdates) => {
  const client = await clientPromise;
  const db = client.db();
  
  const bulkOps = categoryUpdates.map(({ id, order }) => ({
    updateOne: {
      filter: { _id: new ObjectId(id) },
      update: { $set: { order } }
    }
  }));
  
  const result = await db.collection('categories').bulkWrite(bulkOps);
  return result.modifiedCount;
};
