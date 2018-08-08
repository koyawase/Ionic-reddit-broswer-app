import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';


@Injectable()
export class FirebaseService {

    email: string;
    user: string;
    constructor(public firebase : AngularFireDatabase, private fireAuth: AngularFireAuth){
        this.email = fireAuth.auth.currentUser.email;
        this.user = this.email.substring(0,this.email.length-4);
    }

    LikePost(post){
        this.firebase.list('/users/'+this.user).push(post);
    }

    UnlikePost(id){
        this.firebase.list('/posts/').remove(id);
    }

    logout(){
        
    }
}