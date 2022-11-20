import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index/index.component';
import { GotyComponent } from './goty/goty.component';



@NgModule({
  declarations: [
    IndexComponent,
    GotyComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PagesModule { }
