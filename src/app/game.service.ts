import { Injectable } from '@angular/core';
import {Kingdom} from './kingdom';
import {DataService} from './data.service';
import {TownVisitResults} from './townvisitresults';
@Injectable()
export class GameService {
	NUM_HIRED:number = 10;
	NUM_LOST:number = 5;
	NUM_POP_INCREASE:number = 500;
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
  	this.handleStats();
  	this.dataService.saveKingdom();
  }

  holdConference() {
  	var kingdom = this.dataService.kingdom;
  	kingdom.numClerics = kingdom.numClerics + this.NUM_HIRED;
  	kingdom.numKnights = kingdom.numKnights - this.NUM_LOST;
  	this.handleStats();
  	this.dataService.saveKingdom();
  }

  holdCelebration() {
  	var kingdom = this.dataService.kingdom;
  	kingdom.population = kingdom.population + this.NUM_POP_INCREASE;
  	this.handleStats();
  	this.dataService.saveKingdom();
  }

  doTownVisit() {
  	var selectedTown = this.dataService.selectedTown;
  	var tvr = new TownVisitResults(selectedTown.name);
  	this.dataService.affectTownFromVisit(tvr);
  	this.handleStats();
  	return tvr;
  }

}
