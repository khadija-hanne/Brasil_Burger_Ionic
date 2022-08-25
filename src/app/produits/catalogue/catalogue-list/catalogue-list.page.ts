/* eslint-disable @typescript-eslint/type-annotation-spacing */
import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { CatalogueService } from 'src/app/services/catalogue.service';

@Component({
  selector: 'app-catalogue-list',
  templateUrl: './catalogue-list.page.html',
  styleUrls: ['./catalogue-list.page.scss'],
})
export class CatalogueListPage implements OnInit {
burgers : any[] = [];
menus : any[] = [];
  constructor(private catalogue : CatalogueService, private sanitizer : DomSanitizer) { }

  ngOnInit() {
    this.catalogue.getCatalogue().subscribe(resultat => {
      this.burgers = resultat.burger;
      this.menus = resultat.menu;
    });
  }

  transform(img:string){
    return this.sanitizer.bypassSecurityTrustResourceUrl(img);
  }


    showDetail(title) {
      const nav = document.querySelector('ion-nav');
      const burger = this.burgers.find(bur => bur.title === title);
      nav.push('nav-detail', { burger });

      // this.burgers.forEach(element => {
      //   if (element.nom === title) {
      //   nav.push('nav-detail', { element });
      //   }
      // });
    }

}
