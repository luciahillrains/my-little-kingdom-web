import { Injectable } from '@angular/core';
import {Creator} from './creator';
import {Kingdom} from './kingdom';
import {Town} from './town';
import {MOCKTOWNS} from './mock-towns';
import {GameStats} from './gamestats';
import {FeastResults} from './feastresult';
@Injectable()
export class DataService {
	kingdom:Kingdom = new Kingdom();
	stats:GameStats = new GameStats();
	selectedTown:Town = new Town("");
	feastResults:FeastResults = new FeastResults(0);
  constructor() { 
  	this.kingdom = this.getKingdom();
  	this.stats = this.getStats();
  }

  getKingdom() {
  	this.kingdom = this.getKingdomFromJSON(localStorage.kingdom);
  	return this.kingdom;
  }

  hasKingdom() {
  	return localStorage.kingdom !== undefined;
  }

  createNewData(creator:Creator) {
  	var newKingdom:Kingdom = new Kingdom();
  	newKingdom.name = creator.name;
  	newKingdom.leaderName = creator.leaderName;
  	newKingdom.towns = [];
  	var numTowns = Math.floor(Math.random() * 4) + 1;
  	newKingdom.towns = this.getTownArray(numTowns);
  	newKingdom.setVitals();

  	localStorage.kingdom = JSON.stringify(newKingdom);
  	this.createNewGameStats();
  }

  private createNewGameStats() {
  	var newStat:GameStats = new GameStats();
  	localStorage.stats = JSON.stringify(newStat);
  }

  saveKingdom() {
  	localStorage.kingdom = JSON.stringify(this.kingdom);
  }

  private getKingdomFromJSON(kingdomScript) {
  	var kingdom:Kingdom = new Kingdom();
  	var raw = JSON.parse(kingdomScript);
  	kingdom.name = raw.name;
  	kingdom.leaderName = raw.leaderName;
  	kingdom.numKnights = raw.numKnights;
  	kingdom.numClerics = raw.numClerics;
  	kingdom.baseHappiness = raw.baseHappiness;
  	kingdom.towns = [];
  	for(var i = 0; i < raw.towns.length; i++) {
  		var town:Town = new Town("");
  		town.name = raw.towns[i].name;
  		town.population = raw.towns[i].population;
  		town.baseHappiness = raw.towns[i].baseHappiness;
  		town.tourism = raw.towns[i].tourism;
  		kingdom.towns.push(town);
  	}
  	return kingdom;
  } 

  getStats() {
  	this.stats = this.getStatsFromJSON(localStorage.stats);
  	return this.stats;
  }

  private getStatsFromJSON(statsScript) {
  	var stats:GameStats = new GameStats();
  	var raw = JSON.parse(statsScript);
  	stats.years = raw.years;
  	stats.ap = raw.ap;
  	return stats;
  }

  saveStats() {
  	localStorage.stats = JSON.stringify(this.stats);
  }

  private getTownArray(size:number) {
  	var towns:Town[] = [];
  	for(var i = 0; i < size; i++) {
  		var index = Math.floor(Math.random() * MOCKTOWNS.length);
  		towns.push(new Town(MOCKTOWNS[index]));
  	}
  	return towns;
  }

  affectTownFromVisit(tvr:TownVisitResult) {
  	this.selectedTown.baseHappiness += tvr.happinessDelta;
  	this.selectedTown.population += tvr.populationDelta;
  	this.selectedTown.tourismDelta += tvr.tourismDelta;
  }

  touristsComeAndGo() {
  	var towns = this.kingdom.towns;
  	for(var town of towns) {
  		town.population += town.tourism;
  		if(town.population <= 0) {
  			town.population = 0;
  		}
  		town.generateTourism();
  	}
  }

  setCelebrationResults() {
  	var towns = this.kingdom.towns;
  	var total = 0;
  	for(var town of towns) {
  		var basePD = Math.floor((Math.random() * 1000)/towns.length);
  		town.population += basePD;
  		total += basePD;
  	}
  	this.feastResults.total = total;
  }


}
