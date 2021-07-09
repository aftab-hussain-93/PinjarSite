import runMiddleware from '../../utils/runMiddleware'
import withSession from '../../utils/session'

import Cors from 'cors'

// Initializing the cors middleware
const cors = Cors({
    methods: ['GET'],
})

export default withSession(async (req, res) => {
    await runMiddleware(req, res, cors)
    const { method } = req

    switch (method) {
        case 'GET':
            try {
                req.session.destroy();
                res.send("Logged out");
                // res.status(200).json({ L })
            } catch (e) {
                res.status(400).json({ error: true })
            }
            break
        default:
            res.status(500).json({ error: true })
            break
    }
})