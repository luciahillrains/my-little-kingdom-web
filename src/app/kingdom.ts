import {Town} from './town';

export class Kingdom {
	name: string;
	leaderName: string;
	numKnights: number;
	numClerics: number;
	towns: Town[];
	baseHappiness:number;

	setVitals() {
		this.numKnights = 50;
		this.numClerics = 50;
		this.baseHappiness = Math.floor(Math.random() * 33);
	}

	population() {
		var reducer = (accumulator, currentValue) => accumulator + currentValue.population;
		return this.towns.reduce(reducer, 0);
	}

	happiness() {
		var reducer = (accumulator, currentValue) => accumulator + currentValue.getTotalHappiness(this.numKnights, this.numClerics);
		var happyRaw = this.towns.reduce(reducer, 0);
		return Math.floor(happyRaw/this.towns.length);
	}
}