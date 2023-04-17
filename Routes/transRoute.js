const express=require("express")
const {getAllTransaction,addTransaction,updateTransaction,getTransactionById,delTransaction}=require("../controllers/transController")
const router=express.Router()

router.get("/get-trans",getAllTransaction)
router.post("/add-trans",addTransaction)
router.put("/update-trans/:id",updateTransaction)
router.get("/get-trans/:id",getTransactionById)
router.delete("/get-trans/:id",delTransaction)


module.exports=router