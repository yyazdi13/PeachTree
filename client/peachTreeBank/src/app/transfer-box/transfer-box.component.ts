import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transfer-box',
  templateUrl: './transfer-box.component.html',
  styleUrls: ['./transfer-box.component.css']
})
export class TransferBoxComponent implements OnInit {
  total = <number> 5824.76;
  public to = '';
  amount: number;
  constructor() { }

  visible = <boolean> false;
  ngOnInit(): void {
  }

  preview(){
    this.visible = true;
  }

  exitPreview(){
    this.visible = false;
  }

  onSubmit(){
    this.total = this.total - this.amount;
    this.visible = false;
  }

}
