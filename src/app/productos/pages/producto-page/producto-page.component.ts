import { Component, inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  templateUrl: './producto-page.component.html',
  styleUrls: ['./producto-page.component.css']
})
export class ProductoPageComponent {

  // constructor(private fb: FormBuilder){}
  private fb = inject(FormBuilder);

  public color: string = 'blue';

  public myForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(6), Validators.email]]
  })

  changeColor(): void{
    this.color = '#xxxxxx'.replace(/x/g, y=>(Math.random()*16|0).toString(16));
  }
}
