import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';

/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {



  NewUser:any;

  Con_Pass:string;

  Name:string;
  DOB:string;
  Place:string;
  City:string;
  Parish:string;
  Diocese:string;
  TNCCA_zone:string;
  Aadhar_id:number;
  Role_in_Choir:string;
  Number:number;
  Mail_id:string;
  About_me:string;
  password:string;


  constructor(public navCtrl: NavController, public navParams: NavParams ,private auth:AuthProvider) {
  }

  ionViewDidLoad() {
    
    console.log('ionViewDidLoad SignupPage');
  }
  signup()
  {
   

    this.auth.insertUser(this.Name,this.DOB,this.Place,this.City,this.Parish,this.Diocese,this.TNCCA_zone,this.Aadhar_id,
      this.Role_in_Choir,this.Number,this.Mail_id,this.About_me,this.password)


    
    this.navCtrl.pop()
    console.log(this.NewUser);

  }

}

