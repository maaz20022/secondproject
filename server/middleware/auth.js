const Users = require('../models/userSchema');

const jwt = require('jsonwebtoken')

const authenticate = async (req, res, next) => {
    try {
        const token = req.cookies.jwt;
        if (!token) {
            res.status(401).send("no token")
        } else {
            const verifyToken = jwt.verify(token.process.even, SECRET_KEY);
            const rootUser = await Users.findOne({ _id: verifyToken_id, "tokens.token": token });
            if (!rootUser) {
                res.status(401).send("User not found")
            }
            else {
                res.status(200).send("Autorized user")
            }
        }
        next()
    } catch (error) {
        res.status(401).send("error")
        console.log(error)
    }
}
module.exports = authenticate;







