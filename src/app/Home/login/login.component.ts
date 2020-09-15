import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core-service/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  
  constructor(private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['',Validators.required],
      password: ['',Validators.required]
    })
  }

  login(){
    console.log("Autenticado");
    const usuario = this.loginForm.get('username').value;
    const senha = this.loginForm.get('password').value;



    this.authService.autenticar(usuario,senha)
          .subscribe(
            res => {
              console.log("Usuario Autenticado");
              this.router.navigate(['principal']);
            },
            error => {
              console.log("Erro no servidor.");
            }
          )
    //if(this.authService.autenticar(usuario,senha)){
    //  console.log("Usuario Autenticado");
     // this.router.navigate(['principal']);
    //}else{
   //   console.log("Usuario não Autenticado");
   // }
  }

}
