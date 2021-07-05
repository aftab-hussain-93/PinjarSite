import dbConnect from '../../utils/dbConnect'
import User from '../../models/User'
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async (req, res) => {
  await dbConnect()
  const users = await User.find({})
  console.log(JSON.stringify(users))
  res.status(200).json({ name: 'John Doe' })
}
