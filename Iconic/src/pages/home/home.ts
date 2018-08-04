import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RedditService } from '../../app/services/reddit.service';
import { DetailsPage } from '../details/details';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  posts: any;
  search: string;
  constructor(public navCtrl: NavController, private redditService: RedditService) {
    this.search = 'popular';
  }

  getSearch(q: string) { 
    this.search = q;
    this.ngOnInit();
  }

  ngOnInit(){
    this.redditService.getPosts(this.search).subscribe(response => {
      this.posts = response.data.children;
    });
  }

  viewPost(post){
    this.navCtrl.push(DetailsPage,{
      post
    });
  }
}
