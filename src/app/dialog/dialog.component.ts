import { Component, OnInit } from '@angular/core';
import {DialogService} from '../dialog.service';
import {DialogInfo} from '../dialoginfo';
@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {
	info:DialogInfo;
  constructor(private dialogService:DialogService) { }

  ngOnInit() {
  	this.info = this.dialogService.dialogInfo;
  }

  hideDialog() {
  	this.dialogService.hide();
  }

}
