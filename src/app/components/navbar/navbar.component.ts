import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServicesService } from 'src/app/service/services.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  proData:any = {search:''}
  constructor(private pser:ServicesService, private route:ActivatedRoute){}
  search(){
    this.proData = this.search
  }

}
