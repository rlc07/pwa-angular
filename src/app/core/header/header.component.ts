import { Component, OnInit, Output, Input } from '@angular/core';
import { EventEmitter } from 'events';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() drawer: MatDrawer;

  constructor() { }

  ngOnInit(): void {
  }

  toggle() {
    this.drawer.open();
  }

}
