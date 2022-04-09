import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidetab',
  templateUrl: './sidetab.component.html',
  styleUrls: ['./sidetab.component.css']
})
export class SidetabComponent implements OnInit {

  constructor(private router: Router) { }
  active = '1';
  upgrate(): void {
    this.router.navigateByUrl("upgrate");
  }
  ngOnInit(): void {
  }

}
