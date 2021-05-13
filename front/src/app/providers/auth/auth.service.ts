import { Platform } from '@ionic/angular';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { BehaviorSubject, Observable, from, of } from 'rxjs';
import { take, map, switchMap } from 'rxjs/operators';
//import { JwtHelperService } from "@auth0/angular-jwt";
import { HttpClient, HttpHeaders } from '@angular/common/http';

import {CommonfuncsService } from '../../utils/commonfuncs.service';
//import {LoadingService } from '../../utils/loading.service';

import { Router } from '@angular/router';


 
//const helper = new JwtHelperService();
const TOKEN_KEY = 'jwt-token';
 
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public isDesktop: boolean = true;
  public width: number = 0;
  public height: number = 0;

  public user: Observable<any>;
  public token: Observable<any>;

  private userData = new BehaviorSubject(null);

  public _HOST = 'http://localhost:3000/';
  //public _HOST = '';

  constructor(private storage: Storage, 
              private http: HttpClient, 
  
              private plt: Platform, 
              private router: Router,
              private common: CommonfuncsService,
             // public loading: LoadingService
    ) { 

    this.isDesktop = this.plt.is('desktop');
    this.width = this.plt.width();
    this.height = this.plt.height();

    console.log('AuthService auth.user: ' + JSON.stringify(this.user));
    
    this.loadStoredToken();  

    console.log('AuthService auth.user: ' + JSON.stringify(this.user));
  }

  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    })
  }
 
  loadStoredToken() {
    let platformObs = from(this.plt.ready());

    console.log('AuthService loadStoredToken platformObs: ' + JSON.stringify(platformObs));
 
    this.user = platformObs.pipe(
      switchMap(() => {
        return from(this.storage.get(TOKEN_KEY));
      }),
      map(token => {
        if (token) {
          //let decoded = helper.decodeToken(token); 
          //console.log('AuthService loadStoredToken decoded: ' + JSON.stringify(decoded));
          //this.userData.next(decoded);

          console.log('AuthService loadStoredToken this.userData: ' + JSON.stringify(this.userData));
          return true;
        } else {
          return null;
        }
      })
    );
  }
 
  login(credentials){
    console.log('auth login(credentials) = ' + JSON.stringify(credentials));

    console.log('auth this._HOST = ' + this._HOST);

   // this.loading.present();
    return new Promise((resolve, reject) => {
      let authurl = this._HOST +'auth/email/login';

      this.http.post(authurl, credentials, this.httpOptions)
        .pipe(map((res: any) => res))
        .subscribe(res => {

          console.log('login res = ' + JSON.stringify(res));

          if (!res.success){
            if (res.data.response == 'LOGIN.USER_NOT_FOUND')
              this.common.presentToast('User not found', 10000, 'middle', "danger", true);
            if (res.data.response == 'LOGIN.ERROR')
              this.common.presentToast('Login error', 10000, 'middle', "danger", true);
          }
          else{

            this.token = res.data.token;

            this.user = res.data.user;
          
            console.log('login token = ' + JSON.stringify(this.token));
            console.log('login user = ' + JSON.stringify(this.user));

            this.storage.set('token', this.token);
            this.storage.set('user', this.user);


            this.storage.get('user').then((value) => {

              console.log('login this.storage user = ' + JSON.stringify(value));
                
            });

            this.userData.next(this.user);

            this.router.navigate(['/home'])

          }

          //resolve(res.success);

         // this.loading.dismiss();

        }, (err) => {
          reject(err);
        });

    });    

  }

  register(credentials: any) {
    // Normally make a POST request to your APi with your login credentials

    console.log('AuthService register ' + JSON.stringify(credentials));
 
    let authurl = this._HOST +'auth/email/register'; 

    //his.loading.present();

    this.http.post(authurl, JSON.stringify(credentials), this.httpOptions)
          .pipe(map((res: any) => res))
          .subscribe(res => {

          console.log('register res: ' + JSON.stringify(res));

          //this.loading.dismiss();

          if (!res.success){
            if (res.data.response == 'LOGIN.EMAIL_SENDED_RECENTLY')
              this.common.presentToast('EMAIL ALREADY SENDED !!!.Enter your email and follow the instructions from the letter', 10000, 'middle', "success", true);
            else
              this.common.presentToast('Your email is not right', 10000, 'middle', "danger", true);
          }
          else
            this.common.presentToast('Enter your email and follow the instructions from the letter', 10000, 'middle', "success", true);


          
        }, (err) => {
            //this.presentToast('Gate creating error: ' + err,  err);
            console.log('register err: ' + JSON.stringify(err));

            //this.loading.dismiss();
    });
   
  }

  restore(credentials: any) {
    // Normally make a POST request to your APi with your login credentials

    console.log('AuthService register ' + JSON.stringify(credentials));
 
    let authurl = this._HOST +'auth/email/forgot-password';

   // this.loading.present();

    //  this.http.get(authurl,  this.httpOptions)
    this.http.post(authurl, JSON.stringify(credentials), this.httpOptions)
          .pipe(map((res: any) => res))
          .subscribe(res => {

          console.log('restore res: ' + JSON.stringify(res));

        //  this.loading.dismiss();

          if (!res.success){
            if (res.data.response == 'LOGIN.USER_NOT_FOUND')
              this.common.presentToast('Your email is not right', 10000, 'middle', "danger", true);
          }
          else{
            this.common.presentToast('New password successfully sended to your email', 10000, 'middle', "success", true);
            this.router.navigate(['/login']);
          }

        }, (err) => {
            //this.presentToast('Gate creating error: ' + err,  err);
            console.log('restore err: ' + JSON.stringify(err));
          //  this.loading.dismiss();
    });
   
  }


  //reset(currentPassword: string, newPassword: string) {
  reset(resetpass: any) {
    // Normally make a POST request to your APi with your login credentials

    console.log('AuthService register ' + JSON.stringify(resetpass));
 
    let authurl = this._HOST +'auth/email/reset-password';

 //   this.loading.present();
/*
    let resetpass = {
      email: this.user['email'],
      newPassword: newPassword,
      //readonly newPasswordToken: string;
      currentPassword: currentPassword
    }
*/

    //  this.http.get(authurl,  this.httpOptions)
    this.http.post(authurl, JSON.stringify(resetpass), this.httpOptions)
          .pipe(map((res: any) => res))
          .subscribe(res => {

          console.log('restore res: ' + JSON.stringify(res));

     //     this.loading.dismiss();

          if (!res.success){
            if (res.message == 'RESET_PASSWORD.CHANGE_PASSWORD_ERROR')
              this.common.presentToast('New password is not right', 10000, 'middle', "danger", true);
            if (res.message == 'RESET_PASSWORD.WRONG_CURRENT_PASSWORD')
              this.common.presentToast('Current password is not right', 10000, 'middle', "danger", true);
          }
          else{
            this.common.presentToast('Your password successfully changed', 10000, 'middle', "success", true);
            this.router.navigate(['/login']);
          }

        }, (err) => {
            //this.presentToast('Gate creating error: ' + err,  err);
            console.log('restore err: ' + JSON.stringify(err));

    //        this.loading.dismiss();
    });
   
  }
 
  getUser() {
    return this.userData.getValue();
  }
 
  logout() {
    /*
    this.storage.remove(TOKEN_KEY).then(() => {
      this.router.navigateByUrl('/');
      this.userData.next(null);
    });
    */

    console.log('auth  logout = ');
    this.token = null;
    this.user = null;
    this.storage.set('token', null);
    this.storage.set('user', null);
  }
 

  isAuthenticated(): boolean {
    //console.log('isAuthenticated ' + JSON.stringify(this.userData));
    //console.log('isAuthenticated.value ' + this.userData.value);

    let res = false;
    if (this.token)
      res = true

    return res;  //this.userData.value;
  }
}