import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/models/product';
import { ToastrService } from 'ngx-toastr';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss']
})
export class CreateProductComponent implements OnInit {
  myForm: FormGroup;
  createForm() {
    return this.fb.group({
      nombre: ['', Validators.required],
      categoria: ['', Validators.required],
      ubicacion: ['', Validators.required],
      precio: ['', Validators.required],
    });
  }
  title: string = 'Crear Producto';
  id_product: string | null;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private toastr: ToastrService,
    private activatedRoute: ActivatedRoute,
    private productService: ProductService,
  ) {
    this.myForm = this.createForm();
    this.id_product = this.activatedRoute.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    console.log('id_product', this.id_product);
    this.getDataUpdate();
  }

  validateSave() {
    if (this.id_product) {
      // Update
      this.updateProduct();
    } else {
      // New Post
      this.postProduct();
    }
  }

  postProduct() {
    // console.log('Nombre:', this.myForm.get('nombre')?.value);
    const data: Product = this.myForm.value;
    this.productService.postProduct(data).subscribe(res => {
      this.showSuccess();
      this.router.navigate(['/']);
    });
    console.log('Product:', data);
  }

  showSuccess() {
    this.toastr.success('Registro Exitoso!', 'Excelente!');
    // this.toastr.info('Registro Exitoso!', 'Excelente!');
  }

  getDataUpdate() {
    // this.id_product = '61492c0b918be9e5b8d54536'; // string of 12 bytes or a string of 24 hex characters
    if (this.id_product) {
      this.title = 'Editar Producto';
      const prod_subs = this.productService.getProduct(this.id_product).subscribe(data => {
        prod_subs.unsubscribe();
        console.log(data);
        this.myForm.setValue({
          nombre: data.data.nombre,
          categoria: data.data.categoria,
          ubicacion: data.data.ubicacion,
          precio: data.data.precio,
        });
      }, error => {
        console.log('Error:', error);
      });
    }
  }

  updateProduct() {
    if (this.id_product) {
      const data: Product = {
        nombre: this.myForm.get('nombre')?.value,
        categoria: this.myForm.get('categoria')?.value,
        ubicacion: this.myForm.get('ubicacion')?.value,
        precio: this.myForm.get('precio')?.value,
        // updated_at: Date.now()
      }
      this.productService.updateProducts(this.id_product, data).subscribe(res => {
        console.log('update', res);
        this.toastr.success(res.message, 'Actualizado!');
        this.router.navigate(['/']);
      }, error => {
        console.log('Error:', error);
      });
    }
  }



}
