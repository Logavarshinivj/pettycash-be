const express=require("express")
const { loginController,registerController } = require("../controllers/userController")


const router=express.Router()


router.post("/login-petty",loginController)


router.post("/register-petty",registerController)




module.exports=router