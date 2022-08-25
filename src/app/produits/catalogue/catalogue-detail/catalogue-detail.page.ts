/* eslint-disable @typescript-eslint/type-annotation-spacing */
/* eslint-disable no-trailing-spaces */
/* eslint-disable @typescript-eslint/dot-notation */
import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Menu } from 'src/app/model/menu';
import { ProduitService } from 'src/app/services/produit.service';

@Component({
  selector: 'app-catalogue-detail',
  templateUrl: './catalogue-detail.page.html',
  styleUrls: ['./catalogue-detail.page.scss'],
})
export class CatalogueDetailPage implements OnInit {

  product: Menu;
  
  constructor(private route:ActivatedRoute, private serviceProduit:ProduitService,private sanitizer : DomSanitizer) { }

  ngOnInit() {
    const productId = this.route.snapshot.params['id'];
    this.serviceProduit.getProduct(productId).subscribe(resultat => 
      {
        this.product = resultat;
        
      }
    );
  }

}
