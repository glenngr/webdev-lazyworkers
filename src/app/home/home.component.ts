import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'webdev-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  title = 'webdev';

  constructor() { }

  ngOnInit() {
  }

}