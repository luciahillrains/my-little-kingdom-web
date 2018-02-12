import { Component, OnInit } from '@angular/core';
import {Creator} from '../creator';
import {DataService} from '../data.service';

@Component({
  selector: 'app-kingdom-creator',
  templateUrl: './kingdom-creator.component.html',
  styleUrls: ['./kingdom-creator.component.css']
})
export class KingdomCreatorComponent implements OnInit {
	creator:Creator =  {
		name: "Name",
		leaderName: "leaderName"
	}
  constructor(private dataService:DataService) { }

  ngOnInit() {
  }

  saveData() {
    this.dataService.createNewData(this.creator);

  }

}
