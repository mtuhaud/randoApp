import { Component, OnInit } from '@angular/core';
import { Itineraire } from '../itineraire';
import { ActivatedRoute, Router } from '@angular/router';
import { ItineraireService } from '../itineraire-service';

@Component({
  selector: 'app-itineraire-form',
  templateUrl: './itineraire-form.component.html',
  styleUrls: ['./itineraire-form.component.scss']
})
export class ItineraireFormComponent implements OnInit {

  itineraire: Itineraire;

  constructor(
    private route: ActivatedRoute, 
    private router: Router, 
    private itineraireService: ItineraireService) { 
    this.itineraire = new Itineraire();
  }

  ngOnInit(): void {
  }
 
  gotoUserList() {
    this.router.navigate(['/itineraires']);
  }

  onSubmit(){
    this.itineraireService.save(this.itineraire).subscribe(result => this.gotoUserList());
    console.log('dans le if');
  }

}
