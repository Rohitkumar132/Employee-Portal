const express = require("express");
const router = express.Router();

router
    .get("/*", (req, res) =>
        res.send(`<h1 style="text-align: center; background-image: linear-gradient(to right, #3b82f6, #ef4444); -webkit-background-clip: text; background-clip: text; color: transparent;">You just lost your way.</h1>`))


module.exports = router;