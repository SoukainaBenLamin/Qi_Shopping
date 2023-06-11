import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DonneesService } from './donnees.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EnteteComponent } from './entete/entete.component';
import { PiedPageComponent } from './pied-page/pied-page.component';
import { MagasinerComponent } from './magasiner/magasiner.component';
import { CommanderComponent } from './commander/commander.component';
import { SuiviCommandeComponent } from './suivi-commande/suivi-commande.component';
import { ContactComponent } from './contact/contact.component';
import { PaiementComponent } from './paiement/paiement.component';
import { AccueilComponent } from './accueil/accueil.component';

@NgModule({
  declarations: [
    AppComponent,
    EnteteComponent,
    PiedPageComponent,
    MagasinerComponent,
    CommanderComponent,
    SuiviCommandeComponent,
    ContactComponent,
    PaiementComponent,
    AccueilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [DonneesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
