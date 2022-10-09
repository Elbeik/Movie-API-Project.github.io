import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MoviesComponent } from './movies/movies.component';
import { MoviesDetailsComponent } from './movies-details/movies-details.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { PouplerComponent } from './poupler/poupler.component';
import { TvComponent } from './tv/tv.component';
import { TvDetailsComponent } from './tv-details/tv-details.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MaxWordPipe } from './max-word.pipe';
import { OverviewPipe } from './overview.pipe';
import { SearchTvPipe } from './search-tv.pipe';
import { SearchPipe } from './search.pipe';
import { RatePipe } from './rate.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MoviesComponent,
    MoviesDetailsComponent,
    NavbarComponent,
    NotfoundComponent,
    PouplerComponent,
    TvComponent,
    TvDetailsComponent,
    RegisterComponent,
    LoginComponent,
    MaxWordPipe,
    OverviewPipe,
    SearchTvPipe,
    SearchPipe,
    RatePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
