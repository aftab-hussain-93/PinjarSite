import { withIronSession } from "next-iron-session";

function handler(req, res, session) {
    const user = req.session.get("user");
    if (user) {
        res.send({ user });
    } else {
        res.send({ error:'Not logged in' });
    }
}

export default withIronSession(handler, {
    password: process.env.SECRET_COOKIE_PASSWORD,
    cookieName: "id_token",
    // if your localhost is served on http:// then disable the secure flag
    cookieOptions: {
        secure: process.env.NODE_ENV === "production",
    },
});