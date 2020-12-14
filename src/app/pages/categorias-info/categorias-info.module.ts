import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CategoriasInfoPageRoutingModule } from './categorias-info-routing.module';

import { CategoriasInfoPage } from './categorias-info.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CategoriasInfoPageRoutingModule
  ],
  declarations: [CategoriasInfoPage]
})
export class CategoriasInfoPageModule {}
