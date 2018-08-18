import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from '../../../node_modules/angularfire2/database';

@Component({
  selector: 'page-details',
  templateUrl: 'details.html'
})
export class DetailsPage {

    post: any;
    email: string;
    user: string;
    key: string;

    constructor(public navCtrl: NavController, public navParams: NavParams, private fireAuth: AngularFireAuth,
    public fireDatabase: AngularFireDatabase) {
      this.post = navParams.get('post');
      this.email = fireAuth.auth.currentUser.email;
      this.user = this.email.substring(0,this.email.length-4);    
      
      fireDatabase.database.ref('/users/'+this.user).on('value',
        post => {
          post.forEach(element => {
            if(element.val().permalink == this.post.permalink){
              this.key = element.key;
            }
          });
        }
      )
    }
  
    likePost(){
      this.fireDatabase.list('/users/'+this.user).push(this.post);
    }

    unlikePost(){
      if(this.key != undefined){
        this.fireDatabase.list('/users/'+this.user).remove(this.key);
        this.key = undefined;
      }
    }

  }