import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'page-likes',
  templateUrl: 'likes.html'
})
export class LikesPage {

  constructor(public navCtrl: NavController, private firebase: AngularFireAuth) {

  }

}
