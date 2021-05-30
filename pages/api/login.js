// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
    res.status(200).json({ token: '1234567' })
}

const userDb = {
    email: 'test@email.com',
    password: '123456'
}