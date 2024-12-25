import { ObjectId } from 'mongodb';
import clientPromise from '../lib/mongodb';

export const getClientById = async (id) => {
  const client = await clientPromise;
  const db = client.db();
  const clients = await db.collection('clients').findOne({ _id: new ObjectId(id) });
  return clients;
};

export const getAllClients = async () => {
  const client = await clientPromise;
  const db = client.db();
  const clients = await db.collection('clients').find({}).toArray();
  return clients;
};

export const createClient = async (clientData) => {
  const client = await clientPromise;
  const db = client.db();
  const result = await db.collection('clients').insertOne(clientData);
  return result.insertedId;
};

export const updateClient = async (id, clientData) => {
  const client = await clientPromise;
  const db = client.db();
  const result = await db.collection('clients').updateOne({ _id: new ObjectId(id) }, { $set: clientData });
  return result.modifiedCount;
};

export const deleteClient = async (id) => {
  const client = await clientPromise;
  const db = client.db();
  const result = await db.collection('clients').deleteOne({ _id: new ObjectId(id) });
  return result.deletedCount;
};
