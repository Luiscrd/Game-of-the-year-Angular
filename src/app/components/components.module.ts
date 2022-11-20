import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NavbarComponent } from './navbar/navbar.component';
import { GraficComponent } from './grafic/grafic.component';

@NgModule({
  declarations: [
    NavbarComponent,
    GraficComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    NavbarComponent,
    GraficComponent
  ]
})
export class ComponentsModule { }
