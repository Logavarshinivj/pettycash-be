const express=require("express")
const app=express()
const dotenv=require("dotenv")
const cors=require("cors")

const connectDb=require("./config/connectDb")
dotenv.config()

app.use(
    cors({
      origin: '*'      
    })
  );
app.use(express.json())
app.use("/",require("./Routes/transRoute"))
app.use("/",require("./Routes/userRoute"))
connectDb()
const PORT=4000 || process.env.PORT

app.listen(PORT,()=>{
    console.log(`Server started running on port ${PORT}🔥🔥`)
})