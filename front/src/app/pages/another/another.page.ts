import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';

import { CommonfuncsService } from '../../utils/commonfuncs.service';

@Component({
  selector: 'app-another',
  templateUrl: './another.page.html',
  styleUrls: ['./another.page.scss'],
})
export class AnotherPage implements OnInit {

  title="Another Expierence";

  constructor(
    public common: CommonfuncsService
  ) { }

  ngOnInit() {

  }

}
