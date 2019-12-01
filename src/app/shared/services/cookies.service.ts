import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CookiesService {

  constructor() { }

  createCookie(name, value, expire){
      let expireDate;
      
      if(expire){
          expireDate = new Date();
          expireDate.setDate(expireDate.getDate() + expire);
          expireDate = expireDate.toUTCString();
          document.cookie = `${name}=${value}; expires=${expireDate}; path=/;`;
      }
      else{
          document.cookie = `${name}=${value}; path=/;`;
      }
  }
  
  getCookie(cookieName?){
      if(document.cookie === ''){
        return '';
      }

      let cookie;
      let tmp = document.cookie
              .split(';')
              .map(cookie => cookie.split('='))
              .reduce((accumulator, [key, value])=>
                  ({...accumulator, [key.trim()] : decodeURIComponent(value)}),
              {});
      
      cookie = cookieName ? tmp[cookieName] : tmp;
      return cookie;
  }
}
