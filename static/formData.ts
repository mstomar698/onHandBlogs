import clientPromise from '../lib/mongodb';

export default async (req: Request, res: Response) => {
  try {
    const client = await clientPromise;
    // const db = client.db("posts");
    const collection = client.db().collection('posts');

    // const posts = await db.collection("posts").find({}).limit(20).toArray();
    const posts = await collection.find().toArray();

    res.json();
    console.log(posts);
  } catch (e: any) {
    console.error(e);
    throw new Error(e).message;
  }
};
