import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pere',
  templateUrl: './pere.component.html',
  styleUrls: ['./pere.component.css']
})
export class PereComponent implements OnInit {

  constructor() { }
  
tab: Array<string>=['p1','p2','p3'];
sud ='kasserine';
nord ='monastir';
capitale = 'berlin';
  ngOnInit(): void {
  }

}
