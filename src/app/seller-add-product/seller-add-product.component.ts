import { ProductService } from './../services/product.service';
import { Component, OnInit } from '@angular/core';
import { product } from '../data-types';

@Component({
  selector: 'app-seller-add-product',
  templateUrl: './seller-add-product.component.html',
  styleUrls: ['./seller-add-product.component.css']
})
export class SellerAddProductComponent implements OnInit {
  addProductMessage: string | undefined

  constructor(private product: ProductService) { }

  ngOnInit(): void {
  }


  submit(data: product) {
    // console.log(data);

    this.product.addProduct(data).subscribe((result: any) => {
      console.log(result);
      if (result) {
        this.addProductMessage = "Product Add successfully"
      };
      setTimeout(() => {
        this.addProductMessage = undefined
      }, 3000);
    })
  }



}
