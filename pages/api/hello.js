import dbConnect from '../../utils/dbConnect'
import User from '../../models/User'
import { generateHash } from '../../utils/auth'
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async (req, res) => {
  const hash = generateHash("password")
  console.log(hash)
  // await dbConnect()
  // const users = await User.find({})
  // console.log(JSON.stringify(users))
  res.status(200).json({ name: 'John Doe' })
}
