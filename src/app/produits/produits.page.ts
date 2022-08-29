import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Menu } from '../model/menu';
import { Produits } from '../model/produits';
import { ProduitService } from '../services/produit.service';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.page.html',
  styleUrls: ['./produits.page.scss'],
})
export class ProduitsPage implements OnInit {
  burgers: Produits[] = [];
  produits: Produits[] = [];
  frites: Produits[] = [];
  boissons: Produits[] = [];
  menus: Menu[] = [];

  constructor(private serviceProduit: ProduitService, private sanitizer: DomSanitizer) { }

  ngOnInit() {
    /* this.serviceProduit.getProducts().subscribe(resultat => {
      this.produits = resultat;
      resultat.forEach(element => {
        switch (element.typeProduit) {
          case 'burger':
            this.burgers.push(element);
            break;
          case 'frites':
            this.frites.push(element);
            break;
          case 'boisson':
            this.boissons.push(element);
            break;
          default:
            break;
        }
      });
      console.log(this.boissons);
      console.log(this.frites);
      console.log(this.burgers);


    });
 */

  }

  transform(img: string){
    return this.sanitizer.bypassSecurityTrustResourceUrl(img);
}
}
