import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {CharacterInfo} from "../../providers/character-info";

/*
  Generated class for the Page1 page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-page1',
  templateUrl: 'page1.html'
})
export class Page1 {

  constructor(public navCtrl: NavController, public navParams: NavParams, public charData: CharacterInfo) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad Page1');
  }

}
