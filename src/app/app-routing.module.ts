import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MoviesDetailsComponent } from './movies-details/movies-details.component';
import { MoviesComponent } from './movies/movies.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { PouplerComponent } from './poupler/poupler.component';
import { RegisterComponent } from './register/register.component';
import { TvDetailsComponent } from './tv-details/tv-details.component';
import { TvComponent } from './tv/tv.component';



const routes: Routes = [
  {path: '', redirectTo: 'register', pathMatch:'full'},
  {path:'register', component:RegisterComponent},
  {path:'home', canActivate:[AuthGuard] , component:HomeComponent},
  {path:'movies', canActivate:[AuthGuard] ,component:MoviesComponent},
  {path:'login', component:LoginComponent},
  {path:'navbar', component:NavbarComponent},
  {path:'popluar', canActivate:[AuthGuard] ,component:PouplerComponent},
  {path:'movieDetails/:id', canActivate:[AuthGuard] ,component:MoviesDetailsComponent},
  {path:'tvDetails/:id', canActivate:[AuthGuard] ,component:TvDetailsComponent},
  {path:'tv', canActivate:[AuthGuard] ,component:TvComponent},
  {path:'**', canActivate:[AuthGuard] ,component:NotfoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
