import { Injectable } from '@angular/core';
import {DialogInfo} from './dialoginfo';

@Injectable()
export class DialogService {
	dialogInfo:DialogInfo = new DialogInfo();
  constructor() {
  	this.dialogInfo.isVisible = false;
  	this.dialogInfo.content = "hi peanut";
   }

   show() {
   	this.dialogInfo.isVisible = true;
   }

   hide() {
   	this.dialogInfo.isVisible = false;
   }

   setContent(someText:string) {
   	this.dialogInfo.content = someText;
   }


}
