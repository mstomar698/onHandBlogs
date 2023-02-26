import { Request, Response } from 'express';
import clientPromise from '../../lib/mongodb';

interface PostData {
  name: string;
  email: string;
  about: string;
  place: string;
  twitter: string;
  instagram: string;
}

export default async (req: Request, res: Response): Promise<void> => {
  try {
    const client = await clientPromise;
    const collection = client.db().collection<PostData>('posts');
    const { name, email, place, about, instagram, twitter } = req.body;

    const post = await collection.insertOne({
      name,
      email,
      place,
      about,
      twitter,
      instagram,
    });

    res.status(200).json({ message: 'Data saved successfully', data: post });
  } catch (e: any) {
    console.error(e);
    throw new Error(e).message;
  }
};

