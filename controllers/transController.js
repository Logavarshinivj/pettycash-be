// const Transaction=require("../models/transModel")

// const getAllTransaction = async (req, res) => {
//   try {
//     const userId = req.user._id; // get the user id from the authenticated user
//     const transaction = await Transaction.find({ userId }); // fetch the transactions with the logged-in user's id
//     res.send(transaction);
//   } catch {
//     res.send("error");
//   } 
// };

// const addTransaction = async (req, res) => {
//   try {
//     // check if the user is authenticated
//     // if (!req.user) {
//     //   return res.status(401).send({ message: 'Unauthorized' });
//     // }
    
//     const userId = req.user._id; // get the user id from the authenticated user
//     const newTransaction = new Transaction({
//       voucher: req.body.voucher,
//       amount: req.body.amount,
//       type: req.body.type,
//       purpose: req.body.purpose,
//       date: req.body.date,
//       userId: userId // assign the user id to the new transaction
//     });
//     let result = await newTransaction.save();
//     res.status(200).send(result);
//   } catch (err) {
//     console.log(err);
//     res.status(400).send({ message: err.message });
//   }
// };


// const updateTransaction = async function (req, res) {
//   try {
//     const userId = req.user._id; // get the user id from the authenticated user
//     const result = await Transaction.updateOne(
//       { _id: req.params.id, userId },
//       { $set: req.body }
//     );
//     res.send(result);
//   } catch (err) {
//     res.status(404).send({ message: "error" });
//   }
// };

// const getTransactionById = async function (req, res) {
//   try {
//     const userId = req.user._id; // get the user id from the authenticated user
//     const result = await Transaction.findOne({
//       _id: req.params.id,
//       userId,
//     });
//     if (result) {
//       res.send(result);
//     } else {
//       res.send({ message: "no such record" });
//     }
//   } catch {
//     res.send("error");
//   }
// };

// const delTransaction = async (req, res) => {
//   try {
//     const userId = req.user._id; // get the user id from the authenticated user
//     const result = await Transaction.deleteOne({
//       _id: req.params.id,
//       userId,
//     });
//     res.send(result);
//   } catch (err) {
//     res.status(404).send({ message: "error" });
//   }
// };

// module.exports = {
//   getAllTransaction,
//   addTransaction,
//   updateTransaction,
//   getTransactionById,
//   delTransaction,
// };


