import { Injectable } from '@angular/core';
import {Kingdom} from './kingdom';
import {DataService} from './data.service';

@Injectable()
export class GameService {
	NUM_HIRED:number = 10;
	NUM_LOST:number = 5;
  constructor(private dataService:DataService) { }
  handleStats() {
  	var stats = this.dataService.stats;
  	stats.ap = stats.ap - 1;
  	if(stats.ap == 0) {
  		stats.ap = 12;
  		stats.years = stats.years+1;
  	}
  	this.dataService.saveStats();
  }
  holdCompetition() {
  	var kingdom = this.dataService.kingdom;
  	kingdom.numKnights = kingdom.numKnights + this.NUM_HIRED;
  	kingdom.numClerics = kingdom.numClerics - this.NUM_LOST;
  	this.dataService.saveKingdom();
  }

  holdConference() {
  	var kingdom = this.dataService.kingdom;
  	kingdom.numClerics = kingdom.numClerics + this.NUM_HIRED;
  	kingdom.numKnights = kingdom.numKnights - this.NUM_LOST;
  	this.dataService.saveKingdom();
  }

}
