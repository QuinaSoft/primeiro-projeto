import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './Home/login/login.component';
import { RegistrarComponent } from './Home/registrar/registrar.component';
import { MensagemComponent } from './Shared/mensagem/mensagem.component';
import { PrincipalComponent } from './Home/Dashboard/principal/principal.component';
import { UsuarioComponent } from './Home/Dashboard/usuario/usuario.component';
import { ClienteComponent } from './Home/Dashboard/cliente/cliente.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,
    LoginComponent,
    RegistrarComponent,
    MensagemComponent,
    PrincipalComponent,
    UsuarioComponent,
    ClienteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule, 
    FormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
