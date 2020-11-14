import { Component, OnInit } from '@angular/core';
import { Localite } from 'src/app/model/localite';
import { LocaliteService } from 'src/app/service/localite.service';

@Component({
  selector: 'app-localite',
  templateUrl: './localite.component.html',
  styleUrls: ['./localite.component.css']
})
export class LocaliteComponent{

  lat = 14.770234;
  long = -16.8693327;
  zoom = 10;
  title = "Keur Mor Ndiaye";
  locals : Localite[];

  loc = new Localite();

  // localites = [
  //   {
  //     latitude:14.770234,
  //     longitude:-16.869333,
  //     name:"Keur Mor Ndiaye"

  //   },
  //   {
  //     id:2,"latitude":14.786076,
  //     longitude:-16.913818,
  //     name:"Diamaguene"
  //   }
  // ]



 

  constructor(private localiteService: LocaliteService) { }

  ngOnInit(): void {
    this.localiteService.getLocalite().subscribe(
      data => this.locals = data
    );

      this.loc.name = "";
      this.loc.latitude = 0;
      this.loc.longitude = 0;

  }

  saveLocalite(){
    this.localiteService.saveLocalite(this.loc).subscribe(
      data => {
        this.locals.push(data);
        this.loc = new Localite();  
      }
    )
  }

}
