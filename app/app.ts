import 'es6-shim';

import {App, IonicApp, Platform, MenuController} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import {TabsPage} from './pages/tabs/tabs';
import {HomePage} from './pages/home/home';
import {EventsPage} from './pages/events/events';
import {FacebookPage} from './pages/facebook/facebook';
import {CouponsPage} from './pages/coupons/coupons';
import {GalleryPage} from './pages/gallery/gallery';
import {SplashPage} from './pages/splash/splash';
import {Type} from 'angular2/core';


@App({
    templateUrl: 'build/app.html',
    config: {} // http://ionicframework.com/docs/v2/api/config/Config/
})
export class MyApp {


    rootPage: Type = TabsPage;
    pages: Array<{ title: string, component: Type }>

    constructor(private app: IonicApp, private platform: Platform) {
        this.initializeApp();
        this.pages = [
            { title: 'Tabs', component: TabsPage },
            { title: 'Home', component: HomePage },
            { title: 'Events', component: EventsPage },
            { title: 'Facebook', component: FacebookPage },
            { title: 'Coupons', component: CouponsPage },
            { title: 'Gallery', component: GalleryPage },

        ];

    }


    initializeApp() {
        this.platform.ready().then(() => {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            // StatusBar.styleDefault();
        });
    }

    openPage(page) {
        let nav = this.app.getComponent('nav');
        nav.setRoot(page.component);
    }

}
