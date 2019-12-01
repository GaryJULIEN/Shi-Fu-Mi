import { Component, OnInit } from '@angular/core';
import { CookiesService } from '../shared/services/cookies.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  private cookies: any;

  constructor(private cookiesService: CookiesService){}


  ngOnInit(){
    this.cookies = this.cookiesService.getCookie();
  }

  public isCookie(){
    return this.cookies === '' ? false : true;
  }
}
