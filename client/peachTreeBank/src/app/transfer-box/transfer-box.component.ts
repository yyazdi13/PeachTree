import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { TransferBoxService } from './transfer-box-service.service';
import { RecentTransactionsService } from '../recent-transactions/recent-transactions-service.service';

@Component({
  selector: 'app-transfer-box',
  templateUrl: './transfer-box.component.html',
  styleUrls: ['./transfer-box.component.css'],
  providers: [TransferBoxService, RecentTransactionsService],
})
export class TransferBoxComponent implements OnInit {
  @Output() sendTransfer = new EventEmitter<any>();
  total = <number> 5824.76;
  public to = '';
  public amount = <any> '';
  public name = '';
  public change;
  constructor(private _transferBoxService: TransferBoxService, private _TransactionsService: RecentTransactionsService) { }

  visible = <boolean> false;
  ngOnInit(): void {
  }

  preview(){
    this.visible = true;
  }

  exitPreview(){
    this.visible = false;
  }

  onSubmit(): void{
    this.total = this.total - this.amount;
    this.visible = false;
  }


  Transfer({name, amount}): void{
    this._transferBoxService.createTransfer(name, amount).subscribe(transaction =>{
      console.log(transaction);
      this.sendTransfer.emit(transaction);
      window.location.reload()
    })
    this.onSubmit();
  }

}
