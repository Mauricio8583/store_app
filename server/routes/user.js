const router = require('express').Router();

router.get("/user", (req, res) => {
    res.send("user is working!")
});

router.post("/user", (req, res) => {
    const username = req.body.username;
    res.send("Your username is : " + username)
});

module.exports = router