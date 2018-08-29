import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { LoginPage } from '../login/login';
import { App } from 'ionic-angular';

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage {

  email: string;
  user: string;
  likedPosts: number;
  constructor(public navCtrl: NavController, private fireAuth: AngularFireAuth, private app: App,
  private fireDatabase: AngularFireDatabase) {
    this.email = fireAuth.auth.currentUser.email;
    this.user = this.email.substring(0,this.email.length-4);
   
    fireDatabase.database.ref('/users/'+this.user).on('value',
        post => {
          this.likedPosts = post.numChildren();
        }
      )
  }

  logout(){
    this.fireAuth.auth.signOut().then(() => {
        window.location.reload();
        this.app.getRootNav().setRoot(LoginPage);
    });
  }

}
