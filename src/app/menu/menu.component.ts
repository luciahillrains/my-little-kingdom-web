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
	NUM_HIRED:number = 10;
	NUM_LOST:number = 5;
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
  	this.dialogService.setContent("feastresults");
  	var fr = this.gameService.holdCelebration();
  	this.dialogService.show();
  }

  visitTown() {
  	this.dialogService.setContent("visittown");
  	this.dialogService.show();
  }

  canHoldCompetition() {
  	var kingdom = this.dataService.kingdom;
  	var minClerics = kingdom.numClerics > 5;
  	var numberWithinPop = ((kingdom.numKnights + this.NUM_HIRED) + (kingdom.numClerics - this.NUM_LOST)) < kingdom.population();
  	return minClerics && numberWithinPop;
  }

  canHoldConference() {
  	var kingdom = this.dataService.kingdom;
  	var minKnights = kingdom.numKnights > 5;
  	var numberWithinPop = ((kingdom.numKnights - this.NUM_LOST) + (kingdom.numClerics + this.NUM_HIRED)) < kingdom.population();
    return minKnights && numberWithinPop;
  }

  canHoldCelebration() {
  	var kingdom = this.dataService.kingdom;
  	var happiness = false;
  	for(var town of kingdom.towns) {
  		if(town.getTotalHappiness(kingdom.numKnights, kingdom.numClergy) > 50) {
  			happiness = true;
  			break;
  		}
  	}
  	return happiness;
  }

}
