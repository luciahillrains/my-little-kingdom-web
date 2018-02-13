import { Component, OnInit } from '@angular/core';
import { DataService} from '../data.service';
import { GameService} from '../game.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private dataService:DataService, private gameService:GameService) { }

  ngOnInit() {
  }

  holdCompetition() {
  	this.gameService.holdCompetition();
  }

  holdConference() {
  	this.gameService.holdConference();
  }

  canHoldCompetition() {
  	var kingdom = this.dataService.kingdom;
  	return kingdom.numClerics > 0;
  }

  canHoldConference() {
  	var kingdom = this.dataService.kingdom;
  	return kingdom.numKnights > 0;
  }

}
