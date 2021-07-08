import { withIronSession } from "next-iron-session";
import { userCookieName } from '../../utils/contants'
import NextCors from 'nextjs-cors';

import Cors from 'cors'

// Initializing the cors middleware
const cors = Cors({
    methods: ['GET', 'HEAD'],
})

// Helper method to wait for a middleware to execute before continuing
// And to throw an error when an error happens in a middleware
function runMiddleware(req, res, fn) {
    return new Promise((resolve, reject) => {
        fn(req, res, (result) => {
            if (result instanceof Error) {
                return reject(result)
            }

            return resolve(result)
        })
    })
}

async function handler(req, res) {

    await runMiddleware(req, res, cors)

    // get user from database then:
    req.session.set("user", {
        id: 230,
        admin: true,
    });
    await req.session.save();
    res.send("Logged in");
}

export default withIronSession(handler, {
    password: process.env.SECRET_COOKIE_PASSWORD,
    cookieName: userCookieName,
    // if your localhost is served on http:// then disable the secure flag
    cookieOptions: {
        secure: process.env.NODE_ENV === "production",
    },
});