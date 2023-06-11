import { Component, OnInit } from '@angular/core';
import * as liste from '../../assets/data/bd.json';
import * as liste1  from '../../assets/data/commandes.json';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-suivi-commande',
  templateUrl: './suivi-commande.component.html',
  styleUrls: ['./suivi-commande.component.css']
})
export class SuiviCommandeComponent implements OnInit {

    elements:any=(liste as any).default; 
	commandes:any=(liste1 as any).default.articles;
	verif=false;
	verif1=false;
	nonExiste;
	start=false;
	numCommande=new FormControl('');
	
	constructor() { }
	
	ngOnInit(): void {
	}
	
	chercherDansJson() {
		let commandCherche:any;
		let erreur:String="erreur";
		let i=0;
		this.nonExiste=false;	
	  	for(let elem of this.commandes) {
	    	if(elem.numero==this.numCommande.value) {
	        	commandCherche=elem;
	        	this.verif=true;   
	        }
	   		i=i+1;
	  	}
	 	if(this.verif!=true) {
	    this.nonExiste=true;
	    commandCherche=erreur;
	    }
		return commandCherche;
	}
	
	get() {
		this.nonExiste=false;
	 	this.verif=false;
	}
	get1() {
		this.verif1=true;
		this.verif=true;
	}
	
		
	chercherArticle(element:any) {
		let jsonCherche:any;
		for(let article of this.elements){
			if(article.id==element.id){
				jsonCherche=article;
				this.verif=false;
				this.verif1=false;
			}
		}
		return jsonCherche;
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	


}
