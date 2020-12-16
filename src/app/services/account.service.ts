import { Injectable } from '@angular/core';
import { Account } from '../models/Account';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http: HttpClient) { }

  baseUrl: string = "http://localhost:3000/accounts/"

  createAccount(account:Account) {
    return this.http
    .post(this.baseUrl, account);
  }

  getAccounts(): Observable<Account[]> {
    return this.http
    .get<Account[]>(this.baseUrl);
  }

  getAccount(accountId: number): Observable<Account> {
    return this.http
    .get<Account>(this.baseUrl+accountId);
  } 

  editAccount(account: Account): Observable<Account> {
    return this.http
    .put<Account>(this.baseUrl+account.accountId, 
      account.balance);
  }

  deleteAccount(accountId: number) {
    return this.http
    .delete(this.baseUrl + accountId);
  }

}
