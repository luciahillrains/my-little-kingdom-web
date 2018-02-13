import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';
import { GameStats} from '../gamestats';
@Component({
  selector: 'app-gamestats',
  templateUrl: './gamestats.component.html',
  styleUrls: ['./gamestats.component.css']
})
export class GamestatsComponent implements OnInit {
	stats:GameStats = new GameStats();

  constructor(private dataService:DataService) { }

  ngOnInit() {
  	this.stats = this.dataService.getStats();
  }

}
