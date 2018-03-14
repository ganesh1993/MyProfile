import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyfriendPage } from './myfriend';

@NgModule({
  declarations: [
    MyfriendPage,
  ],
  imports: [
    IonicPageModule.forChild(MyfriendPage),
  ],
})
export class MyfriendPageModule {}
