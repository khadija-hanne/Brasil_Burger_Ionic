/* eslint-disable eol-last */
/* eslint-disable no-trailing-spaces */
/* eslint-disable @typescript-eslint/quotes */
/* eslint-disable @typescript-eslint/member-delimiter-style */
import { Commande } from "./commande";

export interface Livraison {
    
        livreur: string,
        commandes: Commande[],
        zone: any
      
}