import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs';

@Injectable()
export class RedditService{
    http: any;
    baseUrl: String;

    constructor(http: Http){
        this.http = http;
        this.baseUrl = 'https://www.reddit.com/r';
    }

    getPosts(category){
        return this.http.get(this.baseUrl+'/'+category+'/top.json?limit=50')
        .map(res => res.json());
    }
}