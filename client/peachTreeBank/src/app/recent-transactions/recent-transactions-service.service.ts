import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecentTransactionsService {

  constructor(private http: HttpClient) { }

  
  getTransactions():Observable<any>
  {
    return this.http.get('http://localhost:3001/api/all')
  }
}
