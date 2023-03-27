import { product } from './../data-types';
import { ProductService } from './../services/product.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-seller-home',
  templateUrl: './seller-home.component.html',
  styleUrls: ['./seller-home.component.css']
})
export class SellerHomeComponent implements OnInit {
  productList:undefined|product[];
  productMessage:undefined | string;
  constructor( private Product:ProductService) { }

  ngOnInit(): void {
    this.list()
  }
  deleteProduct(id:number)
  {
    console.log("test id",id);
  this.Product.deleteProduct(id).subscribe((result:any)=>{
    if(result)
    {
      this.productMessage="Product is deleted";
      this.list()
    }
  })
  setTimeout(() => {
    this.productMessage=undefined
  }, 3000);

  }

  list()
  {
    this.Product.productList().subscribe((result:any)=>{console.log(result)
      this.productList=result;
      })
  }
}
