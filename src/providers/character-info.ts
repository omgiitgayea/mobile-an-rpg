import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

/*
 Generated class for the CharacterInfo provider.

 See https://angular.io/docs/ts/latest/guide/dependency-injection.html
 for more info on providers and Angular 2 DI.
 */
@Injectable()
export class CharacterInfo {
    charArray: Array<any>;

    constructor(public http: Http) {
        console.log('Hello CharacterInfo Provider');
        this.charArray = [{name: "Joe"}, {name: "Sal"}, {name: "Murr"}, {name: "Q"}]
    }
}
