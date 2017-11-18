import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

  constructor(private http: HttpClient) { }

  getAllUsers(){
    return this.http.get('https://jsonplaceholder.typicode.com/users')
      .map(res => res);
  }
}
