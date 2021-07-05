import { withIronSession } from "next-iron-session";

function handler(req, res, session) {
    req.session.destroy();
    res.send("Logged out");
}

export default withIronSession(handler, {
    password: process.env.SECRET_COOKIE_PASSWORD,
    cookieName: "id_token",
    // if your localhost is served on http:// then disable the secure flag
    cookieOptions: {
        secure: process.env.NODE_ENV === "production",
    },
});