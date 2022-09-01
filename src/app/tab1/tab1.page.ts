/* eslint-disable @typescript-eslint/dot-notation */
/* eslint-disable @typescript-eslint/no-inferrable-types */
/* eslint-disable max-len */
import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthentificationService } from '../services/authentification.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  segment: string = 'grille';




  myImagePath = 'https://images.unsplash.com/photo-1601893907888-d8c9f0ecf5d3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80';
  grille=false;
  liste = true;

  constructor(private serviceAuth: AuthentificationService, private router: Router,private formBuilder: FormBuilder) {
  }

  segmentChanged(ev: any) {
    this.segment = ev.detail.value;
  }

  deconnexion(){
    localStorage.removeItem('token');
    this.router.navigateByUrl('/tabs/tab2');
  }

}
