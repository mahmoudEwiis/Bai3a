import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { myAnimation } from './animations/animate';
import { ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [myAnimation],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  
  title = 'Bai3a';
  showPage() {
    document.getElementById("loader").style.display = "none";
  }
  public getRouterOutletState(outlet: RouterOutlet) {
    return outlet.isActivated ? outlet.activatedRoute : '';
  }
  ngOnInit() {  
    setTimeout(this.showPage, 3000)  
} 
}
