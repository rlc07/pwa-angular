import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GeolocationComponent } from './geolocation.component';
import { GeolocationRoutingModule } from './geolocation-routing.module';



@NgModule({
  declarations: [GeolocationComponent],
  imports: [
    CommonModule,
    GeolocationRoutingModule
  ]
})
export class GeolocationModule { }
