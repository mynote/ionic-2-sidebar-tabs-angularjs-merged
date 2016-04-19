import {Page, NavController} from 'ionic-angular';

/*
  Generated class for the GalleryPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Page({
  templateUrl: 'build/pages/gallery/gallery.html',
})
export class GalleryPage {
  constructor(public nav: NavController) {
    this.nav = nav;
  }
}
