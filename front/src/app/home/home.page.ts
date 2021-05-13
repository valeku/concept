import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AuthService} from '../providers/auth/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  title = "Valery Kulakov";

  constructor(
    public router : Router,
    public auth: AuthService, 
              
  ) {
    
  }

  about(){
    this.router.navigate(['/about']);
  }

  lastprojects(){
    this.router.navigate(['/lastprojects']);
  }

  multitied(){
    this.router.navigate(['/multitied']);
  }

  another(){
    this.router.navigate(['/another']);
  }

  login(){
    this.router.navigate(['/login']);
  }

  logout(){
    console.log('login auth.user: ' +JSON.stringify(this.auth.user));

    this.auth.logout();
    console.log('login auth.user: ' +JSON.stringify(this.auth.user));

  }

}
