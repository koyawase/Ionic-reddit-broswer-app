import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular/umd';

@Component({
  selector: 'details-about',
  templateUrl: 'details.html'
})
export class DetailsPage {

  post: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.post = navParams.get('post');
  }

  likePost(){
    
  }
}
