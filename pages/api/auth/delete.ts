import clientPromise from '@/lib/mongodb';
import { Request, Response } from 'express';

export default async (req: Request, res: Response) => {
  try {
    const client = await clientPromise;
    // const db = client.db("posts");
    const collection = client.db().collection('posts');

    const posts = await collection.deleteMany([]);
    res.json(posts);
    console.log('deleted');
  } catch (e: any) {
    console.error(e);
    throw new Error(e).message;
  }
};
