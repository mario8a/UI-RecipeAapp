import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'tiendita',
    loadChildren: () => import('./pages/tiendita/tiendita.module').then( m => m.TienditaPageModule)
  },
  {
    path: 'categorias/:id',
    loadChildren: () => import('./pages/categorias-info/categorias-info.module').then( m => m.CategoriasInfoPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
