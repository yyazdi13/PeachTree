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
  val: '';
  transactions: Array<any>;
  constructor(private _RecentTransactionsService: RecentTransactionsService) { }

  ngOnInit(): void {
    this._RecentTransactionsService.getTransactions().subscribe(data => {
      this.transactions = data;
      this.val = '';
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

  beneficiarySort(){
    this._RecentTransactionsService.getBeneficiaryAsc().subscribe(data=>{
      this.transactions = data;
    })
  }

  datesort(){
    this.transactions = this.transactions.sort((a: any,b: any)=>(parseInt(a.dates.valueDate) > parseInt(b.dates.valueDate)) ? -1 : 1)
  }

  dateSort(){
    this.transactions = this.transactions.sort((a: any,b: any): any=>{
          let aDate = new Date(a.dates.valueDate).getTime()
          let bDate = new Date(b.dates.valueDate).getTime()
        return (aDate > bDate ? -1 : 1)
    })
  }


  amountSort(){
    this.transactions = this.transactions.sort((a: any,b: any)=>(parseInt(a.transaction.amountCurrency.amount) > parseInt(b.transaction.amountCurrency.amount)) ? -1 : 1)
  }

}
