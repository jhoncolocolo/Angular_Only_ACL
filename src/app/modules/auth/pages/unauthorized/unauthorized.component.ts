import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-unauthorized',
  templateUrl: './unauthorized.component.html',
  styleUrls: ['./unauthorized.component.css']
})
export class UnauthorizedComponent implements OnInit {
  user:any;
  constructor(private auth:AuthService) { }

  ngOnInit(): void {
    this.user = this.auth.getUserInfo();
  }
}
