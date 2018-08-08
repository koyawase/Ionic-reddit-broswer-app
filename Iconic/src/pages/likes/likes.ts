import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { DetailsPage } from '../details/details';
// import firebase from 'firebase';

@Component({
  selector: 'page-likes',
  templateUrl: 'likes.html'
})
export class LikesPage {

  email: string;
  user: string;
  likedPosts: any[];
  ionViewDidLoad(){
    this.fireDatabase.list('/users/'+this.user).valueChanges().subscribe((data) => { 
      this.likedPosts = data;
      console.log(this.likedPosts);
    },(err)=>{
       console.log("error : ", err)
    });
 }

  constructor(public navCtrl: NavController, private fireAuth: AngularFireAuth, private fireDatabase: AngularFireDatabase) {
    this.email = fireAuth.auth.currentUser.email;
    this.user = this.email.substring(0,this.email.length-4);
  }

  viewPost(post){
    this.navCtrl.push(DetailsPage,{
      post
    });
  }

}
