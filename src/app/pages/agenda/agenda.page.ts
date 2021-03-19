import { Component, OnInit, ViewChild, Inject, LOCALE_ID } from '@angular/core';
import { CalendarComponent, NgCalendarModule } from 'ionic2-calendar';
import { ContactoService } from '../../service/contacto.service';
import { Contacto } from '../Interfaces/interfaces';
import { Storage } from '@ionic/storage';
import { formatDate } from '@angular/common';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.page.html',
  styleUrls: ['./agenda.page.scss'],
})
export class AgendaPage implements OnInit {

  eventSource = [];
  calendar = {
    mode: 'month',
    currentDate: new Date()
  };
  contactos: Contacto[] = [];
  cargado = false;
  event = {
    title : '',
    desc : '',
    startTime: '',
    endTime : '',
    allDay : false
  };
  collapseCard = true;
  @ViewChild(CalendarComponent) myCal: CalendarComponent;
  minDate = new Date().toISOString();
  viewTitle;
  constructor( private contactoService: ContactoService, private storage: Storage,
               private alertCtrl: AlertController, @Inject(LOCALE_ID) private locale: string) { }

  ngOnInit() {
    // this.loadEvents();
    // this.contactoService.getContacto()
    // .then(res=>{
    //   this.contactos = res;
    //   console.log(res);
    //   this.cargado = true;
    // });
    // this.storage.get('eventos')
    // .then(res=>{
    //   this.eventSource.push(res);
    // })
    this.resetEvent();
  }
  resetEvent(){
    this.event = {
      title : '',
      desc : '',
      startTime: new Date().toISOString(),
      endTime : new Date().toISOString(),
      allDay : false
    }
  }

  loadEvents(){
    
  }
  // onCurrentDateChanged(e){
    
  //   let date = new Date(e);
  //   let startDay = Math.floor(Math.random() * 90) - 45;
  //   // let fecha = date.getFullYear();
  //   // let fecha = date.getMonth();
  //   // let fecha = (date.getFullYear(),date.getMonth(), date.getDate());
  //   let fecha = new Date(Date.UTC(date.getFullYear(),date.getMonth(), date.getDate()+1));
  //   this.event.startTime = fecha;
  //   this.event.endTime = fecha;
  //   // console.log(fecha);
  //   // console.log(this.event);
  // }
  reloadSource(){

  }

  addEvent() {
    let eventCopy = {
      title: this.event.title,
      startTime:  new Date(this.event.startTime),
      endTime: new Date(this.event.endTime),
      allDay: this.event.allDay,
      desc: this.event.desc
    }
 
    if (eventCopy.allDay) {
      let start = eventCopy.startTime;
      let end = eventCopy.endTime;
 
      eventCopy.startTime = new Date(Date.UTC(start.getUTCFullYear(), start.getUTCMonth(), start.getUTCDate()));
      eventCopy.endTime = new Date(Date.UTC(end.getUTCFullYear(), end.getUTCMonth(), end.getUTCDate() + 1));
    }
 
    this.eventSource.push(eventCopy);
    this.myCal.loadEvents();
    this.resetEvent();
  }

   // Change current month/week/day
 next() {
  var swiper = document.querySelector('.swiper-container')['swiper'];
  swiper.slideNext();
}
 
back() {
  var swiper = document.querySelector('.swiper-container')['swiper'];
  swiper.slidePrev();
}
 
// Change between month/week/day
changeMode(mode) {
  this.calendar.mode = mode;
}
 
// Focus today
today() {
  this.calendar.currentDate = new Date();
}
 
// Selected date reange and hence title changed
// tslint:disable-next-line: adjacent-overload-signatures
onViewTitleChanged(title) {
  this.viewTitle = title;
}

// Calendar event was clicked
async onEventSelected(event) {
  // Use Angular date pipe for conversion
  let start = formatDate(event.startTime, 'medium', this.locale);
  let end = formatDate(event.endTime, 'medium', this.locale);
 
  const alert = await this.alertCtrl.create({
    header: event.title,
    subHeader: event.desc,
    message: 'From: ' + start + '<br><br>To: ' + end,
    buttons: ['OK']
  });
  alert.present();
}
 
// Time slot was clicked
onTimeSelected(ev) {
  let selected = new Date(ev.selectedTime);
  this.event.startTime = selected.toISOString();
  selected.setHours(selected.getHours() + 1);
  this.event.endTime = (selected.toISOString());
}


}
