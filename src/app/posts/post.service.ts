import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class PostService {

  constructor(private http: HttpClient) { }

  getAllPosts(usrId){
    return this.http.get('https://jsonplaceholder.typicode.com/posts?userId='+ usrId)
      .map(res => res);
  }
}
