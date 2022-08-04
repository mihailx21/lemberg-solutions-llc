import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  hiddenMenuShow:boolean = false;


  onMenuClick(){
    this.hiddenMenuShow = !this.hiddenMenuShow;
  }
  onCloseMenuClick(){
    this.hiddenMenuShow = false;
  }
}
