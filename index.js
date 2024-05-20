const express = require("express");
const {connectmongoDb} = require("./connect");
const URL  = require("./models/url")
const UrlRouter = require("./routes/url")

const server = express();

const port = 3000;

server.use("/url" , UrlRouter);

server.get("/:shortId" , async (req, res)=>{
    const shortId = req.params.shortId;
     const entry =  await URL.findOneAndUpdate(
    {
        shortId,
    },{
        $push:{
            visitHistory:{
               timestemp: Date.now(),
            }
        },
    }
);
res.redirect(entry.redirectUrl);
})

connectmongoDb("mongodb://localhost:27017/short-url")
.then(()=>console.log("monodb connect"))

server.use(express.json());
server.listen(port, ()=>{
    console.log("Server is running on port 3000");
})