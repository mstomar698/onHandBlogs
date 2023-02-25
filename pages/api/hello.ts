import { NextApiHandler } from 'next'

const handler: NextApiHandler = (req, res) => {
  const name = req.query.name || 'World'
  res.status(200).send(`Hello, ${name}!`)
}

export default handler
