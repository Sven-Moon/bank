import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { NgxSpinnerModule } from 'ngx-spinner';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NgxSpinnerModule,
    AccordionModule.forRoot(),
    RouterModule,
  ],
  exports: [
    // PaginationButtonsWidgetComponent
  ],
})
export class SharedModule {}
