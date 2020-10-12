import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { RecentTransactionsService } from './recent-transactions-service.service';

@Component({
  selector: 'app-recent-transactions',
  templateUrl: './recent-transactions.component.html',
  styleUrls: ['./recent-transactions.component.css'],
  providers: [RecentTransactionsService]
})
export class RecentTransactionsComponent implements OnInit {
  // transactions: {
  //   categoryCode: String,
  //   dates: {
  //     valueDate: any
  //   },
  //   transaction: {
  //     amountCurrency : {
  //       amount: any,
  //       currencyCode: String
  //     },
  //     type: String,
  //     creditDebitIndicator: String
  //   },
  //   merchant: {
  //     name: String,
  //     accountNumber: String
  //   }
  // }
  transactions: Array<Object>;
  constructor(private _RecentTransactionsService: RecentTransactionsService) { }

  ngOnInit(): void {
    this._RecentTransactionsService.getTransactions().subscribe(data => {
      this.transactions = data;
      console.log(data)
    })
  }

  public getDate(date: Date) {
    return new Date(date).toDateString();
  }

  onChange(event: Event): any {
    let value = (event.target as HTMLInputElement).value;
    if(value !== ""){
      this.transactions = this.transactions.filter((item: any) => {
        return item.merchant.name.toLowerCase().match(value.toLowerCase()) || 
        item.transaction.amountCurrency.amount.toString().match(value.toString());
      })
    } else this.ngOnInit()
    
  }

}
