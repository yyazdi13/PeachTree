const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PeachTreeSchema = new Schema({
          categoryCode: String,
          dates: {
            valueDate: Schema.Types.Mixed
          },
          transaction: {
            amountCurrency: {
              amount: {
                  type: Schema.Types.Mixed,
              },
              currencyCode: {
                 type: String
              }
            },
            type: {
                type: String
            },
            creditDebitIndicator: {
                type: String
            }
          },
          merchant: {
            name: {
                type: String
            },
            accountNumber: {
                type: String,
            }
          },
    
});

const transactions = mongoose.model("transaction", PeachTreeSchema);

module.exports = transactions;