import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) { }

  upgrate(): void {
    this.router.navigateByUrl("upgrate");
  }
  home(): void {
    this.router.navigateByUrl("");
  }
  public isCollapsed = true;
  imagepath: string =
    'assets/zohologo.svg';
  imageupgrate: string =
    'assets/upgratelogo.svg';
  ngOnInit(): void {
  }

}
