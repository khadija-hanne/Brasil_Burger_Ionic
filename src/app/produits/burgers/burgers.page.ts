import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Produits } from 'src/app/model/produits';
import { ProduitService } from 'src/app/services/produit.service';

@Component({
  selector: 'app-burgers',
  templateUrl: './burgers.page.html',
  styleUrls: ['./burgers.page.scss'],
})
export class BurgersPage implements OnInit {

  burgers: Produits[] = [];

  constructor(private serviceProduit: ProduitService, private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.serviceProduit.getProducts('burgers').subscribe(resultat => {
      this.burgers = resultat;
  });
  }

  transform(img: string){
    return this.sanitizer.bypassSecurityTrustResourceUrl(img);
}

}
