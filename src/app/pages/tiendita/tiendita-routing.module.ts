import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TienditaPage } from './tiendita.page';

const routes: Routes = [
  {
    path: '',
    component: TienditaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TienditaPageRoutingModule {}
