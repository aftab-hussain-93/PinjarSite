import { withIronSession } from "next-iron-session";
import { userCookieName } from '../../utils/contants'
import dbConnect from '../../utils/dbConnect'
import runMiddleware from '../../utils/runMiddleware'
import withSession from '../../utils/session'
import Cors from 'cors'
import User from '../../models/User'
import { comparePassword } from '../../utils/auth'

// Initializing the cors middleware
const cors = Cors({
    methods: ['POST'],
})

export default withSession(async (req, res) => {
    await runMiddleware(req, res, cors)

    const { method } = req
    await dbConnect()

    switch (method) {
        case 'POST':
            try {
                const userData = req.body
                const foundUser = await User.findOne({
                    email: userData.email
                }).exec()

                if (!foundUser) return res.status(400).json({ status: false, user: true })

                const isLoginValid = comparePassword(foundUser.password, userData.password)

                if (!isLoginValid) return res.status(400).json({ status: false, password: true })

                req.session.set("user", {
                    id: 230,
                    admin: true,
                });

                await req.session.save();
                // res.send("Logged in");

                res.status(201).json({ data: true })
            } catch (e) {
                res.status(500).json({ error: true })
            }
            break
        default:
            res.status(500).json({ error: true })
            break
    }
})
