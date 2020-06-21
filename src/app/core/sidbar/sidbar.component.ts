import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
  selector: 'app-sidbar',
  templateUrl: './sidbar.component.html',
  styleUrls: ['./sidbar.component.css']
})
export class SidbarComponent implements OnInit {

  @ViewChild(MatDrawer, { static: false }) drawer: MatDrawer;

  constructor() { }

  ngOnInit(): void {
    console.log(this.drawer)
    //this.drawer.open();
  }

}
