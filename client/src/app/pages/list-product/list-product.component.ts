import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.scss']
})
export class ListProductComponent implements OnInit {
  dataProducts: Product[] = [];
  constructor(
    private productService: ProductService,
    private toastr: ToastrService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.getProducts();


    let data1: any = {
      uno: 'uno1',
      dos: 'dos',
      tres: 'tres',
      cuatro: 'cuatro'
    }

    let data2 = {
      dos: 'dos2',
      tres: 'tres2',
    }

    data1['diez'] = '55';
    console.log(data1);
  }

  getProducts() {
    this.productService.getProducts().subscribe(data => {
      console.log('data:', data);
      if (data.code && data.code === 'OK') {
        this.dataProducts = data.data ? data.data : [];
      } else {
        this.dataProducts = [];
      }
    });
  }

  editProduct(id?: string) {
    // console.log('id:', id);
    this.router.navigate(['/edit', id]);
  }

  deleteProduct(id?: string) {
    console.log('id:', id);
    this.productService.deleteProduct(id).subscribe(data => {
      console.log('data:', data);
      this.toastr.success(data.message, 'Eliminado!');
      this.getProducts();
    });
  }



}
