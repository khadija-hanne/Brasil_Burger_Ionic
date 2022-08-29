import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Produits } from 'src/app/model/produits';
import { ProduitService } from 'src/app/services/produit.service';

@Component({
  selector: 'app-frites',
  templateUrl: './frites.page.html',
  styleUrls: ['./frites.page.scss'],
})
export class FritesPage implements OnInit {

  frites: Produits[] = [];

  constructor(private serviceProduit: ProduitService, private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.serviceProduit.getProducts('frites').subscribe(resultat => {
      this.frites = resultat;
  });
  }

  transform(img: string){
    return this.sanitizer.bypassSecurityTrustResourceUrl(img);
}

}
