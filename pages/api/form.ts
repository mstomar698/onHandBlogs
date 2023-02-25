// export async function POST(request: Request) {
//   const formData = await request.text();
//   const data = JSON.parse(formData);

//   console.log(data);
//   console.log(typeof data);
//   console.log(data.name);

//   return new Response(JSON.stringify(data));
// }
import { NextApiRequest, NextApiResponse } from 'next'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method Not Allowed' })
    return
  }

  const formData = req.body
  console.log(formData)
  console.log(typeof formData);
  console.log(formData.name);

  res.status(200).json({ message: 'Form data received successfully.' })
}