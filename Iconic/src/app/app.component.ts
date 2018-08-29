import { Component, ViewChild, Input } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { LoginPage } from '../pages/login/login';
import { RedditService } from '../app/services/reddit.service';

import { Nav } from 'ionic-angular';


export interface PageInterface{
  title: string;
  pageName: string;
  tabComponent?: any;
  index?: any;
  icon: string;
}

@Component({
  templateUrl: 'app.html',
  providers: [RedditService]
})
export class MyApp {
  rootPage:any = LoginPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }



  @ViewChild(Nav) nav: Nav;

  pages: PageInterface[] = [
    {title: 'Home', pageName: 'TabsPage', tabComponent: 'HomePage', index: 0, icon:'home'},
    {title: 'Likes', pageName: 'TabsPage', tabComponent: 'LikesPage', index: 1, icon:'heart'},
    {title: 'Profile', pageName: 'TabsPage', tabComponent: 'ProfilePage', index: 2, icon:'person'},
    {title: 'About', pageName: 'AboutPage', icon:'information-circle'},
    {title: 'Settings', pageName: 'SettingsPage', icon:'settings'},
  ]

  ionViewDidLoad() {
    
  }

  openPage(page: PageInterface){
    this.nav.setRoot(page.pageName);
  }

  isActive(page: PageInterface){

  }
}
