import { Component, OnInit } from '@angular/core';
import { DataService} from '../data.service';
import { GameService} from '../game.service';
import {DialogService} from '../dialog.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private dataService:DataService, private gameService:GameService, private dialogService:DialogService) { }

  ngOnInit() {
  }

  holdCompetition() {
  	this.gameService.holdCompetition();
  }

  holdConference() {
  	this.gameService.holdConference();
  }

  holdCelebration() {
  	this.gameService.holdCelebration();
  }

  visitTown() {
  	this.dialogService.setContent("visittown");
  	this.dialogService.show();
  }

  canHoldCompetition() {
  	var kingdom = this.dataService.kingdom;
  	return kingdom.numClerics > 5;
  }

  canHoldConference() {
  	var kingdom = this.dataService.kingdom;
  	return kingdom.numKnights > 5;
  }

  canHoldCelebration() {
  	var kingdom = this.dataService.kingdom;
  	return kingdom.happiness() > 50;
  }

}
