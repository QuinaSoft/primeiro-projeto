import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './Home/login/login.component';
import { RegistrarComponent } from './Home/registrar/registrar.component';
import { PrincipalComponent } from './Home/Dashboard/principal/principal.component';
import { UsuarioComponent } from './Home/Dashboard/usuario/usuario.component';
import { ClienteComponent } from './Home/Dashboard/cliente/cliente.component';
import { AuthGuard } from './core-service/guard/auth.guard';


const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'registrar', component: RegistrarComponent, canActivate:[AuthGuard]},
  { path: 'principal', component: PrincipalComponent,canActivate:[AuthGuard],
      children: [
        { path: 'usuario', component: UsuarioComponent },
        { path: 'cliente', component: ClienteComponent }
      ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
