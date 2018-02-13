import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { KingdomComponent } from './kingdom/kingdom.component';
import { AppRoutingModule } from './/app-routing.module';
import { TitleComponent } from './title/title.component';
import { KingdomCreatorComponent } from './kingdom-creator/kingdom-creator.component';
import { DataService } from './data.service';
import { MenuComponent } from './menu/menu.component';
import { GameScreenComponent } from './game-screen/game-screen.component';
import { GameService } from './game.service';
import { GamestatsComponent } from './gamestats/gamestats.component';


@NgModule({
  declarations: [
    AppComponent,
    KingdomComponent,
    TitleComponent,
    KingdomCreatorComponent,
    MenuComponent,
    GameScreenComponent,
    GamestatsComponent,
      ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [DataService, GameService],
  bootstrap: [AppComponent]
})
export class AppModule { }
