import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/product';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss']
})
export class CreateProductComponent implements OnInit {
  myForm: FormGroup;
  createForm(){
    return this.fb.group({
      nombre: ['', Validators.required],
      categoria: ['', Validators.required],
      ubicacion: ['', Validators.required],
      precio: ['', Validators.required],
    });
  }

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private toastr: ToastrService
  ) { 
    this.myForm = this.createForm();
  }

  ngOnInit(): void {
  }

  postProduct() {
    console.log('Post:', this.myForm.value);
    console.log('Nombre:', this.myForm.get('nombre')?.value);
    const product: Product = this.myForm.value;
    console.log('Product:', product);
    this.showSuccess();
    this.router.navigate(['/']);
  }

  showSuccess() {
    this.toastr.success('Registro Exitoso!', 'Excelente!');
    // this.toastr.info('Registro Exitoso!', 'Excelente!');
  }

}
