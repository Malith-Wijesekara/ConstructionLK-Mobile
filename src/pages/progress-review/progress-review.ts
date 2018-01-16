import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ProgressReviewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-progress-review',
  templateUrl: 'progress-review.html',
})
export class ProgressReviewPage {
 
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
  }
  public doughnutChartLabels : string[] = ['Not completed','Completed'];
  public doughnutChartData : number[] = [1200,1300];
  public doughnutChartType : string= 'doughnut';

}
