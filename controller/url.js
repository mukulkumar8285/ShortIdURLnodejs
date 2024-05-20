// const uid = new ShortUniqueId({ length: 10 });

const shortid = require("shortid");

const URL = require("../routes/url")
// uid.rnd();
async function GenerateShortURl(req , res){
const body  = req.body;
if(!body.url ) return res.status(400).json( {
    message : "Please enter a valid url"
})
const ShortID = shortid();
await URL.create({
    ShortId : ShortID,
    redirectURL:body.url,
    visitHistory : [],
})
return res.json({id:ShortID});
}

async function GetAnaltyics(req , res){
    const shortId = req.params.shortId;
    const result = await URL.findOne({shortId});
    return res.json({totalclicks:result.visitHistory.lenght , analytics:result.visitHistory})

}

module.exports = {
    GenerateShortURl,
    GetAnaltyics,
}