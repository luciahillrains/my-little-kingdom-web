export class TownVisitResults {
	content:string;
	happinessDelta:number;
	populationDelta:number;
	tourismDelta:number;

	constructor(townName:String) {
		var sentences = [
			`The town of ${townName} was happy to see you!`,
			`The town of ${townName} ran you out!`,
			`The town of ${townName} just didn't care at all about you!`			
		];
		var sentencesUsed = Math.floor(Math.random() * sentences.length);
		this.content = sentences[sentencesUsed];
		var happinessDeltaMax = 10;
		var populationDeltaMax = 50;
		var tourismDeltaMax = 5;
		if(sentencesUsed == 1) {
			happinessDeltaMax = -20;
			populationDeltaMax = 0;
			tourismDeltaMax = 0;
		}
		if(sentencesUsed == 2) {
			happinessDeltaMax = 5;
			populationDeltaMax = 20;
			tourismDeltaMax = 1;
		}
		this.happinessDelta = Math.floor(Math.random() * happinessDeltaMax);
		this.populationDelta = Math.floor(Math.random() * populationDeltaMax);
		this.tourismDelta = Math.floor(Math.random() * tourismDeltaMax);
	}

	results() {
		return [
			`Town Happiness increased by ${this.happinessDelta}!`,
			`Town Population increased by ${this.populationDelta}!`,
			`Town tourism increased by ${this.tourismDelta}!`
		];
	}
}