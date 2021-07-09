import withSession from '../../utils/session'
import runMiddleware from '../../utils/runMiddleware'

import Cors from 'cors'

// Initializing the cors middleware
const cors = Cors({
    methods: ['GET'],
})


export default withSession(async (req, res) => {

    await runMiddleware(req, res, cors)

    const user = req.session.get("user");
    if (user) {
        res.send({ user });
    } else {
        res.send({ error: 'Not logged in' });
    }
})