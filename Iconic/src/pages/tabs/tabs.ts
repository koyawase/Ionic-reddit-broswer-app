import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { LikesPage } from '../likes/likes';
import { ProfilePage } from '../profile/profile';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = LikesPage;
  tab3Root = ProfilePage;

  constructor() {

  }
}
