export class Town {
	name:string;
	happiness:number;
	population:number;
	tourism:number;

	constructor(townName:string, knightPop:number, clergyPop:number) {
		this.name = townName;
		this.population = Math.floor(Math.random() * 1000) + 50;
		this.baseHappiness = Math.floor(Math.random() * 33) + 1;
		this.tourism = Math.floor(Math.random() * 10);
		if(this.tourism > 5) {
			this.tourism = this.tourism - 5;
		} else {
			this.tourism = this.tourism - 10;
		}
	}

	getTotalHappiness(knightPop:number, clergyPop:number) {
		var happy = happiness;
		if(happy > 33) {
			happy = 33;
		}
		happy = happy + calculateHappinessFromKnights(knightPop);
		happy = happy + calculateHappinessFromClergy(clergyPop);
		return happy;
	}
		
	calculateHappinessFromKnights(knightPop) {
		var h = 0;
		var knightPerPop = Math.round(this.population/knightPop);

		if(Math.round(knightsPerPop) === 5) {
			h = 33;
		}
		if(knightsPerPop < 5) {
			h = 12;
		}
		if(knightsPerPop > 5) {
			h = 6;
		}
		return h;
	}
	calculateHappinessFromClergy(clergyPop) {
		var h = 0;
		var clergyPerPop = this.population/clergyPop;
		if(Math.round(clergyPerPop) == 2) {
			h = 33;
		}
		if(knightsPerPop < 2) {
			h = 6;
		}
		if(knightsPerPop > 2) {
			h = 6;
		}
		return h;
	}

}