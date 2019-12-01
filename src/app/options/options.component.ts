import { Component, OnInit } from '@angular/core';
import { CookiesService } from '../shared/services/cookies.service';

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.scss']
})
export class OptionsComponent implements OnInit {
  public cookies: any;

  constructor(private cookiesService : CookiesService) { }


  ngOnInit() {
    this.cookies = this.cookiesService.getCookie();
  }

  

}
