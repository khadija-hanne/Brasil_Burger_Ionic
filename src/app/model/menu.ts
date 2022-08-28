/* eslint-disable @typescript-eslint/quotes */
/* eslint-disable @typescript-eslint/member-delimiter-style */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/semi */
import { Produits } from "./produits"

export interface Menu{


        id: number;
        nom: string;
        prix: number;
        image: string;
        quantite: number;
        typeProduit: string;
        gestionnaire: number;
        Burgers: [
          {
            quantite: number,
            burger: Produits,
          }
        ];
        Boissons: [
          {
            quantite: number,
            tailleBoisson: any,
          }
        ];
        Frites: [
          {
            quantite: number,
            frites: any
          }
        ];

}
