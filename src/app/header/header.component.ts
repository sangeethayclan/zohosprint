import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  public isCollapsed = true;
  imagepath: string =
    'assets/zohologo.svg';
  imageupgrate: string =
    'assets/upgratelogo.svg';
  ngOnInit(): void {
  }

}
