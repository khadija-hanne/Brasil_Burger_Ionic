/* eslint-disable @typescript-eslint/quotes */
import { Commande } from "./commande";

export interface Zone{

    id: number;
    nom: string;
    prixLivraison: number;
    commandes: Commande[];

}
