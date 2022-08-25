/* eslint-disable @typescript-eslint/member-ordering */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/type-annotation-spacing */
import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { DomController } from '@ionic/angular';


@Directive({
  selector: '[appParallaxHeader]'
})
export class ParallaxHeaderDirective {

  // eslint-disable-next-line @typescript-eslint/type-annotation-spacing
  header : any;
  headerHeight : number;
  moveImage : number;
  scaleImage : number;
  constructor(public element : ElementRef, public renderer: Renderer2, private domCtrl: DomController) { }

  // eslint-disable-next-line @angular-eslint/use-lifecycle-interface
  ngOnInit(){
    let content = this.element.nativeElement;
    this.header = content.getElementsByClassName('parallax-image')[0];
    this.domCtrl.read(()=>{
      this.headerHeight = this.header.clientHeight;
      console.log(this.headerHeight);
    });
  }

  @HostListener('ionScroll', ['$event']) onContentScroll($event){
    const scrollTop = $event.detail.scrollTop;
    // console.log(scrollTop);

    this.domCtrl.write(() => {
      if (scrollTop > 0) {
        this.moveImage = scrollTop / 2;
        this.scaleImage = 1;
      }else{
        this.moveImage = scrollTop / 1.4;
        this.scaleImage = -scrollTop / this.headerHeight + 1;
      }
      this.renderer.setStyle(this.header, 'webkitTransform',
      'translate3d(0,'+this.moveImage+ 'px,0) scale(' + this.scaleImage+','+ this.scaleImage +')'
      );
    });
  }

}
