import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  value = 10;
  // value = 1000;
  // value = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
