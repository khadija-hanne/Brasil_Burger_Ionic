/* eslint-disable eol-last */
/* eslint-disable no-trailing-spaces */
/* eslint-disable @typescript-eslint/type-annotation-spacing */


export interface User{
    
    id:number;
    nom: string;
    prenom : string;
    email:string;
    password:string;
    telephone:string;
}

export interface Client{
    
    id:number;
    nom: string;
    prenom : string;
    email:string;
    telephone:string;
    adresse:string;
}

export interface Livreur{
    
    id:number;
    nom: string;
    prenom : string;
    email:string;
    telephone:string;
    matricule : string;
    etatLivreur : string;
    livraisons : any[];
}