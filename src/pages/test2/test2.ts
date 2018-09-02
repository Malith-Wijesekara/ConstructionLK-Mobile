import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { Http } from '@angular/http';
import { Geolocation } from '@ionic-native/geolocation';
import { Diagnostic } from '@ionic-native/diagnostic';
import { Platform } from 'ionic-angular';
import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  GoogleMapOptions,
  CameraPosition,
  MarkerOptions,
  Marker
 } from '@ionic-native/google-maps';
import { ProgressReviewPage } from '../progress-review/progress-review';
import { AddServicePage } from '../add-service/add-service';
 
 
@IonicPage()
@Component({
  selector: 'page-test2',
  templateUrl: 'test2.html',
})
export class Test2Page {
  pic: any;
  getURL: string;
  
  constructor(public navCtrl: NavController,
    public http: Http,
    public navParams: NavParams,
    public loadingController: LoadingController,
    private diagnostic: Diagnostic,
    ) {
    
  }
  
  getProfilePic(){
      let loading = this.loadingController.create({ content: "Loading..." });
      loading.present();
      this.getURL = 'http://constructionlkapi.azurewebsites.net/Image/GetProiverImage?id=105';
      this.http.get(this.getURL).map(res => res.json())
        .subscribe(data => {
          loading.dismissAll();
          console.log(data);        
          this.pic = data;    
        }, error => {
          console.log(error);
        })
  
    }

  
}
