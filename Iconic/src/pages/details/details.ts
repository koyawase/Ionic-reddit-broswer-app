import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-details',
  templateUrl: 'details.html'
})
export class DetailsPage {

    post: any;
    constructor(public navCtrl: NavController, public navParams: NavParams) {
      this.post = navParams.get('post');
    }
  
    likePost(){
      //Post data
      //string this.post.thumbnail
      //if this.post.preview != undefined 
      //boolean this.post.preview.enabled
      //string this.post.preview.images[0]
      //string this.post.title
      //string this.post.author
      //number this.post.score
      //number this.post.num_comments
      //string this.post.permalink
      //string this.post.selftext
    }
  }
