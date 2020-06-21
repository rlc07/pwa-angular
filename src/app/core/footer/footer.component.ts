import { Component, OnInit, Input } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  @Input() drawer: MatDrawer;

  constructor() { }

  ngOnInit(): void {
  }

  toggle() {
    this.drawer.open();
  }

}
