import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { FirebaseService } from '../../app/services/firebase.service';
import { AngularFireList } from 'angularfire2/database';

@Component({
  selector: 'page-details',
  templateUrl: 'details.html'
})
export class DetailsPage {

    post: any;
    likedPosts: AngularFireList<any>;

    constructor(public navCtrl: NavController, public navParams: NavParams, private fireAuth: AngularFireAuth,
    public fireService: FirebaseService) {
      this.post = navParams.get('post');
      this.likedPosts = this.fireService.getLikedPosts();
    }
  
    likePost(){
      let likedPost = {
        user: this.fireAuth.auth.currentUser.email,
        likedPost: this.post
      }
      this.fireService.LikePost(likedPost);
    }

    UnlikePost(id){
      this.fireService.UnlikePost(id);
    }
  }
