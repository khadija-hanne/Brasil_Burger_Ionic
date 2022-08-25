/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/type-annotation-spacing */
import { Component, OnInit } from '@angular/core';
import { CatalogueService } from 'src/app/services/catalogue.service';

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.page.html',
  styleUrls: ['./catalogue.page.scss'],
})
export class CataloguePage implements OnInit {
  burgers : any[] = [];
  menus : any[] = [];


  constructor(private catalogue:CatalogueService) { }

  ngOnInit() {
    this.catalogue.getCatalogue().subscribe(resultat => {
      console.log(resultat);
      this.menus = resultat.menu;
      this.burgers = resultat.burger;
    });
  }

}
