const express=require("express")
const mongoose=require("mongoose")
const cors=require("cors")
const {coursemodel}=require("./models/course")

const app=express()
app.use(cors())
app.use(express.json())
mongoose.connect("mongodb+srv://sree:sree2002@cluster0.n63e6.mongodb.net/coursedb?retryWrites=true&w=majority&appName=Cluster0")


app.post("/add",(req,res)=>{
    let input=req.body
    let course=new coursemodel(input)
    course.save()
    res.json({"status":"success"})
})


app.get("/view",(req,res)=>{
    coursemodel.find().then(
        (data)=>{
            res.json(data)
        }
    ).catch(
        (error)=>{
            res.send("error")
        }
    )
})
app.listen(8081,()=>{
    console.log("server started")
})