import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RProvider } from '../../providers/r/r';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public segmentB: string ='test1';
  public slides = [{id: "test1"}, {id: "test2"}];
  
  constructor(public navCtrl: NavController,
    public rProvvider: RProvider) {

  }
  onSegmentChanged(segmentButton) {


}
}
