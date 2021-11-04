const router = require("express").Router();

router.get("/usertest" , (req, res) => {
    res.send("router sucess");
});

router.post("/userposttest", (req, res) => {
    const username = req.body.username;
    res.send("username correct");   
});

module.exports = router;