import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Itineraire } from '../itineraire';
import { ItineraireService } from '../itineraire-service';

@Component({
  selector: 'app-update-itineraire',
  templateUrl: './update-itineraire.component.html',
  styleUrls: ['./update-itineraire.component.scss']
})
export class UpdateItineraireComponent implements OnInit {

  id: number;
  itineraire: Itineraire;

  constructor(private route: ActivatedRoute,private router: Router,
    private itineraireService: ItineraireService) { }

  // ngOnInit() {
  //   this.itineraire = new Itineraire();

  //   this.id = this.route.snapshot.params['id'];
  //   this.itineraireService.getItineraireById(this.id)
  //     .subscribe(data => {
  //       console.log(data)
  //       this.itineraire = data;
  //     }, error => console.log(error));
  // }

  ngOnInit(){
    this.updateItineraire();
  }

  updateItineraire(){
    let id = localStorage.getItem("id");
    this.itineraireService.getItineraireById(+id)
    .subscribe(data => {
      console.log(data)
      this.itineraire = data;
    })
  }

  submit(itineraire:Itineraire){
    this.itineraireService.updateItineraire(itineraire)
    .subscribe(data=>{
      this.itineraire=data;
      this.router.navigate(["itineraires"]);
    })
  }

  list(){
    this.router.navigate(['itineraires']);
  }

}
