import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Produits } from 'src/app/model/produits';
import { ProduitService } from 'src/app/services/produit.service';

@Component({
  selector: 'app-boissons',
  templateUrl: './boissons.page.html',
  styleUrls: ['./boissons.page.scss'],
})
export class BoissonsPage implements OnInit {

  boissons: Produits[] = [];

  constructor(private serviceProduit: ProduitService, private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.serviceProduit.getProducts('boissons').subscribe(resultat => {
      this.boissons = resultat;
  });
  }

  transform(img: string){
    return this.sanitizer.bypassSecurityTrustResourceUrl(img);
}

}
