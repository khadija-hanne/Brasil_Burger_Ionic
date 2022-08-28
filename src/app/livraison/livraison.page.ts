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
import { Commande } from '../model/commande';
import { Livraison } from '../model/livraison';


@Component({
  selector: 'app-livraison',
  templateUrl: './livraison.page.html',
  styleUrls: ['./livraison.page.scss'],
})
export class LivraisonPage implements OnInit {
  livreur : Livreur;
  livreurs : Livreur[];
  livraison : Livraison;
  livraisons : any[];
  livraisonsToday : any[];
  commandes: Commande[];
  token:any;
  constructor(private serviceLivraison : LivraisonService, private serviceUser : UserService,private serviceAuth:AuthentificationService, private route : ActivatedRoute) { }

  ngOnInit() {

        //  console.log(this.getDecodedAccessToken(this.serviceLivraison.getToken()).username);

    this.serviceLivraison.findLivreur(this.serviceUser.getDecodedAccessToken(this.serviceLivraison.getToken()).username).subscribe(res => {
      // console.log(res);
      this.livreur = res[0];
      this.livraisons = this.livreur.livraisons;
      console.log(this.livraisons[1].commandes);
      this.livraisons.forEach(element => {
        console.log(element);
        
        /* for (let i = 0; i < element.commandes.length; i++) {
          // console.log(element.commandes[i].date);
          this.livraisonsToday.push(element.commandes[i]);
          
        } */
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

  /* showDetail(id:number) {
    const nav = document.querySelector('ion-nav');
    const livraison = this.livraisons.find((liv) => liv.id === id);
    nav.push('nav-detail', { livraison });
  } */


  showCommandes(livraison: Livraison){
    this.commandes = [];
      livraison.commandes.forEach(element => {
        this.commandes.push(element);
      });
      return this.commandes;
  }

  getLiv(id:number){
    this.serviceLivraison.getLivraison(id).subscribe(
      res =>{
        this.livraison = res;
        console.log(this.livraison.zone); 
        this.commandes = this.livraison.commandes;
    console.log(this.commandes);

      }
    );
    return this.commandes;
    
  }
}
