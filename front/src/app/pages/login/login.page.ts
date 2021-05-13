import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';

import { AuthService} from  '../../providers/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  credentials = {email: '', password: ''};

  email ="";
   password = "";

  prev: any;

  constructor(
              public auth: AuthService,
              public router : Router,
              private activeRoute: ActivatedRoute,
              public nav: NavController) { 
                this.prev = this.activeRoute.snapshot.paramMap.get('locs');
              }

  ngOnInit() {
  }

  register(){
    //this.status = 'login';

    console.log('register');
    this.router.navigate(['/register']);
  }

  setStatus(status){
    //this.status = status;
  }

  restore(){
    this.router.navigate(['/restore']);
  }

  login(){
    console.log('login this.credentials: ' +JSON.stringify(this.credentials));
    //this.auth.login(this.credentials);

    this.auth.login(this.credentials).then((result) => {
      //this.loading.dismiss();
      console.log(result);
      //this.router.navigate(['/home']);
    }, (err) => {
        //this.loading.dismiss();
        console.log(err);
    });

  }

  cancel(){
    console.log('cancel');
    //this.router.navigate(this.prev);
    this.nav.back();
  }

  gohome(){
    this.router.navigate(['/home']);
  }

  googleSignIn(){
    console.log('googleSignIn');
  }



}
