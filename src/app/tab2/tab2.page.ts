import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  slideOpts = {
    initialSlide: 0,
    speed: 400,
    autoplay: {
          delay: 3000,
          disableOnInteraction: false,
          stopOnLastSlide: true
    },
    pagination : {
      el: '.swiper-pagination',
      clickable: true
    }
  };
  constructor() {}

}
