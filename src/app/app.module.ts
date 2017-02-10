import {NgModule, ErrorHandler} from '@angular/core';
import {IonicApp, IonicModule, IonicErrorHandler} from 'ionic-angular';
import {MyApp} from './app.component';
import {AboutPage} from '../pages/about/about';
import {ContactPage} from '../pages/contact/contact';
import {HomePage} from '../pages/home/home';
import {TabsPage} from '../pages/tabs/tabs';
import {AddCharacter} from "../pages/addCharacter/addCharacter";
import {Page1} from "../pages/page1/page1";
import {CharacterInfo} from "../providers/character-info"

@NgModule({
    declarations: [
        MyApp,
        AboutPage,
        ContactPage,
        HomePage,
        TabsPage,
        Page1,
        AddCharacter
    ],
    imports: [
        IonicModule.forRoot(MyApp)
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        Page1,
        AddCharacter,
        AboutPage,
        ContactPage,
        HomePage,
        TabsPage
    ],
    providers: [
        {provide: ErrorHandler, useClass: IonicErrorHandler},
        CharacterInfo
    ]
})
export class AppModule {
}
