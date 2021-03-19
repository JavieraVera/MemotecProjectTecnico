import { Injectable } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';

@Injectable({
  providedIn: 'root'
})
export class GpsService {

  constructor(private geolocation: Geolocation) { }

  async getGeo(){
     return await this.geolocation.getCurrentPosition();
  }
}
