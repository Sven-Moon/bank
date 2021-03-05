import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { CustomerSupportComponent } from './customer-support/customer-support.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    CustomerSupportComponent,
    HomeComponent,
    NotFoundComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
    FormsModule,
    SharedModule,
    RouterModule
  ]
})
export class PagesModule { }
