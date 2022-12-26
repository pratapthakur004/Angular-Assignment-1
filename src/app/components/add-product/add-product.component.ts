import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServicesService } from 'src/app/service/services.service';
import { FormControl, FormGroup, Validators, AbstractControl } from '@angular/forms';
function urlValidator(control:AbstractControl){
  if(!control.value.startsWith('http') || control.value.includes('.com')){
    return {imageErr:true}
  }
  return null;
}

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {

  myForm=new FormGroup({
    name:new FormControl('',[Validators.required, Validators.pattern('[a-z A-Z]+')]),
    price:new FormControl('',[Validators.required, Validators.pattern('[0-9]+')]),
    description:new FormControl('',[Validators.required, Validators.pattern('[a-z A-Z]+')]),
    image:new FormControl('',[Validators.required, urlValidator]),

  })

  get errorData(){
    return this.myForm.controls;
  }

  proData:any = {name:'',price:'',describe:'',image:''}

  constructor(private pser:ServicesService, private router:Router){}
  postData(){
    this.pser.postData(this.proData)
      .subscribe(res=>{
        this.proData = {name:'',price:'',describe:'',image:''}
        alert('Data Added')
        this.router.navigateByUrl('home')
      })
  }
}
