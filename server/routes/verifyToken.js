const jst = require("jsonwebtoken");
require("dotenv").config();

const verifyToken = (req, res, next) => {
    const header = req.headers.token;
     if(header){
        const token = header.split(" ")[1];
        jst.verify(token, process.env.JST_KEY, (err, user) => {
            if(err){
                res.status(403).json("Access not allowed");
            }
            req.user = user;
            next();
        });
    }else{
        res.status(401).json("Not logged in");
    }
}

const verifyAuthorization = (req, res, next) => {
    verifyToken(req, res, () => {
        if(req.user.id === req.params.id || req.user.isAdmin==true){
            next()        
        } else{
            res.status(403).json("Access not allowed")
        }
    })
}

const verifyAdmin = (req, res, next) => {
    verifyToken(req, res, () => {
        if(req.user.isAdmin==true){
            next()        
        } else{
            res.status(403).json("Access not allowed")
        }
    })
}

module.exports = {verifyToken, verifyAuthorization, verifyAdmin}