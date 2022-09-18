import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AfficherItinerairesComponent } from './afficher-itineraires/afficher-itineraires.component';

import { HttpClientModule } from '@angular/common/http';
import { ItineraireFormComponent } from './itineraire-form/itineraire-form.component';
import { ItineraireService } from './itineraire-service';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { UpdateItineraireComponent } from './update-itineraire/update-itineraire.component';
import { ItineraireListComponent } from './litineraire-list/itineraire-list.component';

// const appRoutes:Routes = [
//   {path:'', component:ItineraireListComponent},
//   {path:'op', component:ItineraireFormComponent}
// ];

@NgModule({
  declarations: [
    AppComponent,
    AfficherItinerairesComponent,
    ItineraireListComponent,
    ItineraireFormComponent,
    UpdateItineraireComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    // RouterModule.forRoot(appRoutes)
  ],
  providers: [ItineraireService],
  bootstrap: [AppComponent]
})
export class AppModule { }
