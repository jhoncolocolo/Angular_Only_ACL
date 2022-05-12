import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  user:any;
  constructor(private auth:AuthService,) { }

  ngOnInit(): void {
    this.auth.getUser().subscribe(
      user => {
        this.user = user;
      }
    );
  }

}
