import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AccordionModule } from 'ngx-accordion';
import { NgxSpinnerModule } from 'ngx-spinner';

@NgModule({
  declarations: [
    // PaginationButtonsWidgetComponent
  ],
  imports: [
    CommonModule,
    NgxSpinnerModule,
    AccordionModule,  // uses .forRoot() in tutorial
    RouterModule,
  ],
  exports: [
    // PaginationButtonsWidgetComponent
  ],
})
export class SharedModule {}
