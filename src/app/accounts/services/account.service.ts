import { Injectable } from '@angular/core';
import { Account } from '../models/account';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http: HttpClient) { }

  baseUrl: string = "http://localhost:3000/accounts/"

  createAccount(account:Account): Observable<Account> {
    return this.http
    .post<Account>(this.baseUrl, account);
  }

  getAccounts(): Observable<Account[]> {
    return this.http
    .get<Account[]>(this.baseUrl);
  }

  getAccount(accountId: string): Observable<Account> {
    return this.http
    .get<Account>(this.baseUrl+accountId);
  } 

  editAccount(accountId: string | number, changes: Partial<Account>): Observable<Account> {
    return this.http
    .put<Account>(this.baseUrl+accountId, 
      changes);
  }

  deleteAccount(id: number) {
    return this.http
    .delete(this.baseUrl + id);
  }

}