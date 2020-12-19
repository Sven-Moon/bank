import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router,ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { AccountService } from '../../services/account.service';
import { Account } from '../../models/account';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {
  account$: Observable<Account>;

  constructor(
    private service: AccountService,
    public router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.account$ = this.service.getAccount(
      this.route.snapshot.paramMap.get("id")
    );
  }

  deleteAccount(id: number) {
    const accountsObserver = {
      next: () => {
        console.log("Account Deleted");
        this.router.navigate(["/account/list"]);
      },
      error: err => console.error(err)
    };
    this.service.deleteAccount(id).subscribe(accountsObserver);
  }


}
