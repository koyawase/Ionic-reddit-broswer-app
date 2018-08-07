import { Component } from '@angular/core';

import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { LikesPage } from '../likes/likes';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = LikesPage;
  tab3Root = ContactPage;

  constructor() {

  }
}
