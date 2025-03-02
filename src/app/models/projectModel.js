import { ObjectId } from 'mongodb';
import clientPromise from '../lib/mongodb';

export const getProjectById = async (id) => {
  const client = await clientPromise;
  const db = client.db();
  const project = await db.collection('projects').findOne({ _id: new ObjectId(id) });
  return project;
};

export const getAllProjects = async () => {
  const client = await clientPromise;
  const db = client.db();
  const projects = await db.collection('projects').find({}).toArray();
  return projects;
};

export const createProject = async (projectData) => {
  const client = await clientPromise;
  const db = client.db();
  const result = await db.collection('projects').insertOne(projectData);
  return result.insertedId;
};

export const updateProject = async (id, projectData) => {
  const client = await clientPromise;
  const db = client.db();
  const result = await db.collection('projects').updateOne({ _id: new ObjectId(id) }, { $set: projectData });
  return result.modifiedCount;
};

export const deleteProject = async (id) => {
  const client = await clientPromise;
  const db = client.db();
  const result = await db.collection('projects').deleteOne({ _id: new ObjectId(id) });
  return result.deletedCount;
};
