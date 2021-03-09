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
  Items=[
    { name: 'walid hrizi', age: 26 ,  imgurl:"https://scontent.fnbe1-2.fna.fbcdn.net/v/t1.0-1/c0.17.320.320a/p320x320/48414437_2055836847828770_1104734299418001408_o.jpg?_nc_cat=107&ccb=3&_nc_sid=7206a8&_nc_ohc=lXmPKvrvSyMAX-P4gfy&_nc_ht=scontent.fnbe1-2.fna&tp=27&oh=1961b9f871110d1e3ba5f58f8ba7fee9&oe=60627F71"
  },
    { name: 'hrizi ', age: 27 ,  imgurl:"https://scontent.fnbe1-2.fna.fbcdn.net/v/t1.0-1/c0.17.320.320a/p320x320/48414437_2055836847828770_1104734299418001408_o.jpg?_nc_cat=107&ccb=3&_nc_sid=7206a8&_nc_ohc=lXmPKvrvSyMAX-P4gfy&_nc_ht=scontent.fnbe1-2.fna&tp=27&oh=1961b9f871110d1e3ba5f58f8ba7fee9&oe=60627F71"
  },
    { name: 'walid', age: 28 ,   imgurl:"https://scontent.fnbe1-2.fna.fbcdn.net/v/t1.0-1/c0.17.320.320a/p320x320/48414437_2055836847828770_1104734299418001408_o.jpg?_nc_cat=107&ccb=3&_nc_sid=7206a8&_nc_ohc=lXmPKvrvSyMAX-P4gfy&_nc_ht=scontent.fnbe1-2.fna&tp=27&oh=1961b9f871110d1e3ba5f58f8ba7fee9&oe=60627F71"
  },
    ];
  onClick($event:any){
    console.log("ok is clicked",$event)
  }
}
