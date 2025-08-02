const express=require("express")
const app=express()

app.use(express.json())

app.post("/login",(req,res)=>{
    const {name,password}=req.body

    if(!name || !password){
        return res.status(400).json({message:"missing name or password"})
    }
    if (name === "Saam" && password === "1234"){
        return res.status(200).json({message:"Login Successfull"})
    }
    else{
        return res.status(401).json({message:"Invalid User"})
    }
})








app.listen("3000",()=>{
    console.log("Server running at http://localhost:3000")
})