import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'producto',
    loadChildren: ()=> import('./productos/productos.module').then(m=>m.ProductosModule)
  },
  {
    path: '**',
    redirectTo: 'producto'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule {}

