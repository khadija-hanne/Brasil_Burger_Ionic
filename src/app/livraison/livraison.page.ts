/* eslint-disable @typescript-eslint/prefer-for-of */
/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/member-delimiter-style */
/* eslint-disable no-trailing-spaces */
/* eslint-disable @typescript-eslint/dot-notation */
/* eslint-disable @typescript-eslint/type-annotation-spacing */
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Livreur } from '../model/user';
import { AuthentificationService } from '../services/authentification.service';
import { LivraisonService } from '../services/livraison.service';
import { UserService } from '../services/user.service';
import jwt_decode from 'jwt-decode';
import { formatDate } from '@angular/common';


@Component({
  selector: 'app-livraison',
  templateUrl: './livraison.page.html',
  styleUrls: ['./livraison.page.scss'],
})
export class LivraisonPage implements OnInit {
  livreur : Livreur;
  livreurs : Livreur[];
  livraisons : any[];
  livraisonsToday : any[];
  token:any;
  // reTime = /(\d+\-\d+\-\d+)\D\:(\d+\:\d+\:\d+).+/;
  constructor(private serviceLivraison : LivraisonService, private serviceUser : UserService,private serviceAuth:AuthentificationService, private route : ActivatedRoute) { }

  ngOnInit() {

        //  console.log(this.getDecodedAccessToken(this.serviceLivraison.getToken()).username);

    this.serviceLivraison.findLivreur(this.getDecodedAccessToken(this.serviceLivraison.getToken()).username).subscribe(res => {
      console.log(res);
      this.livreur = res[0];
      this.livraisons = this.livreur.livraisons;
      console.log(this.livraisons[0].commandes[0].id);
      this.livraisons.forEach(element => {
        for (let i = 0; i < element.commandes.length; i++) {
          // console.log(element.commandes[i].date);
          this.livraisonsToday.push(element.commandes[i]);
          
        }
      });

      
    });
    

    // console.log(this.serviceLivraison.getToken());
    /* console.log(this.getDecodedAccessToken(this.serviceLivraison.getToken()).username);
    
    
    this.serviceUser.getLivreurs().subscribe(resultat => {
      this.livreurs = resultat;
    });
    this.token = this.serviceLivraison.getToken();
    this.livreur = this.livreurs.find((livreur)=> livreur.email=== this.getDecodedAccessToken(this.token).username);    
    console.log(this.livreur); */
    

  }

  getDecodedAccessToken(token: string): any {
    try {
      return jwt_decode(token);
    } catch(Error) {
      return null;
    }
  }

}
