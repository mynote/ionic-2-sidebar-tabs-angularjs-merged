import {Page, NavController} from 'ionic-angular';

/*
  Generated class for the FacebookPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Page({
  templateUrl: 'build/pages/facebook/facebook.html',
})
export class FacebookPage {
  constructor(public nav: NavController) {
    this.nav = nav;
  }
}
