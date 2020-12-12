import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TienditaPageRoutingModule } from './tiendita-routing.module';

import { TienditaPage } from './tiendita.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TienditaPageRoutingModule
  ],
  declarations: [TienditaPage]
})
export class TienditaPageModule {}
