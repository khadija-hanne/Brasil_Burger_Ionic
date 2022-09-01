import { Component, OnInit } from '@angular/core';
import { Commande } from '../model/commande';
import { Client } from '../model/user';
import { CommandeService } from '../services/commande.service';
import { LivraisonService } from '../services/livraison.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.page.html',
  styleUrls: ['./client.page.scss'],
})
export class ClientPage implements OnInit {

  client: Client;
  commandes: Commande[];
  searchText: any;

  constructor(private serviceCommande: CommandeService,private serviceLivraison: LivraisonService, private serviceUser: UserService) { }

  ngOnInit() {
    this.serviceLivraison.findLivreur(this.serviceUser.getDecodedAccessToken(this.serviceLivraison.getToken()).username).subscribe(res => {
      this.client = res[0];
      this.commandes = this.client.commandes;
      /* this.commandes.forEach(element => {
        console.log(element.code);

      }); */
      // console.log(this.commandes[0].code);

    });
  }

  annulerCommande(commande: Commande, etat: string){
    console.log(etat);

      this.serviceCommande.changerEtat(commande,etat);

    console.log(etat);


  }

}
