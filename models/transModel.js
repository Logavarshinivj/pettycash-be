
const mongoose = require('mongoose');


const transactionSchema = new mongoose.Schema({
  userId: { type: String},
  voucher: { type: Number },
  amount: { type: Number},
  type: { type: String},
  purpose: { type: String},
  date: { type: Date},
});

const Transaction = mongoose.model('trans', transactionSchema);

module.exports = Transaction;