import { Component, OnInit } from '@angular/core';
import {DialogService} from '../dialog.service'
import {DataService} from '../data.service';
import {GameService} from '../game.service';
import {DialogInfo} from '../dialoginfo';
import {Town} from '../town';
import {TownVisitResults} from '../townvisitresults';

@Component({
  selector: 'app-dialog-content',
  templateUrl: './dialog-content.component.html',
  styleUrls: ['./dialog-content.component.css']
})
export class DialogContentComponent implements OnInit {
	info:DialogInfo;
	  towns:Town[];
	  tvr:TownVisitResults;
	  fr:FeastResults;
  constructor(private dialogService:DialogService, private dataService:DataService, private gameService:GameService) { }
  ngOnInit() {
  	this.info = this.dialogService.dialogInfo;
  	this.towns = this.dataService.kingdom.towns;
  	this.fr = this.dataService.feastResults;
  }

  onTownChange(idx) {
  	this.dataService.selectedTown = this.dataService.kingdom.towns[idx];
  }

  doTownVisit() {
  	this.tvr = this.gameService.doTownVisit();
  	this.dialogService.setContent("visitresults");
  }
}
