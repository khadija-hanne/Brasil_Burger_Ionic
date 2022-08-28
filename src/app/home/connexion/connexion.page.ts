/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/no-inferrable-types */
/* eslint-disable @typescript-eslint/dot-notation */
/* eslint-disable @typescript-eslint/type-annotation-spacing */
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Livreur, User } from 'src/app/model/user';
import { AuthentificationService } from 'src/app/services/authentification.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.page.html',
  styleUrls: ['./connexion.page.scss'],
})
export class ConnexionPage implements OnInit {
  user:User;
  livreur : Livreur;
  livreurs : Livreur[];
  // Nos champs requis dans le formulaire
  username: string = '';
  password: string = '';
  // Le formulaire
  form;
  constructor(private serviceUser : UserService, private serviceAuth : AuthentificationService, private router : Router,private formBuilder: FormBuilder ) {
    this.form = this.formBuilder.group({
      username: '',
      password: ''
    });
   }

  ngOnInit() {
  }

  connexion(){
    this.serviceUser.getLivreurs().subscribe(res => {
      this.livreurs = res;
      // this.livreur = res.find((tech) => tech.title === title)
    });

    console.log(this.form.value);
    this.serviceAuth.login(this.form.value).subscribe(res => {

      console.log(this.livreur);
      // eslint-disable-next-line @typescript-eslint/dot-notation
      if (res['token']) {
        localStorage.setItem('token', res['token']);
        // this.getDecodedAccessToken(res['token']).roles.forEach(element => {
          if (this.serviceUser.getDecodedAccessToken(res['token']).roles[0] === 'ROLE_LIVREUR') {
            console.log(this.serviceUser.getDecodedAccessToken(res['token']).roles[0]);
            this.router.navigateByUrl('/livraison');
          }else if (this.serviceUser.getDecodedAccessToken(res['token']).roles[0] === 'ROLE_CLIENT') {
            this.router.navigateByUrl('/tabs/tab1');
          }
        // });
      }
      else {
        this.router.navigateByUrl('/tabs/tab2');
      }
      });
    }




}
