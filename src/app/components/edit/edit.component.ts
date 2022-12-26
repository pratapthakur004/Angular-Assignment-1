import { Component} from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { ServicesService } from 'src/app/service/services.service';
import { FormControl, FormGroup, Validators, AbstractControl } from '@angular/forms';

function urlValidator(control:AbstractControl){
  if(!control.value.startsWith('http') || control.value.includes('.com')){
    return {imageErr:true}
  }
  return null;
}

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})

export class EditComponent {
  myForm=new FormGroup({
    name:new FormControl('',[Validators.required, Validators.pattern('[a-z A-Z]+')]),
    price:new FormControl('',[Validators.required, Validators.pattern('[0-9]+')]),
    description:new FormControl('',[Validators.required, Validators.pattern('[a-z A-Z]+')]),
    image:new FormControl('',[Validators.required, urlValidator]),

  })

  get errorData(){
    return this.myForm.controls;
  }

  id:any
  productData:any
  upid:string=''

  proData:any = {name:'', price:'', description:'',image:''}
  constructor(private pser:ServicesService, private route:ActivatedRoute, private router: Router){}

  ngOnInit():void{
    this.id = this.route.snapshot.paramMap.get('id')
    this.pser.getData(this.id)
      .subscribe(res=>{
        this.proData = {name:res.name, price:res.price, description:res.description, image:res.image}
        this.upid = this.id
      })
  }

  update(){
    this.pser.updateData(this.proData, this.upid)
      .subscribe(res=>{
        if(res){
          alert("Data Updated")
          this.proData={name:'', price:'', image:''}
          this.upid=''
          this.pser.getAllProduct()
            .subscribe((res:any)=>{
              this.productData=res
            })
        
            this.router.navigateByUrl('home')
        }
      })
  }
}
