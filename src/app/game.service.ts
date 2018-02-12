import { Injectable } from '@angular/core';
import {Kingdom} from './kingdom';
@Injectable()
export class GameService {

  constructor() { }

  hireNewClergy(kingdom:Kingdom) {
  	var newClergy = Math.floor(Math.random() * 5) + 1;
  	var deltaKnights = Math.floor(Math.random() * newClergy);
  	kingdom.numClerics = kingdom.numClerics + newClergy;
  	kingdom.numKnights = kingdom.numKnights - deltaKnights;
  	return kingdom;
  }

  hireNewKnights(kingdom:Kingdom) {
  	var newKnights = Math.floor(Math.random() * 5) + 1;
  	var deltaClergy = Math.floor(Math.random() * newKnights);
  	kingdom.numKnights = kingdom.numKnights + newKnights;
  	kingdom.numClerics = kingdom.numClerics - deltaClergy;
  	return kingdom;
  }

  initiateFeast(kingdom:Kingdom) {
  	var newPop = Math.floor(Math.random() * 1000) + 10;
  	kingdom.population = kingdom.population + newPop;
  	return kingdom;
  }
}
