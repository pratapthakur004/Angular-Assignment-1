import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/service/services.service';
import { Input, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  data:any
  productData: any
  userData: any = { name: '', image: '', price: '', quantity: '' }
  upid: string = ''
  constructor(private pser: ServicesService) { }

  ngOnInit(): void {
    this.pser.getAllProduct()
      .subscribe((res: any) => {
        this.productData = res
      })
  }
  delPro(id: any) {
    if (confirm("Do you eant to delete")) {
      this.pser.deleteData(id)
        .subscribe(res => {
          if (res) {
            alert("Data Deleted")
            let data = this.productData.filter((user: any) => user._id != id)
            this.productData = data
          }
        })
    }
  }

  editPro(id: any) {
    this.pser.getData(id)
      .subscribe(res => {
        this.userData = { name: res.name, image: res.image, price: res.price, qty: res.qty }
        this.upid = id;
      })
  }

  // @Input() mysearch: any
  // @Output() myevent = new EventEmitter()
  // mysearch = ' '

  // sendparent() {
  //   this.search ;
  //   this.myevent.emit(this.search)
  // }
}
