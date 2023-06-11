import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MagasinerComponent } from './magasiner/magasiner.component' ;
import { ContactComponent } from './contact/contact.component';
import {CommanderComponent } from './commander/commander.component';
import { PaiementComponent } from './paiement/paiement.component';
import { SuiviCommandeComponent } from './suivi-commande/suivi-commande.component';
import { AccueilComponent } from './accueil/accueil.component';


const routes: Routes = [
 {path: 'magasiner', component:MagasinerComponent },
 {path: 'commander', component:CommanderComponent },
 {path: 'contact', component: ContactComponent },
 {path: 'gérant', redirectTo: '/contact' },
 {path: 'paiment', component:PaiementComponent },
 {path: 'suivi',component:SuiviCommandeComponent},
 { path: '', redirectTo: '/home', pathMatch: 'full' },
 {path:'home',component:AccueilComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
