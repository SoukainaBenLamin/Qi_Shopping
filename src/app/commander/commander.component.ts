import { Component, OnInit } from '@angular/core';
import * as liste from '../../assets/data/bd.json';
import { FormControl } from '@angular/forms';
import { DonneesService } from '../donnees.service';

@Component({
  selector: 'app-commander',
  templateUrl: './commander.component.html',
  styleUrls: ['./commander.component.css']
})
export class CommanderComponent implements OnInit {

	articles:any=(liste as any).default; 
	nbrArticle=new FormControl(0);
	name = new FormControl(''); // ajout form
	prenom = new FormControl('');
	nom=this.name;
	popup;
	aucun;
	tabArticle:any[]=[];
	
//ajout des methodes

 	 constructor(private donneesService: DonneesService) { }

 	ajouterAuPanier(elem:any){
 		this.nbrArticle.setValue(this.nbrArticle.value +1 );
 		this.aucun=false;
 		this.tabArticle[this.nbrArticle.value-1]=elem;
 	}
 
 	retirerDuPanier(elem:any){
 		let indice;
 		if(this.nbrArticle.value !=0){
 		this.nbrArticle.setValue(this.nbrArticle.value -1 );
 		    indice=this.chercher(elem);
 		    for(let i=indice ; i<this.tabArticle.length;i++){
 		    this.tabArticle[i]=this.tabArticle[i+1];
 		    }
 			
 		}
 	}
 	chercher(elem:any){
 	let i=0;
 	let verif;
 	 for(let i=0;i<this.tabArticle.length;i++){
 	 	if(this.tabArticle[i]==elem)
 	 	   verif=i;
 	 }
 	 return verif;
 	}

	passerCommande() {

		if(this.nbrArticle.value!=0) {
 			this.popup=true;
 			this.aucun=false;
 		}
 		this.verif();

	}
	
 

	verif(){
		if(this.popup!=true) {
 			this.aucun=true;
		}
	}
	
	
    payer(){
    	this.donneesService.setNom(this.name.value);
    	this.donneesService.setPrenom(this.prenom.value);
    	this.donneesService.setNombre(this.nbrArticle.value);
    	this.donneesService.setTable(this.tabArticle)
    }
	
	
	



  ngOnInit(): void {
  	
  }

}
