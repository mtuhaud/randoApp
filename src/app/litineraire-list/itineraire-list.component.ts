import { Component, OnInit } from '@angular/core';
import { ItineraireService } from '../itineraire-service';
import { Itineraire } from '../itineraire';
import { Router } from '@angular/router';

@Component({
  selector: 'app-itineraire-list',
  templateUrl: './itineraire-list.component.html',
  styleUrls: ['./itineraire-list.component.scss']
})
export class ItineraireListComponent implements OnInit {

  itineraires: any;
  constructor(private itineraireService: ItineraireService, private router: Router) { }

  ngOnInit(): void {
    this.itineraireService.findAll().subscribe(
      data => this.itineraires = data
    )
  }

  deleteItineraire(itineraire) {
    this.itineraireService.deleteItineraire(itineraire.itineraire_id).subscribe(() => {
      this.itineraireService.findAll().subscribe((data) => {
        this.itineraires = data;
      });
    });
  }

  updateItineraire(itineraire: Itineraire):void{
    localStorage.setItem("id", itineraire.itineraire_id.toString());
    this.router.navigate(["update"]);
  }

  itineraireDetails(itineraire: Itineraire){
    localStorage.setItem("id", itineraire.itineraire_id.toString());
    this.router.navigate(['details']);
  }

}
