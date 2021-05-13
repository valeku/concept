import { Component, OnInit } from '@angular/core';

import { CommonfuncsService } from '../../utils/commonfuncs.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit {

  title="About";

  constructor(public common: CommonfuncsService) { 
    
  }

  ngOnInit() {
  }

}
