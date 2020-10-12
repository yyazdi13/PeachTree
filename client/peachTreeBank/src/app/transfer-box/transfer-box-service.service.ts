import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Transaction } from './transfer';

@Injectable({
  providedIn: 'root',
})
export class TransferBoxService {
  
  constructor(private http: HttpClient) { }

  createTransfer(name: string, amount: string):Observable<Transaction>
  {
    var headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json')
    return this.http.post<Transaction>('http://localhost:3001/api/transfer', {
      categoryCode: '#f57c00',
      transaction:{
        type: 'Online Transfer',
        amountCurrency:{
          amount: amount,
          currencyCode: 'EUR',
        },
        creditDebitIndicator: 'CRDT'
      },
      merchant: {
        name: name,
        accountNumber: 'SI64397745065188826'
      },
      dates: {
        valueDate:new Date().getTime()
      }
    },
      {headers: headers});
  
  }
}
