import { Injectable } from '@angular/core';
import {Kingdom} from './kingdom';
@Injectable()
export class GameService {

  constructor() { }
  NUM_HIRED:number = 5;
  NUM_LOST:number = 3;

  hireNewClergy(kingdom:Kingdom) {
  	var newClergy = this.NUM_HIRED;
  	var deltaKnights = this.NUM_LOST;
  	kingdom.numClerics = kingdom.numClerics + newClergy;
  	kingdom.numKnights = kingdom.numKnights - deltaKnights;
  	return kingdom;
  }

  hireNewKnights(kingdom:Kingdom) {
  	var newKnights = this.NUM_HIRED;
  	var deltaClergy = this.NUM_LOST;
  	kingdom.numKnights = kingdom.numKnights + newKnights;
  	kingdom.numClerics = kingdom.numClerics - deltaClergy;
  	return kingdom;
  }

  initiateFeast(kingdom:Kingdom) {
  	var newPop = 500;
  	kingdom.population = kingdom.population + newPop;
  	return kingdom;
  }
}
