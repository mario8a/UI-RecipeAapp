import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CategoriasInfoPage } from './categorias-info.page';

const routes: Routes = [
  {
    path: '',
    component: CategoriasInfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CategoriasInfoPageRoutingModule {}
