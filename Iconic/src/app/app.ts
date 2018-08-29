import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Nav } from 'ionic-angular';


export interface PageInterface{
  title: string;
  pageName: string;
  tabComponent?: any;
  index?: any;
  icon: string;
}

@IonicPage()
@Component({
  selector: 'page-app',
  templateUrl: 'app.html',
})
export class AppPage {

  rootPage = 'TabsPage';

  @ViewChild(Nav) nav: Nav;

  pages: PageInterface[] = [
    {title: 'Home', pageName: 'TabsPage', tabComponent: 'HomePage', index: 0, icon:'home'},
    {title: 'Likes', pageName: 'TabsPage', tabComponent: 'LikesPage', index: 1, icon:'heart'},
    {title: 'Profile', pageName: 'TabsPage', tabComponent: 'ProfilePage', index: 2, icon:'person'},
    {title: 'About', pageName: 'AboutPage', icon:'information-circle'},
    {title: 'Settings', pageName: 'SettingsPage', icon:'settings'},
  ]


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuPage');
  }

  openPage(page: PageInterface){

  }

  isActive(page: PageInterface){

  }
}
