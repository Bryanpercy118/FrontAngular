import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-edit-products',
  templateUrl: './add-edit-products.component.html',
  styleUrl: './add-edit-products.component.css'
})
export class AddEditProductsComponent {

  form: FormGroup;

  constructor(private fb: FormBuilder) { 
    this.form = this.fb.group({
      name: ['',Validators.required],
      description: ['',Validators.required],
      price: ['',Validators.required],
      stock: ['',Validators.required]
    });
  }

  ngOnInit(): void {
    
  }

  addProduct(){
    console.log(this.form);
  }

}
