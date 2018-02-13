import { Injectable } from '@angular/core';
import {Creator} from './creator';
import {Kingdom} from './kingdom';
import {Town} from './town';
import {MOCKTOWNS} from './mock-towns';
import {GameStats} from './gamestats';
@Injectable()
export class DataService {
	kingdom:Kingdom;

  constructor() { }

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
  	newKingdom.setVitals();
  	newKingdom.towns = [];
  	var numTowns = Math.floor(Math.random() * 4) + 1;
  	newKingdom.towns = this.getTownArray(numTowns);
  	localStorage.kingdom = JSON.stringify(newKingdom);
  	this.createNewGameStats();
  }

  private createNewGameStats() {
  	var newStat:GameStats = new GameStats();
  	localStorage.stats = JSON.stringify(newStat);
  }

  saveKingdom(kingdom:Kingdom) {
  	localStorage.kingdom = JSON.stringify(kingdom);
  }

  private getKingdomFromJSON(kingdomScript) {
  	var kingdom:Kingdom = new Kingdom();
  	var raw = JSON.parse(kingdomScript);
  	kingdom.name = raw.name;
  	kingdom.leaderName = raw.leaderName;
  	kingdom.population = raw.population;
  	kingdom.numKnights = raw.numKnights;
  	kingdom.numClerics = raw.numClerics;
  	kingdom.baseHappiness = raw.baseHappiness;
  	kingdom.towns = [];
  	for(var i = 0; i < raw.towns.length; i++) {
  		var town:Town = new Town();
  		town.name = raw.towns[i].name;
  		kingdom.towns.push(town);
  	}
  	return kingdom;
  }

  getStats() {
  	var stats = this.getStatsFromJSON(localStorage.stats);
  	return stats;
  }

  private getStatsFromJSON(statsScript) {
  	var stats:GameStats = new GameStats();
  	var raw = JSON.parse(statsScript);
  	stats.years = raw.years;
  	stats.ap = raw.ap;
  	return stats;
  }

  saveStats(stats) {
  	localStorage.stats = JSON.stringify(stats);
  }

  private getTownArray(size:number) {
  	var towns:Town[] = [];
  	for(var i = 0; i < size; i++) {
  		var index = Math.floor(Math.random() * MOCKTOWNS.length);
  		towns.push(MOCKTOWNS[index]);
  	}
  	return towns;
  }


}
