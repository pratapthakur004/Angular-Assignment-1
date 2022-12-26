import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServicesService } from 'src/app/service/services.service';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent {
  proData:any
  id:any
  pid:string=''
  constructor(private pser:ServicesService, private route:ActivatedRoute){}
  ngOnInit(){
    this.id = this.route.snapshot.paramMap.get('id')
    this.proData = this.pser.getData(this.id)
      .subscribe(res=>{
        if(res)
          this.proData = res;
      })
  }

}
