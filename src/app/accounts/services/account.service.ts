// import { Injectable } from '@angular/core';
// import { Account } from '../models/account';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class AccountService {

//   constructor(private http: HttpClient) { }

//   baseUrl: string = "http://localhost:3000/accounts/"

//   createAccount(account:Account) {
//     return this.http
//     .post(this.baseUrl, account);
//   }

//   getAccounts(): Observable<Account[]> {
//     return this.http
//     .get<Account[]>(this.baseUrl);
//   }

//   getAccount(id: string): Observable<Account> {
//     return this.http
//     .get<Account>(this.baseUrl+id);
//   }

//   editAccount(account: Account): Observable<Account> {
//     return this.http
//     .put<Account>(this.baseUrl+account.id,
//       account.balance);
//   }

//   deleteAccount(id: number) {
//     return this.http
//     .delete(this.baseUrl + id);
//   }

// }
