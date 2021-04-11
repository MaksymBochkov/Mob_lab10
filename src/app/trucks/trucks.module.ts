import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TrucksPageRoutingModule } from './trucks-routing.module';

import { TrucksPage } from './trucks.page';
import {HomePageRoutingModule} from "../home/home-routing.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TrucksPageRoutingModule,
    HomePageRoutingModule
  ],
  declarations: [TrucksPage]
})
export class TrucksPageModule {}