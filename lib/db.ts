import { MongoClient } from 'mongodb';

if (!process.env.MONGODB_URI) {
  throw new Error('Invalid/Missing environment variable: "MONGODB_URI"');
}

const uri = process.env.MONGODB_URI;

const client = new MongoClient(uri);

export async function connect() {
  await client.connect();
  console.log('Connected to MongoDB');
}

export async function disconnect() {
  await client.close();
  console.log('Disconnected from MongoDB');
}

export default client;
