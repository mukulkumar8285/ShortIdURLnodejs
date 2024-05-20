const mongoose = require("mongoose");
mongoose.set("strictQuery" , true);

async function connectmongoDb(url){
    return mongoose.connect(url);
}

module.exports={
    connectmongoDb,
}