import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { FirebaseService } from '../../app/services/firebase.service';


@Component({
  selector: 'page-details',
  templateUrl: 'details.html'
})
export class DetailsPage {

    post: any;
    constructor(public navCtrl: NavController, public navParams: NavParams, private fireAuth: AngularFireAuth,
    public fireService: FirebaseService) {
      this.post = navParams.get('post');
    }
  
    likePost(){
      this.fireService.LikePost(this.post);
    }

    UnlikePost(id){
      this.fireService.UnlikePost(id);
    }

  }
