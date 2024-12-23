import { ObjectId } from 'mongodb';
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
  const result = await db.collection('users').insertOne(userData);
  return result.insertedId;
};

export const updateUser = async (id, userData) => {
  const client = await clientPromise;
  const db = client.db();
  const result = await db.collection('users').updateOne({ _id: new ObjectId(id) }, { $set: userData });
  return result.modifiedCount;
};

export const deleteUser = async (id) => {
  const client = await clientPromise;
  const db = client.db();
  const result = await db.collection('users').deleteOne({ _id: new ObjectId(id) });
  return result.deletedCount;
};
