import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidbarComponent } from './sidbar/sidbar.component';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, SidbarComponent],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatButtonModule
  ],
  exports: [HeaderComponent, FooterComponent, SidbarComponent],
})
export class CoreModule { }
