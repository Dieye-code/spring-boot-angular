import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Localite } from '../model/localite';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LocaliteService {

  constructor(private http:HttpClient) { }

  getLocalite(): Observable<Localite[]>{
    return this.http.get<Localite[]>("http://localhost:8080/Localite").pipe(
      map(response => response)
    )
  }

  saveLocalite(localite : Localite) : Observable<Localite>{
    return this.http.post<Localite>("http://localhost:8080/Localite/add" , localite)
  }


}
