/* eslint-disable eol-last */
/* eslint-disable no-trailing-spaces */
/* eslint-disable @typescript-eslint/quotes */
/* eslint-disable @typescript-eslint/member-delimiter-style */
import { Commande } from "./commande";
import { Zone } from "./zone";

export interface Livraison {
        id: number;
        livreur: string,
        date: Date;
        etatLivraison: string;
        commandes: Commande[],
        zone: Zone
      
}