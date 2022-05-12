import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/modules/auth/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  authenticated = false;
  user:any;

  constructor(public auth:AuthService, private router:Router) { }

  ngOnInit(): void {

    //If the first Time that the user is autenticated this sentence have the suscription
    this.auth.isAuth$.subscribe(res =>{
      this.authenticated = res;
    });

    //If the first Time that the user is autenticated this sentence have the suscription
    this.auth.user$.subscribe(res =>{
      this.user = res;
    });

    //If the page is reload this method help to reconigzed if is auth is true, due to get the local storage
    if(this.auth.isLoggedIn()){
      this.authenticated = true;
      this.user = this.auth.getUserInfo();
    }
  }

  logout():void{
    this.auth.logout().subscribe(
      () => {
        this.authenticated = false;
        this.user=undefined;
        this.router.navigate(['auth/login']);
      }
    );
  }
  openMenu() : void{
    const element = document.querySelector('.offcanvas-collapse');
    if (element) {
      element.classList.toggle('open');
    }
  }

  closeMenu() : void{
    const element = document.querySelector('.offcanvas-collapse');
    if (element) {
      element.classList.remove('open');
    }
  }
}
