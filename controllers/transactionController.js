const Transaction=require("../models/transModel")

const getAllTransaction=async(req,res)=>{
    // try{
        const transaction=await Transaction.find({userId:req.body.userId})
        res.send(transaction)
    // }
    // catch{
    //     res.send("error")
    // }
}

const addTransaction=async(req,res)=>{

    // try {
        const {voucher,
            amount,
            type,
            purpose,
            date,
          userId} =req.body;
        console.log(req.body);

        const newTransaction = await Transaction.create({
            voucher,
            amount,
            type,
            purpose,
            date,
            userId
        });
        res.send(newTransaction);
    //   } 
    //   catch (err) {
    //     res.status(404).send({ message: "error" });
    //   }
    // };

    }
 const updateTransaction= async function (request, response) {
        const result = await Transaction.updateOne(
          { _id: request.params.id },
          { $set: request.body }
        );
        response.send(result);
      };

      const getTransactionById=async function (request,response) {

        const result = await Transaction.findOne({ _id: request.params.id });
      if (result) {
        response.send(result);
      } else {
        response.send({ message: "no such record" });
      }
    };


    const delTransaction=async(req,res)=>{
      const result = await Transaction.deleteOne({ _id: req.params.id });
      res.send(result);   
  }
    

module.exports={getAllTransaction,addTransaction,updateTransaction,getTransactionById,delTransaction}

