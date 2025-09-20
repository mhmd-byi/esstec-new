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
  const projects = await db.collection('projects').find({}).sort({ position: 1 }).toArray();
  return projects;
};

export const createProject = async (projectData) => {
  const client = await clientPromise;
  const db = client.db();
  
  // Get the current highest position
  const lastProject = await db.collection('projects').findOne({}, { sort: { position: -1 } });
  const nextPosition = lastProject ? (lastProject.position || 0) + 1 : 0;
  
  // Add position to project data
  const projectWithPosition = {
    ...projectData,
    position: nextPosition
  };
  
  const result = await db.collection('projects').insertOne(projectWithPosition);
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

export const updateProjectPositions = async (positionUpdates) => {
  const client = await clientPromise;
  const db = client.db();
  
  const bulkOps = positionUpdates.map(({ id, position }) => ({
    updateOne: {
      filter: { _id: new ObjectId(id) },
      update: { $set: { position } }
    }
  }));
  
  const result = await db.collection('projects').bulkWrite(bulkOps);
  return result.modifiedCount;
};
