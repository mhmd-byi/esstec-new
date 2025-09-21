import { ObjectId } from 'mongodb';
import bcrypt from 'bcryptjs';
import clientPromise from '../lib/mongodb';

export const getUserById = async (id) => {
  const client = await clientPromise;
  const db = client.db();
  const user = await db.collection('users').findOne({ _id: new ObjectId(id) });
  return user;
};

export const getAllUsers = async () => {
  const client = await clientPromise;
  const db = client.db();
  const users = await db.collection('users').find({}).toArray();
  return users;
};

export const createUser = async (userData) => {
  const client = await clientPromise;
  const db = client.db();
  
  // Hash password before storing
  const hashedPassword = await bcrypt.hash(userData.password, 12);
  const userWithHashedPassword = {
    ...userData,
    password: hashedPassword,
    createdAt: new Date(),
    updatedAt: new Date()
  };
  
  const result = await db.collection('users').insertOne(userWithHashedPassword);
  return result.insertedId;
};

export const updateUser = async (id, userData) => {
  const client = await clientPromise;
  const db = client.db();
  
  // If password is being updated, hash it
  if (userData.password) {
    userData.password = await bcrypt.hash(userData.password, 12);
  }
  
  const updateData = {
    ...userData,
    updatedAt: new Date()
  };
  
  const result = await db.collection('users').updateOne({ _id: new ObjectId(id) }, { $set: updateData });
  return result.modifiedCount;
};

export const deleteUser = async (id) => {
  const client = await clientPromise;
  const db = client.db();
  const result = await db.collection('users').deleteOne({ _id: new ObjectId(id) });
  return result.deletedCount;
};

// Authentication functions
export const getUserByUsername = async (username) => {
  const client = await clientPromise;
  const db = client.db();
  const user = await db.collection('users').findOne({ username: username });
  return user;
};

export const getUserByEmail = async (email) => {
  const client = await clientPromise;
  const db = client.db();
  const user = await db.collection('users').findOne({ email: email });
  return user;
};

export const verifyPassword = async (password, hashedPassword) => {
  return await bcrypt.compare(password, hashedPassword);
};

export const authenticateUser = async (username, password) => {
  const user = await getUserByUsername(username);
  if (!user) {
    return null;
  }
  
  const isValidPassword = await verifyPassword(password, user.password);
  if (!isValidPassword) {
    return null;
  }
  
  // Return user without password
  const { password: _, ...userWithoutPassword } = user;
  return userWithoutPassword;
};
