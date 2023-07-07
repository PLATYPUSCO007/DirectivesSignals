import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { ProductosRoutingModule } from './productos-routing.module';
import { ProductoPageComponent } from './pages/producto-page/producto-page.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    ProductoPageComponent
  ],
  imports: [
    CommonModule,
    ProductosRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class ProductosModule { }
