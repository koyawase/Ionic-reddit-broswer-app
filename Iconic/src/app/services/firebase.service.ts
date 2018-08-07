import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class FirebaseService {

    
    constructor(public firebase : AngularFireDatabase){

    }

    LikePost(post){
        this.firebase.list('/posts/').push(post);
    }

    UnlikePost(id){
        this.firebase.list('/posts/').remove(id);
    }
}