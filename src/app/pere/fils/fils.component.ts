import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-fils',
  templateUrl: './fils.component.html',
  styleUrls: ['./fils.component.css']
})
export class FilsComponent implements OnInit {
@Input() nom: string="";
@Output() message =new EventEmitter<number>();
note: any;
buttonStatus : boolean =false;
//   constructor() { }
// @Input() ordre: string="";
// @Input() villeNaissance: string=""
  ngOnInit(): void {
  }
send(){
  this.message.emit(this.note);
  this.buttonStatus =true;
}
}
