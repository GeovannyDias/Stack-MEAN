import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full'
  },
  {
    path: 'list',
    loadChildren: () => import('./pages/list-product/list-product.module').then(m => m.ListProductModule)
  },
  {
    path: 'create',
    loadChildren: () => import('./pages/create-product/create-product.module').then(m => m.CreateProductModule)
  },
  {
    path: 'edit/:id',
    loadChildren: () => import('./pages/create-product/create-product.module').then(m => m.CreateProductModule)
  },


  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
