import {Page, NavController} from 'ionic-angular';

/*
  Generated class for the CouponsPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Page({
  templateUrl: 'build/pages/coupons/coupons.html',
})
export class CouponsPage {
  constructor(public nav: NavController) {
    this.nav = nav;
  }
}
