import {Page} from 'ionic-angular';
import {HomePage} from '../home/home';
import {EventsPage} from '../events/events';
import {FacebookPage} from '../facebook/facebook';
import {CouponsPage} from '../coupons/coupons';
import {GalleryPage} from '../gallery/gallery';


@Page({
    templateUrl: 'build/pages/tabs/tabs.html'
})
export class TabsPage {
    tabHome: any = HomePage;
    tabEvents: any = EventsPage;
    tabFacebook: any = FacebookPage;
    tabCoupons: any = CouponsPage;
    tabGallery: any = GalleryPage;


}
