import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UpdateItineraireComponent } from './update-itineraire/update-itineraire.component';
import { AfficherItinerairesComponent } from './afficher-itineraires/afficher-itineraires.component';
import { ItineraireListComponent } from './litineraire-list/itineraire-list.component';
import { ItineraireFormComponent } from './itineraire-form/itineraire-form.component';


const routes: Routes = [
  { path: 'itineraires', component: ItineraireListComponent },
  { path: 'additineraire', component: ItineraireFormComponent },
  { path: 'update', component: UpdateItineraireComponent },
  { path: 'details', component: AfficherItinerairesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
