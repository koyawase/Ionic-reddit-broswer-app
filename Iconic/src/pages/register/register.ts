import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'page-register',
  templateUrl: 'register.html'
})
export class RegisterPage {

  email: string;
  password: string;
  rePassword: string;

  constructor(public navCtrl: NavController, private firebase: AngularFireAuth, private alertCtrl: AlertController) {

  }

  alert(message: string){
    this.alertCtrl.create({
      title: 'Error!',
      subTitle: message,
      buttons: ['OK']
    }).present();
  }

  register(){
    if(this.email == null || this.password == null || this.rePassword == null){
      this.alert('Please fill in all the fields');
      return;
    }
    if(this.password != this.rePassword){
      this.alert('The passwords do not match');
    }
    this.firebase.auth.createUserWithEmailAndPassword(this.email,this.password)
    .then( data => {
      //successfully created account
    })
    .catch(error =>{
      this.alert(error);
    });

  }
}
