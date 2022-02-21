import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor() { }
  public products =[
    {
      "productId":"product-1",
      "productTitle":"Salomon Sneakers" , 
      "imgPath":"assets/images/product-img1.jpg", 
      "imgAlt":"product-img1" , 
    },
    {
      "productId":"product-2",
      "productTitle":"Salomon Sneakers" , 
      "imgPath":"assets/images/product-img2.jpg", 
      "imgAlt":"product-img1" , 
    },
    {
      "productId":"product-3",
      "productTitle":"Salomon Sneakers" , 
      "imgPath":"assets/images/product-img3.jpg", 
      "imgAlt":"product-img1" , 
    },
    {
      "productId":"product-4",
      "productTitle":"Salomon Sneakers" , 
      "imgPath":"assets/images/product-img4.jpg", 
      "imgAlt":"product-img1" , 
    },
    {
      "productId":"product-5",
      "productTitle":"Salomon Sneakers" , 
      "imgPath":"assets/images/product-img5.jpg", 
      "imgAlt":"product-img1" , 
    },
    {
      "productId":"product-6",
      "productTitle":"Salomon Sneakers" , 
      "imgPath":"assets/images/product-img6.jpg", 
      "imgAlt":"product-img1" , 
    },
  ]
  ngOnInit(): void {
  }
  customOptions: OwlOptions = {
    items: 5,
    dots: false,
    nav: true,
    navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
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
