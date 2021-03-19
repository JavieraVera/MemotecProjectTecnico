import { Component, OnInit } from '@angular/core';
import { GpsService } from '../../service/gps.service';
import * as mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-gps',
  templateUrl: './gps.page.html',
  styleUrls: ['./gps.page.scss'],
})
export class GPSPage implements OnInit {
  map: mapboxgl.Map;
  constructor(private gps: GpsService) { }

  ngOnInit() {
    this.gps.getGeo()
    .then(res=>{
      mapboxgl.accessToken = 'pk.eyJ1IjoiY2FybG9zcm9uMDIiLCJhIjoiY2sxOXA5c2Y1MHU2czNudGJ2MzlhdHphZCJ9.1lxxspKKQ3RTAJ4Bxapncw';
      this.map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [ res.coords.longitude,res.coords.latitude],
    zoom: 14
    });
      const marker = new mapboxgl.Marker({
      draggable: false
    })
    .setLngLat([res.coords.longitude, res.coords.latitude])
    .addTo(this.map); // add the marker to the map
      marker.togglePopup();
    })
    
  }

}
