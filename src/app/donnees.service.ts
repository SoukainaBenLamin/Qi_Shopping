import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DonneesService {

  constructor() { }
  

  private nom;
  private prenom;
  private nombre;
  private table:any[];
  
  setNom(nom1){
  this.nom=nom1
  }
  getNom(){
 	return this.nom; 
  }
  
  setPrenom(prenom1){
  this.prenom=prenom1
  }
  getPrenom(){
 	return this.prenom; 
  }
  
  setNombre(nombre1){
  this.nombre=nombre1
  }
  getNombre(){
 	return this.nombre; 
  }
  
  setTable(table1){
  this.table=table1
  }
  getTable(){
 	return this.table; 
  }
  
  
}
