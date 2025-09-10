import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI || 'mongodb+srv://mhmd:Mhmd%4066426633@kal-graphql.8ubsnp3.mongodb.net/esstec?retryWrites=true&w=majority';
if (!uri) {
  throw new Error('Please define the MONGODB_URI environment variable');
}

let client: MongoClient;
let clientPromise: Promise<MongoClient>;

const options = {};

if (process.env.NODE_ENV === "development") {
  if (!global._mongoClient) {
    client = new MongoClient(uri, options);
    global._mongoClient = client;
    clientPromise = client.connect();
    global._mongoClientPromise = clientPromise;
  } else {
    client = global._mongoClient;
    clientPromise = global._mongoClientPromise;
  }
} else {
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
}

export default clientPromise;
