import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'EpiTp';
  name: string="";
  onClick($event:any){
    console.log("ok is clicked",$event)
  }
}
