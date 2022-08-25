/* eslint-disable @typescript-eslint/no-inferrable-types */
/* eslint-disable @typescript-eslint/dot-notation */
/* eslint-disable @typescript-eslint/type-annotation-spacing */
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { AuthentificationService } from 'src/app/services/authentification.service';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.page.html',
  styleUrls: ['./connexion.page.scss'],
})
export class ConnexionPage implements OnInit {
  user:User;
  // Nos champs requis dans le formulaire
  username: string = '';
  password: string = '';
  // Le formulaire
  form;
  constructor(private serviceAuth : AuthentificationService, private router : Router,private formBuilder: FormBuilder ) {
    this.form = this.formBuilder.group({
      username: '',
      password: ''
    });
   }

  ngOnInit() {
  }

  connexion(){
    console.log(this.form.value);
    this.serviceAuth.login(this.form.value).subscribe(res => {
      console.log(res['token']);
      // eslint-disable-next-line @typescript-eslint/dot-notation
      if (res['token']) {
        localStorage.setItem('token', res['token']);
        this.router.navigateByUrl('/tabs/tab1');
      }
      else {
        this.router.navigateByUrl('/tabs/tab2');
      }
      });
    }

}
