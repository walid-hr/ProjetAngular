import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pere',
  templateUrl: './pere.component.html',
  styleUrls: ['./pere.component.css']
})
export class PereComponent implements OnInit {

  constructor() { }

// tab: Array<string>=['p1','p2','p3'];

// sud ='kasserine';
// nord ='monastir';
// capitale = 'berlin';
moyenne =0;
somme=0;
nbr=0;
enfants=['walid','hrizi','Info4'];
  ngOnInit(): void {
  }
computeAvg(note:any){
this.somme += note;
this.nbr++;
this.moyenne=this.somme/this.nbr;
}
}
