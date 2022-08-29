import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Menu } from 'src/app/model/menu';
import { ProduitService } from 'src/app/services/produit.service';

@Component({
  selector: 'app-menus',
  templateUrl: './menus.page.html',
  styleUrls: ['./menus.page.scss'],
})
export class MenusPage implements OnInit {

  menus: Menu[] = [];

  constructor(private serviceProduit: ProduitService, private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.serviceProduit.getMenus().subscribe(resultat => {
      this.menus = resultat;
  });
  }

  transform(img: string){
    return this.sanitizer.bypassSecurityTrustResourceUrl(img);
}

}
