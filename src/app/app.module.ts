import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { IonicImageViewerModule } from 'ionic-img-viewer';

import { File } from '@ionic-native/file';
import { Transfer } from '@ionic-native/transfer';
import { FilePath } from '@ionic-native/file-path';
import { Camera } from '@ionic-native/camera';

import { MyprofilePage } from '../pages/myprofile/myprofile';
import { WorkPage } from '../pages/work/work';
import { BiographyPage } from '../pages/biography/biography';
import { ContactPage } from '../pages/contact/contact';
import { MyfamilyPage } from '../pages/myfamily/myfamily';
import { MyfriendPage } from '../pages/myfriend/myfriend';
import { HomePage } from '../pages/home/home';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    MyprofilePage,
    WorkPage,
    BiographyPage,
    ContactPage,
    MyfamilyPage,
    MyfriendPage,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicImageViewerModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MyprofilePage,
    WorkPage,
    BiographyPage,
    ContactPage,
    MyfamilyPage,
    MyfriendPage,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    File,
    Transfer,
    Camera,
    FilePath,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
