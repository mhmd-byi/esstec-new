import { ObjectId } from 'mongodb';
import clientPromise from '../lib/mongodb';

export const getExpertiseById = async (id) => {
  const client = await clientPromise;
  const db = client.db();
  const expertise = await db.collection('expertise').findOne({ _id: new ObjectId(id) });
  return expertise;
};

export const getAllExpertise = async () => {
  const client = await clientPromise;
  const db = client.db();
  const expertise = await db.collection('expertise').find({}).toArray();
  return expertise;
};

export const createExpertise = async (expertiseData) => {
  const client = await clientPromise;
  const db = client.db();
  const result = await db.collection('expertise').insertOne(expertiseData);
  return result.insertedId;
};

export const updateExpertise = async (id, expertiseData) => {
  const client = await clientPromise;
  const db = client.db();
  const result = await db.collection('expertise').updateOne({ _id: new ObjectId(id) }, { $set: expertiseData });
  return result.modifiedCount;
};

export const deleteExpertise = async (id) => {
  const client = await clientPromise;
  const db = client.db();
  const result = await db.collection('expertise').deleteOne({ _id: new ObjectId(id) });
  return result.deletedCount;
};
