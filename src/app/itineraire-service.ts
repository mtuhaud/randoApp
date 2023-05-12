import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Itineraire } from './itineraire';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable()
export class ItineraireService {

  
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  private itineraireUrl: string;
  private itineraire:Itineraire;

  constructor(private http: HttpClient) {
    this.itineraireUrl = 'http://localhost:8080/api';
  }

  public getItineraireById(id: number): Observable<any> {
    return this.http.get(this.itineraireUrl + '/itineraire/' + id);
  }

  public findAll(){
    return this.http.get<Itineraire[]>(this.itineraireUrl + '/itineraires');
  }

  public save(itineraire: Itineraire) {
    return this.http.post(this.itineraireUrl + '/itineraire', itineraire);
  }

  deleteItineraire(id:number){
    return this.http.delete(this.itineraireUrl + '/cancel/' + id);
  }

  public updateItineraire(itineraire: Itineraire){
    return this.http.put<Itineraire>(this.itineraireUrl + "/" + itineraire.itineraire_id, itineraire);
  }


}
