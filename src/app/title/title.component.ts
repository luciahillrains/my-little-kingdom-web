import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit {
	hasData:boolean = false;
  constructor(private dataService:DataService) { }

  ngOnInit() {
  	this.hasData = this.dataService.hasData();
  }

}
