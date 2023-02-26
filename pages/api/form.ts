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

// import clientPromise from '../../lib/mongodb';

// export default async (req: Request, res: Response) => {
//   try {
//     const client = await clientPromise;
//     const collection = client.db().collection('posts');
//     // const db = client.db('posts');
//     const { name } = req.body;

//     // const post = await db.collection('posts').insertOne({
//     const post = await collection.insertOne({
//       name,
//     });

//     res.json(post);
//     res.status(200).json({ message: 'Data saved successfully' });
//   } catch (e) {
//     console.error(e);
//     throw new Error(e).message;
//   }
// };

// export async function POST(request: Request) {
//   const formData = await request.text();
//   const data = JSON.parse(formData);

//   console.log(data);
//   console.log(typeof data);
//   console.log(data.name);

//   return new Response(JSON.stringify(data));
// }
// import client, { connect } from '@/lib/db';
// import { NextApiRequest, NextApiResponse } from 'next';

// // export default function handler(req: NextApiRequest, res: NextApiResponse) {
// //   if (req.method !== 'POST') {
// //     res.status(405).json({ error: 'Method Not Allowed' })
// //     return
// //   }

// //   const formData = req.body
// //   console.log(formData)
// //   console.log(typeof formData);
// //   console.log(formData.name);

// //   res.status(200).json({ message: 'Form data received successfully.' })
// // }

// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse
// ) {
//   await connect();

//   const { name } = req.body; //, travel, about, email, twitter, instagram
//   const collection = client.db().collection('posts');
//   const result = await collection.insertOne({
//     name,
//     // travel,
//     // about,
//     // email,
//     // twitter,
//     // instagram,
//     // createdAt: new Date(),
//   });

//   console.log(`Inserted document with _id: ${result.insertedId}`);

//   res.status(200).json({ message: 'Data saved successfully' });
// }
