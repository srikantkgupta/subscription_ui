import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class GlobalServiceService {
  
  url = 'http://10.191.234.10:9090';
  logindata;
  constructor(private http: HttpClient) { }



loginservice(username,password) {
	
  this.logindata = JSON.stringify(
      {
        "userId": username, 
        "password": password
      });
  
  return this.http.post(this.url + '/integration/services/restService/userLogin', this.logindata)
      
}


}
