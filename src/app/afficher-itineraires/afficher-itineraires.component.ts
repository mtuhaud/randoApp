import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Itineraire } from '../itineraire';
import { ItineraireService } from '../itineraire-service';

@Component({
  selector: 'app-afficher-itineraires',
  templateUrl: './afficher-itineraires.component.html',
  styleUrls: ['./afficher-itineraires.component.scss']
})
export class AfficherItinerairesComponent implements OnInit {

  id: number;
  itineraire: Itineraire;

  constructor(private route: ActivatedRoute,private router: Router,
    private itineraireService: ItineraireService) { }

  ngOnInit(): void {
    this.getItineraire();
  }

  getItineraire(){
    let id = localStorage.getItem("id");
    this.itineraireService.getItineraireById(+id)
    .subscribe(data => {
      console.log(data)
      this.itineraire = data;
    })
  }

  list(){
    this.router.navigate(['itineraires']);
  }

}
