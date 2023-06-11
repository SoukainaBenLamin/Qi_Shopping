import { Component, OnInit } from '@angular/core';
import * as liste from '../../assets/data/bd.json';
@Component({
  selector: 'app-magasiner',
  templateUrl: './magasiner.component.html',
  styleUrls: ['./magasiner.component.css']
})
export class MagasinerComponent implements OnInit {
	articles:any=(liste as any).default; 
    constructor() { }

    ngOnInit(): void {
    }

}
