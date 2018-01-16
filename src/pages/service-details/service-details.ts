import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { Http, Headers } from '@angular/http';
import { GoogleMaps, GoogleMap, GoogleMapsEvent, LatLng, CameraPosition, MarkerOptions, Marker } from '@ionic-native/google-maps';

declare var google;
/**
 * Generated class for the ServiceDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-service-details',
  templateUrl: 'service-details.html',
})
export class ServiceDetailsPage implements OnInit {
  @ViewChild('map') mapElement: ElementRef;
  map: any;

  markers = [];
  private getURL: string;
  private autharization: any;
  private serviceDetails: any;
  private serviceId: string;
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public loadingController: LoadingController,
    public http: Http,
  ) {
    this.serviceId = this.navParams.get('id');
    console.log(this.serviceId);
    this.getServiceDetails();
    
  }
  ngOnInit() {
    this.initMap();
  }

  initMap() {
    var point = { lat: 7.1558056, lng: 80.049301 };
    let divMap = (<HTMLInputElement>document.getElementById('map'));
    this.map = new google.maps.Map(divMap, {
      center: point,
      zoom: 15,
      disableDefaultUI: true,
      draggable: false,
      zoomControl: true
    });

    this.createMapMarker(point);
  }

  private createMapMarker(place: any): void {
    var marker = new google.maps.Marker({
      map: this.map,
      position: place
    });
    this.markers.push(marker);
  }

  

  getServiceDetails() {
    let loading = this.loadingController.create({ content: "Loading..." });
    loading.present();


    this.getURL = 'http://constructionlkapi.azurewebsites.net/ItemService/GetServiceDetail?Id=' + this.serviceId;
    this.http.get(this.getURL).map(res => res.json())
      .subscribe(data => {
        this.serviceDetails = data;
        console.log(this.serviceDetails);


        loading.dismissAll();
      }, error => {
        console.log(error);
      })

    loading.dismissAll();
  }
}
