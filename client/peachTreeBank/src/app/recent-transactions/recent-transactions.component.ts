import { Component, OnInit, Input, OnChanges, AfterViewInit } from '@angular/core';
import { RecentTransactionsService } from './recent-transactions-service.service';
import { Transaction } from '../transfer-box/transfer';

@Component({
  selector: 'app-recent-transactions',
  templateUrl: './recent-transactions.component.html',
  styleUrls: ['./recent-transactions.component.css'],
  providers: [RecentTransactionsService]
})
export class RecentTransactionsComponent implements OnInit {
  @Input() receiveTransfer: Transaction;
  val: '';
  transactions: Array<any>;
  constructor(private _RecentTransactionsService: RecentTransactionsService) { }

  ngOnInit(): void {
    this._RecentTransactionsService.getTransactions().subscribe(data => {
      this.transactions = data;
      this.val = '';
      this.datesort()
    })
  }

  // Listen for changes in transfer component
  ngOnChanges() {
    this.ngOnInit()
    this.transactions.push(this.receiveTransfer);
    this.datesort();
  }

  ngAfterViewInit(){
    this.datesort()
    this.ngOnInit()
  }

  public getDate(date: Date) {
    return new Date(date).toDateString();
  }

  // filter Search
  onChange(event: Event): any {
    let value = (event.target as HTMLInputElement).value;
    if(value !== ""){
      this.transactions = this.transactions.filter((item: any) => {
        return item.merchant.name.toLowerCase().match(value.toLowerCase()) || 
        item.transaction.amountCurrency.amount.toString().match(value.toString());
      })
    } else this.ngOnInit()
    
  }


  // Sorting Functions
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
        return (aDate < bDate ? -1 : 1)
    })
  }


  amountSort(){
    this.transactions = this.transactions.sort((a: any,b: any)=>(parseInt(a.transaction.amountCurrency.amount) > parseInt(b.transaction.amountCurrency.amount)) ? -1 : 1)
  }

}
