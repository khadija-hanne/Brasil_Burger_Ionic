/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/dot-notation */
/* eslint-disable @typescript-eslint/type-annotation-spacing */
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Commande } from 'src/app/model/commande';
import { Livraison } from 'src/app/model/livraison';
import { Livreur } from 'src/app/model/user';
import { LivraisonService } from 'src/app/services/livraison.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-livraison-detail',
  templateUrl: './livraison-detail.page.html',
  styleUrls: ['./livraison-detail.page.scss'],
})
export class LivraisonDetailPage implements OnInit {

  livreur : Livreur;
  livreurs : Livreur[] = [];
  livraisons : any[] = [];
  livraison : Livraison;
  commandes : Commande[] = [];
  constructor(private route: ActivatedRoute,private serviceLivraison : LivraisonService, private serviceUser : UserService) { }

  ngOnInit() {

    this.serviceLivraison.findLivreur(this.serviceUser.getDecodedAccessToken(this.serviceLivraison.getToken()).username).subscribe(res => {
      this.livreur = res[0];
      this.livraisons = this.livreur.livraisons;
      this.livraisons.forEach(element => {
          this.commandes.push(element.commandes);

      });
    });

  }






}
