const mongoose=require("mongoose")
const schema=mongoose.Schema(
    {
        "title":String,
        "des":String,
        "date":String,
        "dur":String,
        "venue":String,
        "train":String
    }
)
let coursemodel=mongoose.model("courses",schema);
module.exports={coursemodel}