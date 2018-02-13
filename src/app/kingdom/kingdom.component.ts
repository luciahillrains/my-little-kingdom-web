import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';
import {Kingdom} from '../kingdom';
import {Town} from '../town';

@Component({
  selector: 'app-kingdom',
  templateUrl: './kingdom.component.html',
  styleUrls: ['./kingdom.component.css']
})
export class KingdomComponent implements OnInit {
  kingdom:Kingdom ;


  constructor(private dataService:DataService) { }

  ngOnInit() {
  	  	this.kingdom = this.dataService.getKingdom();
  }

}
