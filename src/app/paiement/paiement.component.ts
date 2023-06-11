import { Component, OnInit } from '@angular/core';
import { DonneesService } from '../donnees.service';
@Component({
  selector: 'app-paiement',
  templateUrl: './paiement.component.html',
  styleUrls: ['./paiement.component.css']
})
export class PaiementComponent implements OnInit {
  public nom;
  public prenom;
  public nombre;
  public table:any[]=[];
  donnees:DonneesService 
  constructor(donnees:DonneesService ) {
  debugger;  
  this.nom=donnees.getNom();
  this.prenom=donnees.getPrenom();
  this.nombre=donnees.getNombre();
  this.table=donnees.getTable();
  }

  ngOnInit(): void {
  }
  

}
