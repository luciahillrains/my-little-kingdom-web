export class Town {
	name:string;
	baseHappiness:number;
	population:number;
	tourism:number;
	//do not use this number on UI, should always be generated naturally.
	private happiness:number;
	constructor(townName:string) {
		this.name = townName;
		this.population = Math.floor(Math.random() * 1000) + 50;
		this.baseHappiness = Math.floor(Math.random() * 33) + 1;
		this.generateTourism();
	}

	generateTourism() {
		console.log(this.happiness);
		this.tourism = Math.floor(Math.random() * 10);
		if(this.tourism > 5) {
			this.tourism = this.tourism - 5;
		} else {
			this.tourism = this.tourism - 10;
		}
		if(this.happiness > 0) {
			if(this.happiness < 30) {
				if(this.tourism > 0) {
					this.tourism = this.tourism * -1;
				}
			}
			else if(this.happiness < 60) {
				if(this.tourism < 0) {
					this.tourism = this.tourism * -1);
				}
			}
			else {
				this.tourism = this.tourism + 10;
			}
		}
		if(this.population <= 0 && this.tourism < 0) {
			this.tourism = this.tourism * -1;
		}
	}

	getTotalHappiness(knightPop:number, clergyPop:number) {
		var happy = this.baseHappiness;
		if(happy > 33) {
			happy = 33;
		}
		happy = happy + this.calculateHappinessFromKnights(knightPop);
		happy = happy + this.calculateHappinessFromClergy(clergyPop);
		this.happiness = happy;
		return happy;
	}
		
	calculateHappinessFromKnights(knightPop) {
		var h = 0;
		var knightsPerPop = Math.round(this.population/knightPop);

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
		if(Math.round(clergyPerPop) == 3) {
			h = 33;
		}
		if(clergyPerPop < 3) {
			h = 12;
		}
		if(clergyPerPop > 3) {
			h = 6;
		}
		return h;
	}

}