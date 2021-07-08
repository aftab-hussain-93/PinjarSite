import { withIronSession } from "next-iron-session";
import { userCookieName } from '../../utils/contants'

async function handler(req, res) {
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