import {Page, NavController} from 'ionic-angular';

/*
  Generated class for the EventsPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Page({
  templateUrl: 'build/pages/events/events.html',
})
export class EventsPage {
  constructor(public nav: NavController) {
    this.nav = nav;
  }
}
