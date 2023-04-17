const mongoose=require("mongoose")

const transactionSchema=new mongoose.Schema({


    voucher:{
        type:String,
    },

    amount:{
        type:Number,
        
    },
    
    type:{
        type:String,
    },
    purpose:{
        type:String,
        
    },
    date:{
        type:Date
    },
    balance:{
        type:Number,
    }

},
{timestamps:true}
)




const Transaction=mongoose.model("trans",transactionSchema)

module.exports=Transaction