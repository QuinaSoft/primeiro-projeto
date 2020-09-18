import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core-service/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  sair(){
    this.authService.sair();
    this.router.navigate(['login']);
  }

}
