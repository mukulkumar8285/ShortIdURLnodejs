const express = require("express");
const {GenerateShortURl , GetAnaltyics} = require("../controller/url")

const router = express.Router();

router.post("/" , GenerateShortURl);
router.get("/analytics/:shortId" , GetAnaltyics)


module.exports = router;