/* eslint-disable @angular-eslint/use-lifecycle-interface */
/* eslint-disable @typescript-eslint/prefer-for-of */
/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/member-delimiter-style */
/* eslint-disable no-trailing-spaces */
/* eslint-disable @typescript-eslint/dot-notation */
/* eslint-disable @typescript-eslint/type-annotation-spacing */
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Livreur } from '../model/user';
import { AuthentificationService } from '../services/authentification.service';
import { LivraisonService } from '../services/livraison.service';
import { UserService } from '../services/user.service';
import jwt_decode from 'jwt-decode';
import { formatDate } from '@angular/common';
import { Commande } from '../model/commande';
import { Livraison } from '../model/livraison';
import { OverlayEventDetail } from '@ionic/core/components';
import { AlertController, IonModal, LoadingController, ToastController } from '@ionic/angular';
// import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import jsQR from 'jsqr';
import { CommandeService } from '../services/commande.service';
// import { BarcodeScanner, BarcodeScannerOptions } from '@awesome-cordova-plugins/barcode-scanner/ngx';



@Component({
  selector: 'app-livraison',
  templateUrl: './livraison.page.html',
  styleUrls: ['./livraison.page.scss'],
})
export class LivraisonPage implements OnInit {
  @ViewChild('video',{ static: false }) video: ElementRef;
  @ViewChild('canvas',{ static: false }) canvas: ElementRef;
  @ViewChild(IonModal) modal: IonModal;

  message = 'Code invalide';
  name: any;
  show= false;
  videoElement : any;
  canvasElement : any;
  canvasContext : any;
  loading : HTMLIonLoadingElement;
  scanActive = true;
  scanResult = null;
  scannedData: any;
  encodedData: '';
  encodeData: any;
  inputData: any;
  livreur : Livreur;
  livreurs : Livreur[];
  livraison : Livraison;
  livraisons : any[];
  livraisonsToday : any[];
  commandes: Commande[];
  searchText : any;
  
  constructor(
    private alertController: AlertController,
    // private barcodeScanner: BarcodeScanner,
    private toastCtrl : ToastController,
    private serviceLivraison : LivraisonService, 
    private serviceCommande : CommandeService, 
    private serviceUser : UserService,
    private serviceAuth:AuthentificationService,
    private route : ActivatedRoute,
    private loadingCtrl : LoadingController) { }

  ngOnInit() {

    this.searchText = this.serviceLivraison.nowDate();

        //  console.log(this.getDecodedAccessToken(this.serviceLivraison.getToken()).username);

    this.serviceLivraison.findLivreur(this.serviceUser.getDecodedAccessToken(this.serviceLivraison.getToken()).username).subscribe(res => {
      // console.log(res);
      this.livreur = res[0];
      this.livraisons = this.livreur.livraisons;

      /* this.livreur.livraisons.forEach(element => {
        if (element.etatLivraison === 'en cours') {
          this.livraisons.push(element);
        }
      });
      console.log(this.livraison); */
      
    });

  }

  
  ngAfterViewInit(){
    this.videoElement = this.video.nativeElement;
    this.canvasElement = this.canvas.nativeElement;
    console.log(this.canvasElement);
    
    this.canvasContext = this.canvasElement.getContext('2d');
  }

  async startScan(){
    const stream = await navigator.mediaDevices.getUserMedia({
      video: {facingMode: 'environment'}
    });
    this.videoElement.srcObject = stream;
    this.videoElement.setAttribute('playsinline',true);
    this.videoElement.play();

    this.loading = await this.loadingCtrl.create({});
    await this.loading.present();
    requestAnimationFrame(this.scan.bind(this));
  }

  async scan(){
    if (this.videoElement.readyState === this.videoElement.HAVE_ENOUGH_DATA) {
      if (this.loading) {
        await this.loading.dismiss();
        this.loading = null;
        this.scanActive = true;
      }

      this.canvasElement.height = this.videoElement.videoHeight;
      this.canvasElement.width = this.videoElement.videowidth;

      this.canvasContext.drawImage(
        this.videoElement,
        0,
        0,
        this.canvasElement.width,
        this.canvasElement.height
      );

      const imageData = this.canvasContext.getImageData(
        0,
        0,
        300,
        150
        /*  this.canvasElement.width,
        this.canvasElement.height  */
      );
      
      const code = jsQR(imageData.data, imageData.width, imageData.height, {
        inversionAttempts: 'dontInvert'
      });
      // console.log(code);
      if (code) {
        this.scanActive = false;
        this.scanResult = code.data;
        this.showQrToast();
      } else {
        if (this.scanActive) {
          requestAnimationFrame(this.scan.bind(this));
        }
      }
      
    } else {
      requestAnimationFrame(this.scan.bind(this));
    }
  }

  async showQrToast(){
    const toast = await this.toastCtrl.create({
      message: `Open ${this.scanResult}`,
      position: 'top',
      buttons: [
        {
          text: 'Open',
          handler: () => {
            window.open(this.scanResult, '_system', 'location=yes');
          }
        }
      ]
    });
  }

  

  cancel() {
    this.modal.dismiss(null, 'cancel');
  }

  confirm(livraison: Livraison) {
    // const input = document.querySelectorAll<HTMLInputElement>('input[type="number"]');
    livraison.commandes.forEach(element => {
    console.log(this.name,element.code);

      if (element.code === +this.name) {
        this.changerEtatCommande(element,'terminée');
        this.changerEtatLivraison(livraison,'terminée');
        this.modal.dismiss(this.name, 'confirm');

      }else{
        this.show= true;
        return;
      }
    });
    /*
    
     livraisons.forEach(element => {
      if (li) {
        array
      }
    }); */
    // this.modal.dismiss(this.name, 'confirm');
  }

  onWillDismiss(event: Event) {
    const ev = event as CustomEvent<OverlayEventDetail<string>>;
    if (ev.detail.role === 'confirm') {
      this.message = `Hello, ${ev.detail.data}!`;
    }
  }
  

  changerEtatCommande(commande: Commande, etat: string){
    this.serviceCommande.changerEtat(commande, etat);
  }

  changerEtatLivraison(livraison: Livraison, etat: string){
    this.serviceLivraison.changerEtat(livraison,etat);
  }
}
