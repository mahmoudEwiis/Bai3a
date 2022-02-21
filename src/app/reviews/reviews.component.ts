import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  slidesStore=[
    {
      "id":"Item-1" ,
     "alt":"student_img" , 
     "src":"assets/images/testimonial-1.png" ,
      "title":"David Miller",
      "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nuncmauris arcu."
    },
    {
      "id":"Item-2" ,
     "alt":"student_img" , 
     "src":"assets/images/testimonial-2.png" ,
      "title":"Alex Jackson",
      "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nuncmauris arcu."
    },
    {
      "id":"Item-3" ,
     "alt":"student_img" , 
     "src":"assets/images/testimonial-3.png" ,
      "title":"Mark Anthony",
      "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nuncmauris arcu."
    },
    {
      "id":"Item-4" ,
     "alt":"student_img" , 
     "src":"assets/images/testimonial-4.png" ,
      "title":"Kelly Smith",
      "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nuncmauris arcu."
    },
  ]
  customOptions: OwlOptions = {
    items: 5,
    dots: false,
    nav: false,
    loop: true,
    center:true,
    autoplay: true,
    autoplayHoverPause:true,
    smartSpeed:1000,
    responsive: {
        992: {
            items: 3
        },
        600: {
            items: 3
        },
        320: {
            items: 1
        },
        280: {
            items: 1
        }
    }
  }
}
