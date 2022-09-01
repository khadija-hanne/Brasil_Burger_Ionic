/* eslint-disable @typescript-eslint/quotes */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/type-annotation-spacing */
import { Menu } from "./menu";
import { Produits } from "./produits";
import { Client, User } from "./user";
import { Zone } from "./zone";

export interface Commande {

    id : number;
    client : Client;
    date : Date;
    reference : string;
    code : number;
    etatCommande :string;
    Produits : [
        {
            quantite : number;
            produit : Produits | Menu;
        },
        {
            quantite : number;
            produit : Produits | Menu;
        }
    ];

    zone : Zone;

}
