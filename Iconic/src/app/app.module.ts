import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { DetailsPage } from '../pages/details/details';
import { LikesPage } from '../pages/likes/likes';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { HttpModule } from '@angular/http';

const firebaseAuth = {
  apiKey: "AIzaSyBF2sCNjRk9yOZqLxW6yLrLzGU15D1-rGA",
  authDomain: "iconic-app-e5967.firebaseapp.com",
  databaseURL: "https://iconic-app-e5967.firebaseio.com",
  projectId: "iconic-app-e5967",
  storageBucket: "iconic-app-e5967.appspot.com",
  messagingSenderId: "971495100601"
};

@NgModule({
  declarations: [
    MyApp,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage,
    RegisterPage,
    DetailsPage,
    LikesPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseAuth),
    AngularFireAuthModule,
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage,
    RegisterPage,
    DetailsPage,
    LikesPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
