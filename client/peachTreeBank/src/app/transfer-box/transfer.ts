export class Transaction{
    categoryCode: String;
    dates: {
      valueDate: any;
    };
    transaction: {
      amountCurrency : {
        amount: any;
        currencyCode: String;
      },
      type: String;
      creditDebitIndicator: String;
    };
    merchant: {
      name: String;
      accountNumber: String;
    };

    image: String;
}