import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { TransferBoxService } from './transfer-box-service.service';
import { Transaction } from './transfer';

@Component({
  selector: 'app-transfer-box',
  templateUrl: './transfer-box.component.html',
  styleUrls: ['./transfer-box.component.css'],
  providers: [TransferBoxService],
})
export class TransferBoxComponent implements OnInit {
  @Output() sendTransfer = new EventEmitter<Transaction>();
  total = <number> 5824.76;
  public to = '';
  public amount = <any> '';
  public name = '';
  constructor(private _transferBoxService: TransferBoxService) { }

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
    this.total.toFixed(2);
    this.visible = false;
  }


  Transfer({name, amount}): void{
    if(this.total - this.amount > -500){
      this._transferBoxService.createTransfer(name, amount).subscribe(transaction =>{
        console.log(transaction);
        this.sendTransfer.emit(transaction);
      })
    }else {
      window.location.reload()
    }
    this.onSubmit();

  }

}
