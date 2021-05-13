import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  adminmenu: any;
  usermenu: any;
  navigate: any;

  constructor() {

    this.sideMenu();
  }

  sideMenu()
  {
    console.log('sideMenu')
    this.adminmenu =
    [
      {
        title : "Admin Services",
        url   : "/adminservices",
        icon  : "services",
        //isview: this.auth.isAuthenticated()
      },
      {
        title : "Admin Services fields",
        url   : "/servicefields",
        icon  : "services",
        //isview: true
      },
      
    ];
    this.usermenu =
    [
      {
        title : "Profile",
        url   : "/profile",
        icon  : "project"
      },
      {
        title : "Your services profile",
        url   : "/userservices",
        icon  : "tools"
      },
      {
        title : "Your projects",
        url   : "/projects",
        icon  : "projects"
      },
      /*
      {
        title : "Add project",
        url   : "/report",
        icon  : "project"
      },
      */
      
    ];

    this.navigate =
    [
      {
        title : "Home",
        url   : "/home",
        icon  : "home"
      },
      {
        title : "About",
        url   : "/about",
        icon  : "about"
      },
      {
        title : "Last Projects",
        url   : "/lastprojects",
        icon  : "projects"
      },
      {
        title : "Multitied Systems",
        url   : "/multitied",
        icon  : "about"
      },
      {
        title : "Another Expierence",
        url   : "/another",
        icon  : "another"
      },
    ]
  }
}
