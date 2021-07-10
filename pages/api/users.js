// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import dbConnect from '../../utils/dbConnect'
import User from '../../models/User'
import NextCors from 'nextjs-cors';

export default async (req, res) => {

    await NextCors(req, res, {
        // Options
        methods: ['GET', 'POST'],
        origin: '*',
        optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
    });

    const { method } = req

    await dbConnect()

    switch (method) {
        case 'GET':
            try {
                const allusers = await User.find({})
                res.status(200).json({ success: true, users: allusers })
            } catch (error) {
                res.status(400).json({ success: false })
            }
            break
        case 'POST':
            try {
                const userData = req.body
                const user = await User.create(userData)
                res.status(201).json({ success: true, data: user })
            } catch (error) {
                res.status(400).json({ success: false })
            }
            break
        default:
            res.status(400).json({ success: false })
            break
    }

}