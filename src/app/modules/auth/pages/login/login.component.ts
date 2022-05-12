import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form!: FormGroup;
  constructor(
    private formBuilder : FormBuilder,
    private auth:AuthService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    if(this.auth.isLoggedIn()){
      this.router.navigate(['auth/home']);
    }
    this.form = this.formBuilder.group({
        email:'',
        password : ''
    })
  }

  submit(): void {
    if (this.form.valid) {
      this.auth.login(this.form.value).subscribe(
        (result) => {
          this.router.navigate(['auth/home']);
        },
        (err: Error) => {
          alert(err.message);
        }
      );
    }
  }
}
