import {Component, ViewChild, OnInit} from '@angular/core';
import {Platform, Nav} from 'ionic-angular';
import {StatusBar, Splashscreen} from 'ionic-native';

import {TabsPage} from '../pages/tabs/tabs';
import {Page1} from "../pages/page1/page1";
import {AddCharacter} from "../pages/addCharacter/addCharacter"
import {CharacterInfo} from "../providers/character-info";

@Component({
    templateUrl: 'app.html'
})
export class MyApp implements OnInit {
    @ViewChild(Nav) nav: Nav;

    rootPage = Page1;

    pages: Array<{title: string, component: any}>;

    constructor(public platform: Platform, public charInfo: CharacterInfo) {

    }

    ngOnInit(): void {
        this.initializeApp();
        this.pages = [];
        for (let i: number = 0; i < this.charInfo.charArray.length; i++) {
            this.pages.push({title: this.charInfo.charArray[i].name, component: Page1})
        }
        this.pages.push({title: "Add Character", component: AddCharacter});
    }

    initializeApp() {
        this.platform.ready().then(() => {
            StatusBar.styleDefault();
            Splashscreen.hide();
        });
    }

    openPage(page) {
        this.nav.setRoot(page.component);
    }
}
