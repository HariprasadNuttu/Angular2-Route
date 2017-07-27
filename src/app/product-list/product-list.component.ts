import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products=[{
    id:1,
    name:"Lenovo"
  },{
    id:2,
    name:"Dell"
  },{
    id:3,
    name:"Apple"
  }]
  constructor(private router:Router) { }

  ngOnInit() {
  }

  goToProductDetails(id) {
  this.router.navigate(['/product-details', id]);
  }
}
