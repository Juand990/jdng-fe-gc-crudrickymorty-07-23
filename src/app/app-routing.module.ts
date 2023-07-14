import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { AboutComponent } from './home/about/about.component';
import { CharactersComponent } from './home/characters/characters.component';
import { DetalleComponent } from './home/characters/detalle/detalle.component';
import { HomeComponent } from './home/home/home.component';
import { FormanadirComponent } from './formanadir/formanadir.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'about', component: AboutComponent },
  { path: 'characters', component: CharactersComponent },
  { path: 'detalle', component: DetalleComponent },
  { path: 'home', component: HomeComponent },
  { path: 'anadirnuevo', component: FormanadirComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
