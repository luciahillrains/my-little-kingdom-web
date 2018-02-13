import {Town} from './town';

export class Kingdom {
	name: string;
	leaderName: string;
	population: number;
	numKnights: number;
	numClerics: number;
	towns: Town[];
	baseHappiness:number;

	setVitals() {
		this.population = Math.floor((Math.random() * 5000) + 100);
		this.numKnights = Math.floor(this.population / 25) + 1;
		this.numClerics = Math.floor(this.population / 30) + 1;
		this.baseHappiness = Math.floor(Math.random() * 33);
	}

	happiness() {
		//for maximum town happiness, knights must be between 10-30% of the populace.
		var knightScore = 33;
		var lowBound = Math.floor(this.population * .1);
		var highBound = Math.floor(this.population * .3);
		//extra happy adds extra points to knight & clergy score
		//if baseHappiness is low.
		var extraHappy = Math.floor((34 - this.baseHappiness)/2);
		if(this.numKnights < lowBound) {
			knightScore = lowBound - this.numKnights;
		}
		else if (this.numKnights > highBound) {
			knightScore = this.numKnights - highBound;
		}
		if(knightScore > 33) {
			knightScore = knightScore % 33;
		}
		var clergyScore = 33;
		//for maximum town happiness, clergy must bebetween 20-40% of the populace.
		var lowBoundClergy = Math.floor(this.population * .2);
		var highBoundClergy = Math.floor(this.population * .4);
		if(this.numClerics < lowBoundClergy) {
			clergyScore = lowBoundClergy - this.numClerics;
		}
		else if (this.numClerics > highBoundClergy) {
			clergyScore = this.numClerics - highBoundClergy;
		}

		if(clergyScore > 33) {
			clergyScore = clergyScore % 33;
		}
		knightScore = knightScore + extraHappy;
		clergyScore = clergyScore + extraHappy;

		//the other third is random and is created at kingdom birth (baseHappiness);
		return knightScore + clergyScore + this.baseHappiness;
	}
}