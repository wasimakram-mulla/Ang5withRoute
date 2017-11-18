import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  users: any;
  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit() {
    this.dataService.getAllUsers()
      .subscribe(users => {
        //console.log(users)
        this.users = users;
      });
  }

  seeUserPost(user){
    //console.log(user);
    this.router.navigate(['/posts/'+user.id]);
  }

}
