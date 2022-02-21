import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor( ) { }

  moveingBanner(e){

    let element = document.getElementById('img_box');
    let amountMovedX = (e.pageX * -0.07/4);
    let amountMovedY = (e.pageY * -0.07/4);
    element.style.transform = 'translate3d(' + amountMovedX +'px,' + amountMovedY +'px, 0)'

  }
  ngOnInit(): void {
  }

}
