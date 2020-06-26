import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatDividerModule} from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import {MatRippleModule} from '@angular/material/core';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidbarComponent } from './sidbar/sidbar.component';
import { ProfileComponent } from './sidbar/profile/profile.component';
import { MenuItemsComponent } from './sidbar/menu-items/menu-items.component';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, SidbarComponent, ProfileComponent, MenuItemsComponent],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatGridListModule,
    MatIconModule,
    MatSidenavModule,
    MatButtonModule,
    MatDividerModule,
    MatListModule,
    MatRippleModule,
    RouterModule
  ],
  exports: [HeaderComponent, FooterComponent, SidbarComponent],
})
export class CoreModule { }
