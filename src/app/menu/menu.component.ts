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

  hireClergy() {
  	var kingdom = this.dataService.getData();
  	kingdom = this.gameService.hireNewClergy(kingdom);
  	//this.dataService.saveData(kingdom);
  	this.refreshPage();
  }

  hireKnights() {
  	var kingdom = this.dataService.getData();
  	kingdom = this.gameService.hireNewKnights(kingdom);
  	//this.dataService.saveData(kingdom);
  	this.refreshPage();
  }

  initiateFeast() {
  	var kingdom = this.dataService.getData();
  	kingdom = this.gameService.initiateFeast(kingdom);
  	//this.dataService.saveData(kingdom);
  	this.refreshPage();
  }

  refreshPage() {
  	window.location.reload();
  }

}
