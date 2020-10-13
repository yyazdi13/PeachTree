import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Transaction } from '../transfer-box/transfer';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  receiveTransferTransaction: Transaction;
  constructor() { }

  ngOnInit(): void {
    this.receiveTransferTransaction = {
      categoryCode: '',
      dates: {
      valueDate: '',
      },
      transaction: {
      amountCurrency : {
        amount: '',
        currencyCode: '',
      },
      type: '',
      creditDebitIndicator: '',
    },
    merchant: {
      name: '',
      accountNumber: ''
    },
    image: ''

    }
  }

  
  sendTransferTransaction(sendTransferTransactionObject: Transaction) {
    this.receiveTransferTransaction = sendTransferTransactionObject
  }

}
