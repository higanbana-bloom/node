const express=require("express")
const app=express()


app.use("",(req,res)=>{
    res.send({
        msg:"ok1"
    })
})
app.use("/login",(req,res)=>{
    res.send({
        msg:"ok2"
    })
})


app.listen(9093)