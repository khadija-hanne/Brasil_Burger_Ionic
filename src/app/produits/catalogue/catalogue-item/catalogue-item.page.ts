/* eslint-disable @typescript-eslint/type-annotation-spacing */
import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-catalogue-item',
  templateUrl: './catalogue-item.page.html',
  styleUrls: ['./catalogue-item.page.scss'],
})
export class CatalogueItemPage implements OnInit {
  @Input() product:any;
  constructor(private sanitizer:DomSanitizer) { }

  ngOnInit() {
  }
  transform(img:string){
    return this.sanitizer.bypassSecurityTrustResourceUrl(img);
}
}
