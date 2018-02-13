import { Component, OnInit } from '@angular/core';
import { GameStats} from '../gamestats';
@Component({
  selector: 'app-gamestats',
  templateUrl: './gamestats.component.html',
  styleUrls: ['./gamestats.component.css']
})
export class GamestatsComponent implements OnInit {
	stats:GameStats = new GameStats();
  constructor() { }

  ngOnInit() {
  }

}
