import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import firebase from 'firebase';

@Component({
  selector: 'page-likes',
  templateUrl: 'likes.html'
})
export class LikesPage {

  public user: string;
  public items: Array<any> = [];
  public itemRef: firebase.database.Reference = firebase.database().ref('/posts');
  ionViewDidLoad(){
    this.itemRef.on('value', itemSnapshot => {
      this.items = [];
      itemSnapshot.forEach( itemSnap => {
        this.items.push(itemSnap.val());
        return false;
      });
    });
 }

  constructor(public navCtrl: NavController, private fireAuth: AngularFireAuth) {
    this.user = fireAuth.auth.currentUser.email;
  }

}
